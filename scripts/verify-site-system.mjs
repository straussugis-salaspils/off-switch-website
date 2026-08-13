import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const fail = (message) => { throw new Error(message); };
const expect = (condition, message) => { if (!condition) fail(message); };

const translatedSource = read("src/content/translated-articles.ts");
const pilotSource = read("src/content/pilot-articles.ts");
const applicationSource = read("src/content/article-method-applications.ts");
const visualSource = read("src/content/article-visuals.ts");
const translatedPageSource = read("src/components/library/TranslatedArticlePage.tsx");
const pilotPageSource = read("src/components/library/PilotArticlePage.tsx");
const footerSource = read("src/components/layout/Footer.tsx");
const issuePageLayoutSource = read("src/components/blocks/IssuePageLayout.tsx");
const groupPageSource = read("src/app/group/page.tsx");
const conversionLinksSource = read("src/lib/conversion-links.ts");
const nextConfigSource = read("next.config.ts");
const sitemapSource = read("src/app/sitemap.ts");

const articleFiles = new Map(
  [...translatedSource.matchAll(/id:\s*"([A-Z]+-\d+)",[\s\S]*?fileName:\s*"([^"]+)"/g)]
    .map((match) => [match[1], match[2]]),
);
const pilotSlugs = [...pilotSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

function objectSlices(source, marker) {
  const matches = [...source.matchAll(marker)];
  return matches.map((match, index) => source.slice(match.index, matches[index + 1]?.index ?? source.length));
}

function field(block, name) {
  return block.match(new RegExp(`${name}:\\s*"([^"]+)"`))?.[1];
}

const translatedEntries = objectSlices(translatedSource, /\n  \{\n    id:\s*"[A-Z]+-\d+"/g).map((block) => ({
  id: field(block, "id"),
  slug: field(block, "slug"),
  path: field(block, "path"),
  seoTitle: field(block, "seoTitle"),
  primaryQuery: field(block, "primaryQuery"),
  categorySlug: field(block, "categorySlug"),
  primaryNextId: field(block, "primaryNextId"),
  secondaryNextId: field(block, "secondaryNextId"),
}));
const pilotEntries = objectSlices(pilotSource, /\n  \{\n    slug:\s*"[^"]+"/g).map((block, index) => ({
  id: `M-0${index + 1}`,
  slug: field(block, "slug"),
  seoTitle: field(block, "seoTitle"),
  primaryQuery: field(block, "primaryQuery"),
}));

expect(articleFiles.size === 48, `Expected 48 translated articles, found ${articleFiles.size}`);
expect(pilotSlugs.length === 3, `Expected 3 Method pilot articles, found ${pilotSlugs.length}`);
expect(translatedEntries.length === 48, `Expected 48 translated SEO owners, found ${translatedEntries.length}`);
expect(pilotEntries.length === 3, `Expected 3 Method SEO owners, found ${pilotEntries.length}`);

function expectUnique(values, label) {
  const normalised = values.map((value) => value?.trim().toLowerCase());
  expect(normalised.every(Boolean), `${label} contains a missing value`);
  expect(new Set(normalised).size === normalised.length, `${label} contains a duplicate value`);
}

const owners = [...translatedEntries, ...pilotEntries];
expectUnique(owners.map((entry) => entry.slug), "Article slugs");
expectUnique(owners.map((entry) => entry.seoTitle), "SEO titles");
expectUnique(owners.map((entry) => entry.primaryQuery), "Primary queries");

const validNextIds = new Set([...translatedEntries.map((entry) => entry.id), ...pilotEntries.map((entry) => entry.id), "METHOD"]);
for (const entry of translatedEntries) {
  expect(entry.primaryNextId && validNextIds.has(entry.primaryNextId), `${entry.id} has an invalid primary next read: ${entry.primaryNextId}`);
  expect(entry.primaryNextId !== entry.id, `${entry.id} links to itself as the primary next read`);
  if (entry.secondaryNextId) {
    expect(validNextIds.has(entry.secondaryNextId), `${entry.id} has an invalid secondary next read: ${entry.secondaryNextId}`);
    expect(entry.secondaryNextId !== entry.id, `${entry.id} links to itself as the secondary next read`);
    expect(entry.secondaryNextId !== entry.primaryNextId, `${entry.id} uses the same primary and secondary next read`);
  }
}

const headingSets = new Map();
for (const [id, fileName] of articleFiles) {
  const markdown = read(path.join("src/content/articles", fileName));
  const headings = new Set([...markdown.matchAll(/^#{2,3}\s+(.+)$/gm)].map((match) => match[1].trim()));
  headingSets.set(id, headings);
}

const applications = [...applicationSource.matchAll(/"([A-Z]+-\d+)":\s*\{\s*insertBeforeHeading:\s*"([^"]+)"/g)];
expect(applications.length === 18, `Expected 18 Method applications, found ${applications.length}`);
for (const [, id, anchor] of applications) {
  expect(articleFiles.has(id), `Method application ${id} has no translated article`);
  expect(headingSets.get(id)?.has(anchor), `Method application ${id} anchor is missing: ${anchor}`);
}

const visuals = [...visualSource.matchAll(/"([A-Z]+-\d+)":\s*(?:\{\s*\.\.\.)?visual\("[^"]+",\s*"([^"]+)",\s*"([^"]+)"/g)];
expect(visuals.length === 31, `Expected 31 configured concept visuals, found ${visuals.length}`);
for (const [, id, fileName, anchor] of visuals) {
  expect(fs.existsSync(path.join(root, "public/images/article-visuals/editorial", fileName)), `Visual asset is missing: ${fileName}`);
  if (id === "M-01" || id === "M-02") {
    expect(pilotSource.includes(`text: "${anchor}"`), `Pilot visual ${id} anchor is missing: ${anchor}`);
  } else {
    expect(articleFiles.has(id), `Visual ${id} has no translated article`);
    expect(headingSets.get(id)?.has(anchor), `Visual ${id} anchor is missing: ${anchor}`);
  }
}
const visualAssetCount = fs.readdirSync(path.join(root, "public/images/article-visuals/editorial")).filter((name) => name.endsWith(".webp")).length;
expect(visualAssetCount === 32, `Expected 32 visual assets, found ${visualAssetCount}`);

for (const [name, source] of [["translated", translatedPageSource], ["pilot", pilotPageSource]]) {
  for (const marker of ["ArticleTableOfContents", "ArticleConceptVisual", "data-frozen-article-title", "data-frozen-article-body", "data-ai-summary"])
    expect(source.includes(marker), `${name} article template is missing ${marker}`);
}
expect(translatedPageSource.includes("ArticleMethodApplication"), "Translated article template is missing Method applications");
for (const [name, source] of [["translated", translatedPageSource], ["pilot", pilotPageSource]]) {
  for (const marker of ["data-article-commercial-view", "bg-accent", "Next article", "bg-deep", "bg-white", "About the author", "Ugis Strauss"])
    expect(source.includes(marker), `${name} article template is missing the parity marker: ${marker}`);
}

const footerLibraryRoutes = [...footerSource.matchAll(/href:\s*"(\/library\/[^\"]+)"/g)].map((match) => match[1]);
expect(footerLibraryRoutes.length === 10, `Expected 10 Library subjects in the footer, found ${footerLibraryRoutes.length}`);
expect(new Set(footerLibraryRoutes).size === 10, "Footer contains a duplicate Library subject");
for (const marker of ["Resulta Consulting FZ-LLC", "CookieSettingsButton", "/privacy-policy", "/terms", "https://t.me/ugisstrauss"])
  expect(footerSource.includes(marker), `Footer is missing ${marker}`);

expect(issuePageLayoutSource.includes("Read the relevant guides"), "Legacy issue template is missing its Library guide block");
const retainedIssueRoutes = ["anxiety", "burnout", "emotional-triggers", "overthinking", "sleep", "stress-and-overload", "when-emotions-take-over"];
for (const route of retainedIssueRoutes) {
  const source = read(`src/app/issues/${route}/page.tsx`);
  expect(source.includes("readingGuides={["), `Retained issue page is missing its Library links: ${route}`);
  expect(source.includes(`path: "/issues/${route}"`), `Retained issue page is missing an explicit self-canonical path: ${route}`);
}

expect(groupPageSource.includes("groupInquiryUrl"), "Group CTAs do not use the dedicated inquiry destination");
expect(!groupPageSource.includes("private-1to1-fit-conversation"), "Group page still points to the private 1:1 Calendly event");
expect(conversionLinksSource.includes("NEXT_PUBLIC_GROUP_INQUIRY_URL"), "Group inquiry destination is not configurable");
expect(conversionLinksSource.includes("https://tally.so/r/ODqkr7"), "Group inquiry does not default to the published English Tally form");

expect(!fs.existsSync(path.join(root, "src/app/api/inquiry/route.ts")), "Unsafe inquiry API placeholder still exists");
expect(!read("src/components/blocks/InquiryForm.tsx").includes("TODO: wire"), "Inquiry form still contains its placeholder TODO");
expect(read("src/components/blocks/InquiryForm.tsx").includes("https://tally.so/r/441ZOd"), "Inquiry form is not connected to the approved Tally form");

expect(nextConfigSource.includes("poweredByHeader: false"), "Next.js identifying header is still enabled");
for (const header of ["X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Permissions-Policy", "Cross-Origin-Opener-Policy", "Strict-Transport-Security", "Content-Security-Policy"])
  expect(nextConfigSource.includes(header), `Security configuration is missing ${header}`);
expect(nextConfigSource.includes("https://www.googletagmanager.com"), "Content Security Policy does not permit Google measurement scripts");
expect(!/mc\.yandex|yandexmetrika/i.test(nextConfigSource), "Yandex measurement host found in security configuration");

for (const required of ["/formats", "/group", "/library", "/privacy-policy", "/terms"])
  expect(sitemapSource.includes(`"${required}"`), `Sitemap is missing ${required}`);
for (const alias of ["/for-institutions", "/ukraine-project"])
  expect(!sitemapSource.includes(`"${alias}"`), `Redirect/canonical alias must not appear in sitemap: ${alias}`);

const srcFiles = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) srcFiles.push(file);
  }
};
walk(path.join(root, "src"));
const executableSource = srcFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
expect(!/mc\.yandex|yandexmetrika|\bym\s*\(/i.test(executableSource), "Yandex measurement code found in src");

const appPages = [];
const collectPages = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) collectPages(file);
    else if (entry.name === "page.tsx") appPages.push(file);
  }
};
collectPages(path.join(root, "src/app"));
const knownRoutes = new Set(appPages.map((file) => {
  const relative = path.relative(path.join(root, "src/app"), path.dirname(file)).replaceAll("\\", "/");
  return relative ? `/${relative}` : "/";
}).filter((route) => !route.includes("[")));
for (const entry of translatedEntries) knownRoutes.add(entry.path ?? `/articles/${entry.slug}`);
for (const entry of pilotEntries) knownRoutes.add(`/articles/${entry.slug}`);
for (const entry of translatedEntries) knownRoutes.add(`/library/${entry.categorySlug}`);

const literalLinks = [];
for (const file of srcFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/href(?:=|:)\s*["'](\/[^"'?#]*)/g)) literalLinks.push({ file, href: match[1] });
}
const invalidLinks = literalLinks.filter(({ href }) => !knownRoutes.has(href));
expect(invalidLinks.length === 0, `Invalid literal internal links:\n${invalidLinks.map(({ file, href }) => `${path.relative(root, file)} -> ${href}`).join("\n")}`);
const redirectAliases = new Set(["/for-institutions", "/ukraine-project", "/issues/emotional-overload", "/issues/trauma"]);
const aliasLinks = literalLinks.filter(({ href }) => redirectAliases.has(href));
expect(aliasLinks.length === 0, `Internal links point through redirect aliases:\n${aliasLinks.map(({ file, href }) => `${path.relative(root, file)} -> ${href}`).join("\n")}`);

console.log(`Verified ${articleFiles.size + pilotSlugs.length} articles, ${applications.length} Method applications, ${visuals.length} visual placements and ${visualAssetCount} assets.`);
console.log(`Verified ${owners.length} unique SEO owners, ${literalLinks.length} literal internal links and all reader-next mappings.`);
console.log("Verified article and legacy-page parity, conversion destinations, footer parity, security headers, inquiry safety, sitemap aliases and Google-only measurement boundary.");
