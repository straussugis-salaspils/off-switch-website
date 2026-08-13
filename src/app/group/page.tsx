import type { Metadata } from "next";
import Link from "next/link";

import FormatsNavigation from "@/components/layout/FormatsNavigation";
import Button from "@/components/ui/Button";
import { groupInquiryUrl } from "@/lib/conversion-links";
import { buildPageMetadata } from "@/lib/page-metadata";

const groupFit = [
  "A shared sequence suits you better than a completely new personal route after every step.",
  "You are prepared to practise independently between live Zoom meetings.",
  "You want to test whether a response changes, not only understand why it exists.",
  "You are ready to follow a connected 12-week path rather than work on one isolated event.",
] as const;

const phases = [
  {
    number: "01",
    period: "Weeks 1–2",
    title: "Manage a specific reaction",
    action: "Learn the tool and apply it to one accessible situation.",
    check: "Can you notice the reaction earlier and reduce it independently?",
  },
  {
    number: "02",
    period: "Weeks 3–5",
    title: "Reduce background load",
    action: "Work with what keeps the system in a constant state of readiness.",
    check: "Has the general load that amplified individual reactions become lower?",
  },
  {
    number: "03",
    period: "Weeks 6–8",
    title: "Work through connected responses",
    action: "Work with past episodes and imagined future situations.",
    check: "Do they still start the previous automatic answer when tested again?",
  },
  {
    number: "04",
    period: "Weeks 9–12",
    title: "Move the change into life",
    action: "Use the new response in conversations, decisions, boundaries, sleep and action.",
    check: "Is choice available where the reaction used to arrive automatically?",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "The Off-Switch Group with Ugis Strauss",
  description:
    "A 12-week Off-Switch group led by Ugis Strauss for up to 12 participants. The next group is planned for January 2027.",
  path: "/group",
});

export default function GroupPage() {
  return (
    <>
      <FormatsNavigation />

      <section className="grain bg-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-page-dark">Off-Switch group format</p>
          <h1 className="type-page-title max-w-4xl text-deep-text">
            The Off-Switch Group with Ugis
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-deep-muted sm:text-lg">
            Twelve weeks of structured work for people who can use a shared route and practise independently between meetings.
          </p>
          <div className="mt-9">
            <Button
              href={groupInquiryUrl}
              variant="primary"
              size="lg"
            >
              Ask about the January 2027 group
            </Button>
            <p className="mt-4 max-w-xl text-sm leading-6 text-deep-muted">
              Ask Ugis directly whether the shared group route fits your situation.
            </p>
          </div>

          <dl className="mt-12 grid border-y border-deep-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Length", "12 weeks"],
              ["Group", "up to 12 participants"],
              ["Fee", "€2,000"],
              ["Next group", "planned for January 2027"],
            ].map(([term, value], index) => (
              <div
                key={term}
                className={`py-5 sm:px-6 ${index > 0 ? "border-t border-deep-border sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
              >
                <dt className="text-[0.6875rem] uppercase tracking-widest text-deep-muted">{term}</dt>
                <dd className="mt-2 font-serif text-xl leading-snug text-deep-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Who the group is for</p>
            <h2 className="font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              The shared order has to be useful — not merely less expensive than 1:1
            </h2>
          </div>
          <ul className="border-t border-border">
            {groupFit.map((point, index) => (
              <li
                key={point}
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6"
              >
                <span className="font-serif text-lg text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="max-w-3xl text-base leading-7 text-ink-light sm:text-lg">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section">What is tested</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
            Change has to be visible beyond Zoom
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-7 text-ink-light sm:text-lg">
            The point is not to complete a curriculum. A specific reaction is checked again, then tested in ordinary life: a conversation, decision, boundary, night of sleep or action.
          </p>
          <div className="mt-12 grid border-y border-border md:grid-cols-3">
            {[
              ["01", "Apply", "Use the tool with the specific material for that week."],
              ["02", "Check", "Bring the reaction back to mind and see what remains."],
              ["03", "Transfer", "Test the change in a real situation between meetings."],
            ].map(([number, title, body], index) => (
              <div
                key={number}
                className={`py-8 md:px-8 ${index < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
              >
                <p className="text-xs tracking-widest text-accent">{number}</p>
                <h3 className="mt-6 font-serif text-2xl text-ink lg:text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section">12 weeks · one shared order</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
            Each stage has an action and a test
          </h2>
          <ol className="mt-12 border-t border-border">
            {phases.map((phase) => (
              <li
                key={phase.number}
                className="grid gap-5 border-b border-border py-7 lg:grid-cols-[3rem_7rem_minmax(12rem,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-7 lg:py-8"
              >
                <span className="font-serif text-2xl text-accent">{phase.number}</span>
                <span className="text-xs uppercase tracking-widest text-muted">{phase.period}</span>
                <h3 className="font-serif text-2xl leading-snug text-ink">{phase.title}</h3>
                <div>
                  <p className="text-[0.6875rem] uppercase tracking-widest text-accent">Action</p>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">{phase.action}</p>
                </div>
                <div>
                  <p className="text-[0.6875rem] uppercase tracking-widest text-accent">Check</p>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">{phase.check}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section-dark">The honest distinction</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-deep-text lg:text-4xl">
            A group provides the shared sequence. 1:1 determines your personal next move
          </h2>
          <div className="mt-10 grid border-y border-deep-border md:grid-cols-2">
            <div className="py-8 md:border-r md:border-deep-border md:pr-10">
              <p className="text-xs uppercase tracking-widest text-accent-dim">The group fits when</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                you can follow a shared order, practise independently and bring back the exact point where the response remains.
              </p>
            </div>
            <div className="border-t border-deep-border py-8 md:border-t-0 md:pl-10">
              <p className="text-xs uppercase tracking-widest text-deep-muted">1:1 fits when</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                subject, depth and order need to be determined again after every step in your own situation.
              </p>
              <Link
                href="/one-to-one"
                className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-accent-dim hover:text-deep-text"
              >
                Explore private 1:1 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Who leads the work</p>
            <h2 className="max-w-3xl font-serif text-3xl font-normal leading-tight tracking-display text-ink lg:text-4xl">
              Every live meeting is led by the creator of the Method
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-light sm:text-lg">
              Ugis personally sets the next step in the shared sequence, demonstrates the mechanism through participants’ situations and adjusts the pace according to what appears in practice between meetings.
            </p>
            <Link href="/about" className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-dim">
              About Ugis →
            </Link>
          </div>
          <dl className="border-y border-border py-6">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-xs uppercase tracking-widest text-muted">Format</dt>
              <dd className="font-serif text-xl font-normal text-ink sm:text-2xl">live Zoom meetings</dd>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-5">
              <dt className="text-xs uppercase tracking-widest text-muted">Group</dt>
              <dd className="font-serif text-xl font-normal text-ink sm:text-2xl">up to 12 people</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Next group</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              Planned for January 2027
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-light sm:text-lg">
              Exact January dates will be announced after the schedule is confirmed.
            </p>
            <div className="mt-8">
              <Button
                href={groupInquiryUrl}
                variant="primary"
                size="lg"
              >
                Ask about the next group
              </Button>
            </div>
          </div>
          <div className="border-t-2 border-accent pt-6 lg:text-right">
            <p className="text-xs uppercase tracking-widest text-muted">12 weeks · up to 12 people</p>
            <p className="mt-2 font-serif text-4xl tracking-display text-ink sm:text-5xl">€2,000</p>
          </div>
        </div>
      </section>
    </>
  );
}
