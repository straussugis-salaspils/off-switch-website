import type { Metadata } from "next";
import Link from "next/link";

import ContextNavigation from "@/components/library/ContextNavigation";
import JsonLd from "@/components/library/JsonLd";
import { buildPageMetadata, siteOrigin } from "@/lib/page-metadata";

interface LibraryCategory {
  title: string;
  description: string;
  count: number;
  href?: string;
}

const categories: readonly LibraryCategory[] = [
  {
    title: "How the method works",
    description:
      "Why insight is not the same as a changed response, why sequence matters and where the main work takes place.",
    count: 3,
    href: "/library/how-the-method-works",
  },
  {
    title: "Anxiety and specific fears",
    description:
      "When an anxious background or fear of a specific situation begins deciding where you can go and what you can do.",
    count: 6,
    href: "/library/anxiety-specific-fears",
  },
  {
    title: "Panic attacks",
    description:
      "What happens during an attack, why fear of another one grows and how avoidance begins to restrict ordinary life.",
    count: 4,
    href: "/library/panic-attacks",
  },
  {
    title: "Trauma and PTSD",
    description:
      "When danger has ended but the response continues to operate as if the event could happen again.",
    count: 4,
    href: "/library/trauma-ptsd",
  },
  {
    title: "The past and difficult memories",
    description:
      "How past events continue to shape present reactions and why one memory can pull connected material with it.",
    count: 6,
    href: "/library/past-difficult-memories",
  },
  {
    title: "Relationships, closeness and boundaries",
    description:
      "When a pause, a request or real closeness starts a familiar response before free choice is available.",
    count: 4,
    href: "/library/relationships-closeness-boundaries",
  },
  {
    title: "Work, burnout and difficulty acting",
    description:
      "When rest is not enough, action does not begin or the structure of work keeps rebuilding the same overload.",
    count: 8,
    href: "/library/work-burnout-action",
  },
  {
    title: "Anger, guilt and self-worth",
    description:
      "When an internal argument continues after the event, a mistake becomes a verdict and achievement is never enough.",
    count: 7,
    href: "/library/anger-guilt-self-worth",
  },
  {
    title: "Repetitive thoughts, sleep and low mood",
    description:
      "When thoughts circle without producing a decision and the end of the day does not end the internal activity.",
    count: 5,
    href: "/library/thoughts-sleep-low-mood",
  },
  {
    title: "Building a new life",
    description:
      "When the old response is no longer in charge but the new direction still has to be chosen, built and tested.",
    count: 4,
    href: "/library/building-new-life",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "The Off-Switch Method Library",
  description:
    "Authorial guides on recurring emotional reactions, the difference between insight and change, and how the Off-Switch Method is structured.",
  path: "/library",
});

export default function LibraryPage() {
  const canonical = `${siteOrigin}/library`;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "The Off-Switch Method Library",
            description: metadata.description,
            url: canonical,
            inLanguage: "en",
            isPartOf: { "@id": `${siteOrigin}/#website` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
              { "@type": "ListItem", position: 2, name: "Library", item: canonical },
            ],
          },
        ]}
      />

      <div className="publication-system">
        <ContextNavigation items={[{ label: "Home", href: "/" }, { label: "Library" }]} />

        <header className="grain border-b border-deep-border py-10 text-deep-text sm:py-14 lg:py-16">
          <div className="publication-container grid gap-9 lg:grid-cols-[minmax(0,760px)_300px] lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dim">
                Authorial material · Ugis Strauss
              </p>
              <h1 className="type-page-title mt-4 text-deep-text">
                The Off-Switch Method Library
              </h1>
              <p className="mt-5 max-w-[680px] text-base leading-7 text-deep-text/75 sm:text-lg sm:leading-8">
                Choose the subject closest to your situation. Each path is arranged in a deliberate reading order rather than as a pile of unrelated posts.
              </p>
            </div>

            <aside className="border-l-2 border-accent pl-5 lg:mb-1 lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dim">
                Orientation
              </p>
              <p className="mt-3 font-serif text-xl font-normal leading-snug text-deep-text sm:text-2xl">
                Articles help you distinguish what is happening. The method is for changing the reaction.
              </p>
              <Link
                href="/the-method"
                className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-dim hover:text-deep-text"
              >
                Explore the method →
              </Link>
            </aside>
          </div>
        </header>

        <main className="publication-container py-8 sm:py-12 lg:py-14">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(14rem,1fr)]">
            <div className="border-b border-border" aria-label="Library subjects">
              {categories.map((category, index) => {
                const content = (
                  <>
                    <span className={`font-serif text-xl sm:text-2xl ${category.href ? "text-accent" : "text-muted-light"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-serif text-[1.35rem] leading-tight tracking-display text-ink sm:text-[1.75rem]">
                        {category.title}
                      </span>
                      <span className="mt-2 block max-w-3xl text-sm leading-6 text-muted">
                        {category.description}
                      </span>
                    </span>
                    <span className="col-start-2 mt-2 text-sm font-medium text-muted sm:col-start-auto sm:mt-0 sm:self-center sm:justify-self-end">
                      {category.count} {category.count === 1 ? "article" : "articles"}
                      <span className={`ml-3 font-semibold ${category.href ? "text-accent" : "text-muted-light"}`}>
                        {category.href ? "Open path →" : "Next batch"}
                      </span>
                    </span>
                  </>
                );

                const className =
                  "grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 border-t border-border py-5 sm:min-h-28 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6 sm:py-7";

                return category.href ? (
                  <Link
                    key={category.title}
                    href={category.href}
                    className={`${className} transition-colors hover:border-accent hover:bg-surface/45`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={category.title} className={`${className} opacity-80`}>
                    {content}
                  </div>
                );
              })}
            </div>

            <aside className="border-t border-accent/45 pt-6 lg:border-l lg:border-t-0 lg:border-l-accent/35 lg:pl-7 lg:pt-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Start here
              </p>
              <h2 className="mt-3 font-serif text-2xl font-normal leading-tight tracking-display text-ink">
                I understand the pattern, but it still happens
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                The first English reading path explains the difference between insight, stabilization and change that can be tested in life.
              </p>
              <Link
                href="/library/how-the-method-works"
                className="mt-5 inline-flex min-h-11 items-center font-semibold text-accent hover:text-ink"
              >
                Begin the three-part path →
              </Link>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
