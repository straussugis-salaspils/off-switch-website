import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import ArticleConceptVisual from "@/components/library/ArticleConceptVisual";
import ArticleMethodApplication from "@/components/library/ArticleMethodApplication";
import ArticleTableOfContents, { type TocHeading } from "@/components/library/ArticleTableOfContents";
import ContextNavigation from "@/components/library/ContextNavigation";
import JsonLd from "@/components/library/JsonLd";
import { getArticleMethodApplication } from "@/content/article-method-applications";
import { getArticleVisual, type ArticleVisual } from "@/content/article-visuals";
import { methodArticles } from "@/content/pilot-articles";
import {
  getTranslatedArticleById,
  getTranslatedArticlesByCategory,
  getTranslatedArticlesByCluster,
  translatedArticlePath,
  type TranslatedArticle,
} from "@/content/translated-articles";
import { headingId, readTranslatedArticle, type MarkdownBlock } from "@/lib/translated-article-content";
import { siteOrigin } from "@/lib/page-metadata";

function renderInline(text: string, prefix: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean).map((part, index) => {
    const boldMatch = part.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) return <strong key={`${prefix}-${index}`} className="font-semibold text-ink">{boldMatch[1]}</strong>;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) return <a key={`${prefix}-${index}`} href={linkMatch[2]} className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" target={linkMatch[2].startsWith("http") ? "_blank" : undefined} rel={linkMatch[2].startsWith("http") ? "noreferrer" : undefined}>{linkMatch[1]}</a>;
    return part;
  });
}

function ArticleBody({ blocks, visual }: { blocks: MarkdownBlock[]; visual?: ArticleVisual }) {
  return (
    <>
      {blocks.filter((block) => block.kind !== "h1").map((block, index) => {
        const key = `${block.kind}-${index}`;
        if (block.kind === "h2" || block.kind === "h3") {
          const Tag = block.kind;
          return <Fragment key={key}><Tag id={headingId(block.lines[0])} className={block.kind === "h2" ? "article-section-heading scroll-mt-36 pt-5 font-serif text-[1.875rem] font-normal leading-tight tracking-display text-ink sm:text-4xl" : "scroll-mt-36 pt-3 font-serif text-2xl font-normal leading-snug text-ink"}>{renderInline(block.lines[0], key)}</Tag>{visual?.anchorHeading === block.lines[0] ? <ArticleConceptVisual visual={visual} /> : null}</Fragment>;
        }
        if (block.kind === "quote") return <blockquote key={key} className="article-pull-quote border-l-[3px] border-accent bg-accent-surface/45 px-5 py-5 font-serif text-xl leading-relaxed text-ink sm:text-2xl">{renderInline(block.lines.join(" "), key)}</blockquote>;
        if (block.kind === "code") return <pre key={key} className="overflow-x-auto whitespace-pre-wrap break-words border border-border bg-surface px-5 py-4 text-sm leading-7 text-ink-light"><code>{block.lines.join("\n")}</code></pre>;
        if (block.kind === "ul" || block.kind === "ol") {
          const List = block.kind;
          return <List key={key} className={`space-y-2 pl-6 text-[17px] leading-[1.72] text-ink-light ${block.kind === "ul" ? "list-disc" : "list-decimal"}`}>{block.lines.map((line, itemIndex) => <li key={`${key}-${itemIndex}`}>{renderInline(line, `${key}-${itemIndex}`)}</li>)}</List>;
        }
        return <p key={key} className="text-[17px] leading-[1.75] text-ink-light">{block.lines.map((line, lineIndex) => <span key={`${key}-${lineIndex}`}>{renderInline(line, `${key}-${lineIndex}`)}{lineIndex < block.lines.length - 1 ? <br /> : null}</span>)}</p>;
      })}
    </>
  );
}

function SeriesNavigation({ article }: { article: TranslatedArticle }) {
  const series = getTranslatedArticlesByCluster(article.cluster);
  if (series.length < 2) return null;
  return (
    <nav aria-label={`${article.seriesName ?? article.category} series`}>
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-dim">Series: {article.seriesName}</p>
        <Link href={`/library/${article.categorySlug}`} className="inline-flex min-h-11 items-center text-xs font-semibold text-deep-text/70 hover:text-accent-dim">View the full topic →</Link>
      </div>
      <ol className={`context-navigation-scrollbar mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:mt-4 sm:grid sm:snap-none sm:gap-3 sm:overflow-visible sm:pb-0 ${series.length === 2 ? "sm:grid-cols-2" : series.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {series.map((item) => {
          const active = item.id === article.id;
          const content = <><span className={`font-serif text-xl tabular-nums sm:text-2xl ${active ? "text-accent" : "text-deep-muted"}`}>{String(item.seriesPosition).padStart(2, "0")}</span><span className={`min-w-0 text-[11px] leading-[1.45] sm:text-right sm:text-xs ${active ? "text-ink" : "text-deep-text/80"}`}>{item.title}</span></>;
          return <li key={item.id} className="w-[min(82vw,18rem)] shrink-0 snap-start sm:w-auto sm:min-w-0">{active ? <div aria-current="page" className="flex min-h-[5.25rem] flex-col justify-center gap-1.5 border border-ground bg-ground px-3 py-3 sm:min-h-24 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">{content}</div> : <Link href={translatedArticlePath(item)} className="card-hover-dark flex min-h-[5.25rem] flex-col justify-center gap-1.5 border border-deep-text/20 bg-deep-surface px-3 py-3 sm:min-h-24 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">{content}</Link>}</li>;
        })}
      </ol>
    </nav>
  );
}

function CommercialRecommendation({ article }: { article: TranslatedArticle }) {
  return (
    <aside aria-labelledby={`commercial-${article.id}`} className="mt-10 border-t-2 border-accent bg-accent-surface/35 px-5 py-6 sm:mt-12 sm:px-7 sm:py-7" data-article-commercial-view={article.id}>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{article.cta.eyebrow}</p>
      <h2 id={`commercial-${article.id}`} className="mt-3 font-serif text-2xl font-normal leading-snug text-ink sm:text-[1.75rem]">{article.cta.heading}</h2>
      <p className="mt-4 text-[16px] leading-7 text-ink-light">{article.cta.body}</p>
      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        <Link href={article.cta.primaryHref} data-article-commercial={article.id} data-commercial-placement="article-recommendation" className="inline-flex min-h-11 items-center justify-center bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim">{article.cta.primaryLabel}&nbsp;→</Link>
        {article.cta.secondaryHref && article.cta.secondaryLabel ? <Link href={article.cta.secondaryHref} data-article-commercial={article.id} data-commercial-placement="article-recommendation" className="inline-flex min-h-11 items-center text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">{article.cta.secondaryLabel}&nbsp;→</Link> : null}
      </div>
    </aside>
  );
}

function ContinueReading({ article }: { article: TranslatedArticle }) {
  const pilotIds: Record<string, string> = {
    "M-01": "why-understanding-does-not-stop-the-reaction",
    "M-02": "why-i-do-not-start-with-your-biggest-problem",
    "M-03": "why-the-main-work-happens-between-sessions",
  };
  const readingCard = (id: string) => {
    if (id === "METHOD") return {
      title: "How the Off-Switch Method works",
      cardDescription: "The practical architecture: identify the response, change it, test the result and build what needs to exist in its place.",
      path: "/the-method" as const,
    };
    const translated = getTranslatedArticleById(id);
    if (translated) return { title: translated.title, cardDescription: translated.cardDescription, path: translatedArticlePath(translated) };
    const slug = pilotIds[id];
    const pilot = slug ? methodArticles.find((item) => item.slug === slug) : undefined;
    return pilot ? { title: pilot.title, cardDescription: pilot.description, path: `/articles/${pilot.slug}` as `/${string}` } : undefined;
  };
  const requestedPrimary = readingCard(article.primaryNextId);
  const requestedSecondary = article.secondaryNextId ? readingCard(article.secondaryNextId) : undefined;
  const primary = requestedPrimary ?? requestedSecondary;
  const automaticSecondary = getTranslatedArticlesByCategory(article.categorySlug)
    .filter((candidate) => candidate.id !== article.id)
    .map((candidate) => readingCard(candidate.id))
    .find((candidate) => candidate && candidate.path !== primary?.path);
  const secondary = (requestedPrimary ? requestedSecondary : undefined) ?? automaticSecondary;
  if (!primary) return null;
  return (
    <section className="border-b border-border bg-surface py-12 sm:py-14" aria-labelledby={`continue-${article.id}`}>
      <div className={`publication-container grid gap-5 ${secondary ? "lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.75fr)]" : "grid-cols-1"}`}>
        <Link href={primary.path} className="card-hover-dark group max-w-[820px] border border-deep-border bg-deep p-6 text-deep-text sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dim">Next article</p>
          <h2 id={`continue-${article.id}`} className="mt-3 font-serif text-2xl font-normal leading-tight text-deep-text sm:text-3xl">{primary.title}</h2>
          <p className="mt-4 text-sm leading-6 text-deep-muted">{primary.cardDescription}</p>
          <span className="mt-6 inline-flex min-h-11 items-center font-semibold text-accent-dim group-hover:text-deep-text">Read next →</span>
        </Link>
        {secondary ? <Link href={secondary.path} className="card-hover group border border-border bg-white p-6"><p className="text-xs font-semibold text-accent">If this appears differently for you</p><h3 className="mt-3 font-serif text-xl font-normal leading-snug text-ink">{secondary.title}</h3><p className="mt-4 text-sm leading-6 text-muted">{secondary.cardDescription}</p><span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent">Read →</span></Link> : null}
      </div>
    </section>
  );
}

export default function TranslatedArticlePage({ article }: { article: TranslatedArticle }) {
  const source = readTranslatedArticle(article);
  const canonical = `${siteOrigin}${translatedArticlePath(article)}`;
  const bodyBlocks = source.blocks.filter((block) => block.kind !== "h1");
  const application = getArticleMethodApplication(article.id);
  const applicationIndex = application ? bodyBlocks.findIndex((block) => block.kind === "h2" && block.lines[0] === application.insertBeforeHeading) : -1;
  const activeApplication = applicationIndex >= 0 ? application : undefined;
  const bodyBeforeApplication = activeApplication ? bodyBlocks.slice(0, applicationIndex) : bodyBlocks;
  const bodyAfterApplication = activeApplication ? bodyBlocks.slice(applicationIndex) : [];
  const visual = getArticleVisual(article.id);
  const headings: TocHeading[] = bodyBlocks.flatMap((block, index) => {
    const items: TocHeading[] = [];
    if (activeApplication && index === applicationIndex) {
      items.push({ id: headingId(activeApplication.heading), level: 2, text: activeApplication.heading });
      for (const methodBlock of activeApplication.blocks) if (methodBlock.kind === "heading") items.push({ id: headingId(methodBlock.text), level: 3, text: methodBlock.text });
    }
    if (block.kind === "h2" || block.kind === "h3") items.push({ id: headingId(block.lines[0]), level: block.kind === "h2" ? 2 : 3, text: block.lines[0] });
    return items;
  });
  const methodWords = activeApplication ? [activeApplication.heading, ...activeApplication.blocks.map((block) => block.text)].join(" ").split(/\s+/).length : 0;
  const readingMinutes = Math.max(7, Math.round((source.body.split(/\s+/).length + methodWords) / 200));

  return (
    <div className="publication-system">
      <JsonLd data={[{
        "@context": "https://schema.org", "@type": article.pageType === "issue_hub" ? "CollectionPage" : "Article", "@id": `${canonical}#content`, headline: article.title, name: article.title,
        description: article.description, url: canonical, inLanguage: "en", keywords: [article.primaryQuery, ...article.secondaryQueries],
        datePublished: "2026-08-13", dateModified: "2026-08-13", image: `${canonical}/opengraph-image`,
        author: { "@id": `${siteOrigin}/about#ugis-strauss` }, publisher: { "@id": `${siteOrigin}/#organization` }, mainEntityOfPage: canonical,
      }, {
        "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
          { "@type": "ListItem", position: 2, name: "Library", item: `${siteOrigin}/library` },
          { "@type": "ListItem", position: 3, name: article.category, item: `${siteOrigin}/library/${article.categorySlug}` },
          { "@type": "ListItem", position: 4, name: article.breadcrumb, item: canonical },
        ],
      }]} />
      <ContextNavigation items={[{ label: "Home", href: "/" }, { label: "Library", href: "/library" }, { label: article.category, href: `/library/${article.categorySlug}` }, { label: article.breadcrumb }]} />
      <header className="grain border-b border-deep-border py-6 sm:py-8 lg:py-10">
        <div className="publication-container">
          <SeriesNavigation article={article} />
          <div className={`max-w-[900px] ${getTranslatedArticlesByCluster(article.cluster).length > 1 ? "pt-8 sm:pt-10" : "py-2 sm:py-4"}`}>
            {getTranslatedArticlesByCluster(article.cluster).length === 1 ? <p className="text-xs font-semibold uppercase tracking-widest text-deep-muted">{article.category}</p> : null}
            <h1 data-frozen-article-title className={`type-article-title text-deep-text ${getTranslatedArticlesByCluster(article.cluster).length === 1 ? "mt-4" : ""}`}>{article.title}</h1>
            <p data-ai-summary itemProp="description" className="mt-5 max-w-[780px] text-lg leading-8 text-deep-text/75">{article.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-deep-muted"><span>By Ugis Strauss</span><span aria-hidden="true">•</span><span>{readingMinutes} min read</span></div>
          </div>
        </div>
      </header>
      <section className="border-b border-border bg-ground" aria-label="Article text">
        <div className="publication-container"><div className="grid gap-10 py-10 sm:py-14 xl:grid-cols-[minmax(0,680px)_280px] xl:items-start xl:justify-between xl:gap-12 xl:py-16">
          <article itemScope itemType="https://schema.org/Article" data-frozen-article-body data-frozen-body-hash={source.bodyHash} className="article-prose article-design-standard min-w-0 space-y-5"><ArticleBody blocks={bodyBeforeApplication} visual={visual} />{activeApplication ? <ArticleMethodApplication articleId={article.id} application={activeApplication} /> : null}{bodyAfterApplication.length ? <ArticleBody blocks={bodyAfterApplication} visual={visual} /> : null}<CommercialRecommendation article={article} /></article>
          <div className="hidden xl:block xl:self-stretch"><ArticleTableOfContents headings={headings} /></div>
        </div></div>
      </section>
      <ContinueReading article={article} />
      <section className="bg-ground py-10" aria-label="About the author"><div className="publication-container"><div className="flex max-w-2xl items-center gap-5 border border-border bg-white p-5"><Image src="/ugis-strauss.jpg" alt="Ugis Strauss" width={96} height={96} className="h-16 w-16 rounded-full object-cover" /><div><p className="font-semibold text-ink">Ugis Strauss</p><p className="mt-1 text-sm text-muted">Creator of the Off-Switch Method</p><Link href="/about" className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-dim">More about the author →</Link></div></div></div></section>
    </div>
  );
}
