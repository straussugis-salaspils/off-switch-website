import type { Metadata } from "next";
import Link from "next/link";

import FormatsNavigation from "@/components/layout/FormatsNavigation";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/page-metadata";

const oneToOneFacts = [
  ["Approach", "individual direction, adjusted as you progress"],
  ["Length", "3–4 months"],
  ["Sessions", "12 private 1:1 Zoom sessions"],
  ["Session length", "60–90 minutes"],
  ["Daily practice", "30–60 minutes"],
  ["Led by", "Ugis Strauss"],
  ["Start", "available now"],
] as const;

const groupFacts = [
  ["Approach", "a shared programme, applied to your own situation"],
  ["Length", "12 weeks"],
  ["Meetings", "12 weekly live Zoom meetings"],
  ["Meeting length", "90–150 minutes"],
  ["Daily practice", "30–60 minutes"],
  ["Group", "up to 12 participants"],
  ["Led by", "Ugis Strauss"],
  ["Start", "next group planned for January 2027"],
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Ways to Work with the Off-Switch Method",
  description:
    "Work through Off-Switch with Ugis Strauss: 12 private 1:1 sessions over three to four months, or a structured 12-week group.",
  path: "/formats",
});

function FactRows({
  facts,
}: {
  facts: readonly (readonly [string, string])[];
}) {
  return (
    <dl className="border-t border-border">
      {facts.map(([term, value]) => (
        <div
          key={term}
          className="grid gap-1 border-b border-border py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
        >
          <dt className="text-xs uppercase tracking-widest text-muted">{term}</dt>
          <dd className="text-base leading-6 text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function FormatsPage() {
  return (
    <>
      <FormatsNavigation />

      <section data-editorial-section className="grain bg-deep py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-page-dark">Ways to work</p>
          <h1 className="type-page-title max-w-4xl text-deep-text">
            Compare private and group Off-Switch programmes
          </h1>
          <p className="mt-7 max-w-2xl font-serif text-xl leading-snug text-deep-text sm:text-2xl">
            The same method. A different way of being guided.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-deep-text/75 sm:text-lg">
            Work privately with Ugis, with each next step planned around you.
            Or join a small group and apply a shared programme to your own life.
            Both involve independent practice between meetings.
          </p>
          <nav aria-label="Compare the programmes" className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
            <a href="#private-programme" className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-deep-text underline decoration-deep-text/40 underline-offset-4 hover:decoration-deep-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-dim">
              Private 1:1 <span aria-hidden="true">↓</span>
            </a>
            <a href="#group-programme" className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-deep-text underline decoration-deep-text/40 underline-offset-4 hover:decoration-deep-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-dim">
              Group <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
      </section>

      <section data-editorial-section aria-label="Choose how you work with Ugis" className="py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-y-0">
            <article id="private-programme" className="flex min-w-0 scroll-mt-36 flex-col border border-border border-t-2 border-t-accent bg-surface p-6 sm:p-8 lg:row-span-7 lg:grid lg:grid-rows-subgrid">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">01 · Private 1:1 work</p>
              <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight tracking-display text-ink sm:text-4xl">
              Private sessions with an individually planned sequence
              </h2>
              <p className="mt-6 text-base leading-7 text-ink-light">
                What changed this week? What still sets off the reaction? You
                work directly with Ugis, and those answers shape the next meeting.
                He adjusts what you work on, how deeply and in what order.
              </p>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
                <p className="max-w-[11rem] text-sm leading-6 text-muted">12 private sessions<br />over 3–4 months</p>
              </div>
              <div className="mt-7">
                <Button href="/one-to-one" variant="primary" size="lg">Explore private 1:1 →</Button>
              </div>
              <p className="mt-4 mb-7 text-sm leading-6 text-muted">Available to start now</p>
              <FactRows facts={oneToOneFacts} />
            </article>

            <article id="group-programme" className="flex min-w-0 scroll-mt-36 flex-col border border-border border-t-2 border-t-accent bg-white p-6 sm:p-8 lg:row-span-7 lg:grid lg:grid-rows-subgrid">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">02 · Group with Ugis</p>
              <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight tracking-display text-ink sm:text-4xl">
                A shared group programme with independent practice
              </h2>
              <p className="mt-6 text-base leading-7 text-ink-light">
                Ugis leads the live meetings and takes a small group through a
                connected 12-week programme. You learn the method, then practise
                on the memories, worries and reactions that are relevant to you.
              </p>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
                <p className="max-w-[11rem] text-sm leading-6 text-muted">12 weekly meetings<br />over 12 weeks</p>
              </div>
              <div className="mt-7">
                <Button href="/group" variant="outline" size="lg">Explore the group →</Button>
              </div>
              <p className="mt-4 mb-7 text-sm leading-6 text-muted">Applications open · January 2027 planned; exact dates not yet confirmed.</p>
              <FactRows facts={groupFacts} />
            </article>
          </div>

          <div className="mt-9 border-t border-border pt-7 sm:flex sm:items-start sm:justify-between sm:gap-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl leading-snug tracking-display text-ink">Discuss which programme fits your situation</h2>
              <p className="mt-3 text-base leading-7 text-ink-light">
                The question is how you want the work to be directed: around
                your individual progress, or through a shared sequence. Both
                ask you to make time for daily practice.
              </p>
            </div>
            <Link href="/book" className="mt-4 inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dim sm:mt-0">
              Talk it through with Ugis →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
