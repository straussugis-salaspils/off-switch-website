import type { Metadata } from "next";
import Link from "next/link";

import ContextNavigation from "@/components/library/ContextNavigation";
import JsonLd from "@/components/library/JsonLd";
import { methodArticles } from "@/content/pilot-articles";
import { buildPageMetadata, siteOrigin } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "How the Off-Switch Method Works",
  description:
    "Why understanding alone may not change an automatic reaction, why stabilization comes first and why the main work happens between sessions.",
  path: "/library/how-the-method-works",
});

export default function MethodReadingPathPage() {
  const canonical = `${siteOrigin}/library/how-the-method-works`;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "How the Off-Switch Method Works",
            description: metadata.description,
            url: canonical,
            inLanguage: "en",
            hasPart: methodArticles.map((article) => ({
              "@type": "Article",
              name: article.title,
              url: `${siteOrigin}/articles/${article.slug}`,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
              { "@type": "ListItem", position: 2, name: "Library", item: `${siteOrigin}/library` },
              { "@type": "ListItem", position: 3, name: "How the method works", item: canonical },
            ],
          },
        ]}
      />

      <div className="publication-system">
        <ContextNavigation
          items={[
            { label: "Home", href: "/" },
            { label: "Library", href: "/library" },
            { label: "How the method works" },
          ]}
        />

        <header className="grain border-b border-deep-border py-10 text-deep-text sm:py-14 lg:py-16">
          <div className="publication-container">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-dim">
              Library path · 3 articles
            </p>
            <h1 className="type-editorial-index-title mt-4 max-w-4xl text-deep-text">
              How the method works
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-deep-text/75 sm:text-lg sm:leading-8">
              Read these in order: first the difference between understanding and an automatic response, then the logic of stabilization, then the role of practice between sessions.
            </p>
          </div>
        </header>

        <main className="publication-container py-9 sm:py-12 lg:py-14">
          <ol className="max-w-5xl border-b border-border">
            {methodArticles.map((article) => (
              <li key={article.slug} className="border-t border-border">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group grid gap-3 py-7 transition-colors hover:bg-surface/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-6 sm:py-9"
                >
                  <span className="font-serif text-2xl text-accent sm:text-3xl">
                    {String(article.seriesPosition).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-muted">
                      The architecture of the method · part {article.seriesPosition}
                    </span>
                    <span className="block font-serif text-[1.65rem] leading-tight tracking-display text-ink sm:text-[2rem]">
                      {article.title}
                    </span>
                    <span className="mt-3 block max-w-3xl text-sm leading-6 text-muted">
                      {article.description}
                    </span>
                    <span className="mt-3 block text-xs uppercase tracking-widest text-muted-light">
                      {article.readingTime}
                    </span>
                  </span>
                  <span className="inline-flex min-h-11 items-center font-semibold text-accent sm:self-center">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <section className="mt-10 max-w-5xl border-y border-border py-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h2 className="font-serif text-2xl font-normal text-ink">
                Ready to look at the working formats?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                The method is one. The level of individual direction and the way the route is set are different.
              </p>
            </div>
            <Link
              href="/formats"
              className="mt-4 inline-flex min-h-11 shrink-0 items-center font-semibold text-accent hover:text-ink sm:mt-0"
            >
              Compare formats →
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
