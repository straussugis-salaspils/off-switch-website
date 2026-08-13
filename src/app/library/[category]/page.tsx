import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ContextNavigation from "@/components/library/ContextNavigation";
import JsonLd from "@/components/library/JsonLd";
import { getTranslatedArticlesByCategory, translatedArticlePath, translatedArticles } from "@/content/translated-articles";
import { buildPageMetadata, siteOrigin } from "@/lib/page-metadata";

const categoryDescriptions: Record<string, string> = {
  "anxiety-specific-fears": "Why anxiety can feel causeless, why relief may be temporary, how to test a changed response, and why fear can spread to similar situations.",
  "panic-attacks": "How to recognise a panic attack, why overload and anticipation can sustain the pattern, and how places and routes become restricted afterwards.",
  "trauma-ptsd": "How past danger can continue in present reactions, which symptoms require clinical assessment, and why trauma work needs a careful individual pace.",
  "past-difficult-memories": "How brief signals can activate older material, why memories form chains, how to test a result and when to stop excavating the past.",
  "relationships-closeness-boundaries": "Why boundaries can disappear in a conversation, how silence activates feared loss, and how to separate present relationships from older responses.",
  "work-burnout-action": "Why rest may not survive the return to work, how fear can prevent stopping or speaking, and when the missing element is skill, structure or the job itself.",
  "anger-guilt-self-worth": "How accumulated strain becomes irritability, why old conflicts and guilt continue internally, and how one mistake or moving goal can become a verdict on your worth.",
  "thoughts-sleep-low-mood": "How repetitive thinking differs from useful analysis, why the mind can keep working at night, what prevents relaxation and why a heavy state must be separated into workable parts.",
  "building-new-life": "Why removing an old response is not the same as creating a new life, how to choose what comes next and how real action tests whether change is becoming sustainable.",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [...new Set(translatedArticles.map((article) => article.categorySlug))].map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const articles = getTranslatedArticlesByCategory(category);
  if (!articles.length) return {};
  return buildPageMetadata({ title: articles[0].category, description: categoryDescriptions[category], path: `/library/${category}` });
}

export default async function LibraryCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const articles = getTranslatedArticlesByCategory(category);
  if (!articles.length) notFound();
  const title = articles[0].category;
  const canonical = `${siteOrigin}/library/${category}`;

  return (
    <div className="publication-system">
      <JsonLd data={[{
        "@context": "https://schema.org", "@type": "CollectionPage", name: title, description: categoryDescriptions[category], url: canonical, inLanguage: "en",
        mainEntity: { "@type": "ItemList", numberOfItems: articles.length, itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: `${siteOrigin}${translatedArticlePath(article)}` })) },
      }, {
        "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
          { "@type": "ListItem", position: 2, name: "Library", item: `${siteOrigin}/library` },
          { "@type": "ListItem", position: 3, name: title, item: canonical },
        ],
      }]} />
      <ContextNavigation items={[{ label: "Home", href: "/" }, { label: "Library", href: "/library" }, { label: title }]} />
      <header className="grain border-b border-deep-border py-10 text-deep-text sm:py-14 lg:py-16">
        <div className="publication-container">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dim">Library section · {articles.length} articles</p>
          <h1 className="type-editorial-index-title mt-4 max-w-4xl text-deep-text">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-deep-text/75 sm:text-lg sm:leading-8">{categoryDescriptions[category]}</p>
        </div>
      </header>
      <main className="publication-container py-9 sm:py-12 lg:py-14">
        <ol className="max-w-5xl border-b border-border">
          {articles.map((article, index) => (
            <li key={article.id} className="border-t border-border">
              <Link href={translatedArticlePath(article)} className="group grid gap-3 py-7 transition-colors hover:bg-surface/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-6 sm:py-9">
                <span className="font-serif text-2xl text-accent sm:text-3xl">{String(index + 1).padStart(2, "0")}</span>
                <span><span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-muted">{article.seriesName ? `${article.seriesName} · part ${article.seriesPosition}` : title}</span><span className="block font-serif text-[1.65rem] leading-tight tracking-display text-ink sm:text-[2rem]">{article.title}</span><span className="mt-3 block max-w-3xl text-sm leading-6 text-muted">{article.cardDescription}</span><span className="mt-3 block text-xs uppercase tracking-widest text-muted-light">{article.readingTime}</span></span>
                <span className="inline-flex min-h-11 items-center font-semibold text-accent sm:self-center">Read →</span>
              </Link>
            </li>
          ))}
        </ol>
        <section className="mt-10 max-w-5xl border-y border-border py-7 sm:flex sm:items-center sm:justify-between sm:gap-8"><div><h2 className="font-serif text-2xl font-normal text-ink">Articles explain the mechanism. The method is for changing the reaction.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">If you recognise your situation, you can compare the available ways of working with it.</p></div><Link href="/formats" className="mt-4 inline-flex min-h-11 shrink-0 items-center font-semibold text-accent hover:text-ink sm:mt-0">Compare formats →</Link></section>
      </main>
    </div>
  );
}
