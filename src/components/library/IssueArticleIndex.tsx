import Link from "next/link";

import { methodArticles } from "@/content/pilot-articles";

export default function IssueArticleIndex({ hub }: { hub: "/the-method" }) {
  if (hub !== "/the-method") return null;

  return (
    <section className="publication-system border-t border-border bg-ground py-12 sm:py-16" aria-labelledby="method-reading-heading">
      <div className="publication-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Author’s library</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="method-reading-heading" className="font-serif text-3xl font-normal tracking-display text-ink sm:text-4xl">Related reading</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Three articles on the architecture of the Method. Choose the question you need, or read the sequence in order.
            </p>
          </div>
          <Link href="/library" className="inline-flex min-h-11 items-center font-semibold text-accent hover:text-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Full library →
          </Link>
        </div>

        <ol className="mt-8 max-w-5xl border-b border-border">
          {methodArticles.map((article, index) => (
            <li key={article.slug} className="border-t border-border">
              <Link href={`/articles/${article.slug}`} className="group grid gap-3 py-6 transition-colors hover:bg-surface/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-6 sm:py-7">
                <span className="font-serif text-2xl tabular-nums text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-muted">The architecture of the Method · part {article.seriesPosition}</span>
                  <span className="block font-serif text-2xl font-normal leading-tight tracking-display text-ink sm:text-3xl">{article.title}</span>
                  <span className="mt-2 block max-w-3xl text-sm leading-6 text-muted">{article.description}</span>
                </span>
                <span className="col-start-1 row-start-3 inline-flex min-h-11 items-center font-semibold text-accent sm:col-start-3 sm:row-start-1 sm:self-center">Read →</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
