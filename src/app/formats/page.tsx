import type { Metadata } from "next";
import Link from "next/link";

import FormatsNavigation from "@/components/layout/FormatsNavigation";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/page-metadata";

const oneToOneFacts = [
  ["Route", "changes in response to your results"],
  ["Length", "3 months"],
  ["Meetings", "12 private 1:1 Zoom sessions"],
  ["Led by", "Ugis Strauss"],
  ["Start", "available now"],
] as const;

const groupFacts = [
  ["Route", "shared architecture and pace"],
  ["Length", "12 weeks"],
  ["Group", "up to 12 participants"],
  ["Led by", "Ugis Strauss"],
  ["Start", "next group planned for January 2027"],
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Ways to Work with the Off-Switch Method",
  description:
    "Two ways to work through Off-Switch with Ugis Strauss: a three-month private 1:1 route or a structured 12-week group.",
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

      <section className="grain bg-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-page-dark">Ways to work</p>
          <h1 className="type-page-title max-w-4xl text-deep-text">
            How to work through Off-Switch
          </h1>
          <div className="mt-8 max-w-2xl border-l border-accent-dim pl-5 sm:mt-10 sm:pl-7">
            <p className="font-serif text-xl leading-snug text-deep-text sm:text-2xl">
              The method is the same.
            </p>
            <p className="mt-3 text-base leading-7 text-deep-muted sm:text-lg">
              What changes is the level of individual direction and how the next step is chosen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">01 · Private 1:1 work</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              When the route has to change with your life
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-light sm:text-lg">
              You work directly with Ugis. The result of one step determines the next: subject, order and depth change according to what has actually become different in your life.
            </p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button href="/one-to-one" variant="primary" size="lg">
                Explore private 1:1 →
              </Button>
              <p className="text-sm leading-6 text-muted">Available to start now</p>
            </div>
          </div>

          <div className="self-end border-t-2 border-accent pt-1">
            <div className="flex items-end justify-between gap-4 border-b border-border py-5">
              <p className="text-xs uppercase tracking-widest text-muted">Route fee</p>
              <p className="font-serif text-3xl tracking-display text-ink sm:text-4xl">€6,000</p>
            </div>
            <FactRows facts={oneToOneFacts} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:px-10">
          <div className="order-2 self-end border-t-2 border-accent pt-1 lg:order-1">
            <div className="flex items-end justify-between gap-4 border-b border-border py-5">
              <p className="text-xs uppercase tracking-widest text-muted">Route fee</p>
              <p className="font-serif text-3xl tracking-display text-ink sm:text-4xl">€2,000</p>
            </div>
            <FactRows facts={groupFacts} />
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow-section">02 · Group with Ugis</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              When a shared order and working rhythm are useful
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-light sm:text-lg">
              The group follows one systematic route. Ugis leads the live meetings, holds the shared sequence and helps participants apply the method to their own material between meetings.
            </p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button href="/group" variant="outline" size="lg">
                Explore the group →
              </Button>
              <p className="text-sm leading-6 text-muted">Applications for the next group are open</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section">Choose by the way you need to work</p>
          <div className="grid gap-4 lg:grid-cols-2">
            <Link
              href="/one-to-one"
              className="group flex min-h-52 flex-col justify-between border border-border bg-white p-6 transition-colors hover:border-accent hover:bg-accent-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-8"
            >
              <p className="max-w-md font-serif text-2xl leading-snug text-ink">
                I want to start now and need an individual route
              </p>
              <span className="mt-8 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                Private 1:1 →
              </span>
            </Link>
            <Link
              href="/group"
              className="group flex min-h-52 flex-col justify-between border border-border bg-white p-6 transition-colors hover:border-accent hover:bg-accent-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-8"
            >
              <p className="max-w-md font-serif text-2xl leading-snug text-ink">
                A shared route fits me, and I can wait for the next group
              </p>
              <span className="mt-8 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                Group →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
