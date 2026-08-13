import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { createHash } from "node:crypto";

import ArticleConceptVisual from "@/components/library/ArticleConceptVisual";
import ArticleTableOfContents, { type TocHeading } from "@/components/library/ArticleTableOfContents";
import ContextNavigation from "@/components/library/ContextNavigation";
import JsonLd from "@/components/library/JsonLd";
import { methodArticles, type PilotArticle } from "@/content/pilot-articles";
import { getArticleVisual, type ArticleVisual } from "@/content/article-visuals";
import { siteOrigin } from "@/lib/page-metadata";

interface CommercialRecommendation {
  eyebrow: string;
  heading: string;
  body: string;
  href: "/one-to-one" | "/group";
  label: string;
}

const commercialRecommendations: Record<number, CommercialRecommendation> = {
  1: {
    eyebrow: "If you understand the pattern but still react the old way",
    heading: "Stop repeating the old reaction and recover your ability to choose",
    body: "I’m Ugis Strauss, creator of the Off-Switch Method, and I personally lead the three-month private 1:1 programme. We work with situations where insight is not enough, reduce the automatic responses that keep them active, and test the change in everyday life. The aim is for the same signal to stop dictating the same thoughts, feelings and actions.",
    href: "/one-to-one",
    label: "Explore private 1:1",
  },
  2: {
    eyebrow: "If there are several difficult issues and approaching them feels overwhelming",
    heading: "Build stability before working with the heaviest material",
    body: "In the three-month private 1:1 programme, I first teach you how to bring the current response back under control. We then choose an appropriate pace for difficult memories and connected reactions. The aim is to work through important material without handing the entire process back to the reaction itself.",
    href: "/one-to-one",
    label: "Explore private 1:1",
  },
  3: {
    eyebrow: "If relief during a session does not survive ordinary life",
    heading: "Learn to change the reaction between sessions",
    body: "I personally lead the 12-week Off-Switch group. During the meetings you learn the method; between them you use it where the old reaction actually appears. The aim is not to need a practitioner beside you every time, but to recognise the automatic response, interrupt it and make a different action available.",
    href: "/group",
    label: "Explore the group programme",
  },
};

function ArticleBody({ article, visual }: { article: PilotArticle; visual?: ArticleVisual }) {
  return (
    <div className="article-prose article-design-standard">
      {article.blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <Fragment key={block.id}>
            <h2
              id={block.id}
              className="article-section-heading scroll-mt-36 pt-5 font-serif text-[1.875rem] font-normal leading-tight tracking-display text-ink sm:text-4xl"
            >
              {block.text}
            </h2>
            {visual?.anchorHeading === block.text ? <ArticleConceptVisual visual={visual} /> : null}
            </Fragment>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`quote-${index}`}
              className="article-pull-quote border-l-[3px] border-accent bg-accent-surface/45 px-5 py-5 font-serif text-xl leading-relaxed text-ink sm:text-2xl"
            >
              {block.text}
            </blockquote>
          );
        }

        if (block.type === "list") {
          return (
            <ol key={`list-${index}`} className="space-y-2 pl-6 text-[17px] leading-[1.72] text-ink-light">
              {block.items.map((item) => <li key={item} className="list-decimal">{item}</li>)}
            </ol>
          );
        }

        if (block.type === "flow") {
          return (
            <pre
              key={`flow-${index}`}
              className="overflow-x-auto whitespace-pre-wrap break-words border border-border bg-surface px-5 py-4 text-sm leading-7 text-ink-light"
              aria-label="Reaction sequence"
            >
              <code>{block.items.join(" → ")}</code>
            </pre>
          );
        }

        return <p key={`paragraph-${index}`} className="text-[17px] leading-[1.75] text-ink-light">{block.text}</p>;
      })}
    </div>
  );
}

function SeriesNavigation({ article }: { article: PilotArticle }) {
  return (
    <nav aria-label="The architecture of the method series">
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-dim">
          Series: The architecture of the method
        </p>
        <Link
          href="/library/how-the-method-works"
          className="inline-flex min-h-11 items-center text-xs font-semibold text-deep-text/70 transition-colors hover:text-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dim"
        >
          View the full topic →
        </Link>
      </div>
      <ol className="context-navigation-scrollbar mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:mt-4 sm:grid sm:grid-cols-3 sm:snap-none sm:gap-3 sm:overflow-visible sm:pb-0">
        {methodArticles.map((item) => {
          const active = item.slug === article.slug;
          const content = (
            <>
              <span className={`font-serif text-xl tabular-nums sm:text-2xl ${active ? "text-accent" : "text-deep-muted"}`}>
                {String(item.seriesPosition).padStart(2, "0")}
              </span>
              <span className={`min-w-0 text-[11px] leading-[1.45] sm:text-right sm:text-xs ${active ? "text-ink" : "text-deep-text/80"}`}>
                {item.title}
              </span>
            </>
          );

          return (
            <li key={item.slug} className="w-[min(82vw,18rem)] shrink-0 snap-start sm:w-auto sm:min-w-0">
              {active ? (
                <div
                  aria-current="page"
                  className="flex min-h-[5.25rem] flex-col justify-center gap-1.5 border border-ground bg-ground px-3 py-3 sm:min-h-24 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5"
                >
                  {content}
                </div>
              ) : (
                <Link
                  href={`/articles/${item.slug}`}
                  className="card-hover-dark flex min-h-[5.25rem] flex-col justify-center gap-1.5 border border-deep-text/20 bg-deep-surface px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-dim sm:min-h-24 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5"
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function CommercialCard({ article }: { article: PilotArticle }) {
  const recommendation = commercialRecommendations[article.seriesPosition];

  return (
    <aside
      aria-labelledby={`article-commercial-${article.seriesPosition}`}
      className="mt-10 border-t-2 border-accent bg-accent-surface/35 px-5 py-6 sm:mt-12 sm:px-7 sm:py-7"
      data-article-commercial-view={article.slug}
    >
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{recommendation.eyebrow}</p>
      <h2 id={`article-commercial-${article.seriesPosition}`} className="mt-3 font-serif text-2xl font-normal leading-snug text-ink sm:text-[1.75rem]">
        {recommendation.heading}
      </h2>
      <p className="mt-4 text-[16px] leading-7 text-ink-light">{recommendation.body}</p>
      <Link
        href={recommendation.href}
        className="mt-6 inline-flex min-h-11 items-center justify-center bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        data-article-commercial={article.slug}
      >
        {recommendation.label}&nbsp;→
      </Link>
    </aside>
  );
}

function ContinueReading({ article }: { article: PilotArticle }) {
  const next = methodArticles[article.seriesPosition];
  const secondary = article.seriesPosition === 1 ? methodArticles[2] : methodArticles[0];
  const nextHref = next ? `/articles/${next.slug}` : "/library/how-the-method-works";

  return (
    <section className="border-b border-border bg-surface py-12 sm:py-14" aria-labelledby="continue-heading">
      <div className={`publication-container grid gap-5 ${secondary ? "lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.75fr)]" : "grid-cols-1"}`}>
        <Link
          href={nextHref}
          className="card-hover-dark group max-w-[820px] border border-deep-border bg-deep p-6 text-deep-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dim sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dim">Next article</p>
          <h2 id="continue-heading" className="mt-3 max-w-2xl font-serif text-2xl font-normal leading-tight text-deep-text sm:text-3xl">
            {next?.title ?? "How the method works"}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-deep-muted">
            {next?.standfirst ?? "See the complete path: how the Off-Switch Method reduces emotional charge, changes automatic reactions and carries the result into everyday life."}
          </p>
          <span className="mt-6 inline-flex min-h-11 items-center font-semibold text-accent-dim transition-colors group-hover:text-deep-text">Read next →</span>
        </Link>

        {secondary ? (
          <Link
            href={`/articles/${secondary.slug}`}
            className="card-hover group border border-border bg-white p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <p className="text-xs font-semibold text-accent">If this shows up differently for you</p>
            <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-ink">{secondary.title}</h3>
            <p className="mt-4 text-sm leading-6 text-muted">{secondary.standfirst}</p>
            <span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent group-hover:text-accent-dim">Read →</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export default function PilotArticlePage({ article }: { article: PilotArticle }) {
  const canonical = `${siteOrigin}/articles/${article.slug}`;
  const headings: TocHeading[] = article.blocks.filter(
    (block): block is Extract<(typeof article.blocks)[number], { type: "heading" }> => block.type === "heading",
  ).map((heading) => ({ id: heading.id, level: 2, text: heading.text }));
  const articleId = `M-0${article.seriesPosition}`;
  const visual = getArticleVisual(articleId);
  const bodyText = article.blocks.map((block) => "text" in block ? block.text : "items" in block ? block.items.join(" ") : "").join(" ");
  const bodyHash = createHash("sha256").update(bodyText).digest("hex");
  const readingMinutes = Math.max(7, Math.round(bodyText.split(/\s+/).length / 200));

  return (
    <div className="publication-system">
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${canonical}#article`,
          headline: article.title,
          description: article.description,
          url: canonical,
          inLanguage: "en",
          datePublished: "2026-08-13",
          dateModified: "2026-08-13",
          image: `${canonical}/opengraph-image`,
          author: { "@id": `${siteOrigin}/about#ugis-strauss` },
          publisher: { "@id": `${siteOrigin}/#organization` },
          mainEntityOfPage: canonical,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
            { "@type": "ListItem", position: 2, name: "Library", item: `${siteOrigin}/library` },
            { "@type": "ListItem", position: 3, name: "How the method works", item: `${siteOrigin}/library/how-the-method-works` },
            { "@type": "ListItem", position: 4, name: article.title, item: canonical },
          ],
        },
      ]} />

      <ContextNavigation items={[
        { label: "Home", href: "/" },
        { label: "Library", href: "/library" },
        { label: "How the method works", href: "/library/how-the-method-works" },
        { label: article.title },
      ]} />

      <header className="grain border-b border-deep-border py-6 sm:py-8 lg:py-10">
        <div className="publication-container">
          <SeriesNavigation article={article} />
          <div className="max-w-[900px] pt-8 sm:pt-10">
            <h1 data-frozen-article-title className="type-article-title text-deep-text">{article.title}</h1>
            <p data-ai-summary itemProp="description" className="mt-5 max-w-[780px] text-lg leading-8 text-deep-text/75">{article.standfirst}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-deep-muted">
              <span>By Ugis Strauss</span><span aria-hidden="true">•</span><span>{readingMinutes} min read</span>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-ground" aria-label="Article text">
        <div className="publication-container">
          <div className="grid gap-10 py-10 sm:py-14 xl:grid-cols-[minmax(0,680px)_280px] xl:items-start xl:justify-between xl:gap-12 xl:py-16">
            <article itemScope itemType="https://schema.org/Article" data-frozen-article-body data-frozen-body-hash={bodyHash} className="article-prose article-design-standard min-w-0 space-y-5">
              <ArticleBody article={article} visual={visual} />
              <CommercialCard article={article} />
            </article>
            <div className="hidden xl:block xl:self-stretch">
              <ArticleTableOfContents headings={headings} />
            </div>
          </div>
        </div>
      </section>

      <ContinueReading article={article} />

      <section className="bg-ground py-10" aria-label="About the author">
        <div className="publication-container">
          <div className="flex max-w-2xl items-center gap-5 border border-border bg-white p-5">
            <Image src="/ugis-strauss.jpg" alt="Ugis Strauss" width={96} height={96} className="h-16 w-16 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-ink">Ugis Strauss</p>
              <p className="mt-1 text-sm text-muted">Creator of the Off-Switch Method</p>
              <Link href="/about" className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-dim">More about the author →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
