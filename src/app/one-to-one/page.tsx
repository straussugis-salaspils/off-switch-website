import type { Metadata } from "next";
import Link from "next/link";

import FormatsNavigation from "@/components/layout/FormatsNavigation";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/page-metadata";

const recognitionPoints = [
  "You understand the pattern, but the reaction still starts in the real situation.",
  "One problem changes and the next connected one becomes visible.",
  "One situation is now calm while a similar response is still active somewhere else.",
  "The problem looks singular from the outside but separates into several working targets.",
  "The old response is lower — and the remaining task is now a real problem, a skill or a life decision.",
] as const;

const routeSteps = [
  {
    number: "01",
    title: "Learn the tool",
    body: "In the first meeting you learn the regulation practice and begin using it between sessions.",
  },
  {
    number: "02",
    title: "Choose a specific response",
    body: "Each step uses a precise situation, memory or physical reaction that is active now.",
  },
  {
    number: "03",
    title: "Test the change",
    body: "A conversation, drive, night of sleep, decision or action shows what changed beyond the meeting.",
  },
  {
    number: "04",
    title: "Set the next step",
    body: "Ugis adjusts the subject, depth and order according to the facts of the previous week.",
  },
] as const;

const faq = [
  [
    "Can I start now?",
    "Yes. The first step is a conversation about your situation and whether private 1:1 work is the appropriate format.",
  ],
  [
    "How long does the route take?",
    "Three months: 12 private 1:1 Zoom meetings and independent practice between them.",
  ],
  [
    "What happens between meetings?",
    "You apply the tool to the agreed material and test the change in real situations. Those facts determine the next meeting.",
  ],
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Private 1:1 Off-Switch Work with Ugis Strauss",
  description:
    "A three-month private 1:1 Off-Switch route: 12 meetings with Ugis Strauss, independent practice and change tested in ordinary life.",
  path: "/one-to-one",
});

export default function OneToOnePage() {
  return (
    <>
      <FormatsNavigation />

      <section className="grain bg-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow-page-dark">Private 1:1 Off-Switch format</p>
              <h1 className="type-page-title max-w-4xl text-deep-text">
                Private 1:1 work with Ugis
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-deep-muted sm:text-lg">
                For situations that do not fit one shared route — where the next step has to be chosen from what actually changed during your previous week.
              </p>
              <div className="mt-9">
                <Button
                  href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
                  variant="primary"
                  size="lg"
                >
                  Book a first conversation
                </Button>
                <p className="mt-4 max-w-xl text-sm leading-6 text-deep-muted">
                  Forty-five minutes to describe the situation, what you have tried and whether this route fits.
                </p>
              </div>
            </div>

            <dl className="border-t border-deep-border">
              {[
                ["Length", "3 months"],
                ["Meetings", "12 private 1:1 Zoom meetings"],
                ["Fee", "€6,000"],
                ["Start", "available now"],
              ].map(([term, value]) => (
                <div key={term} className="border-b border-deep-border py-4">
                  <dt className="text-[0.6875rem] uppercase tracking-widest text-deep-muted">{term}</dt>
                  <dd className="mt-1 font-serif text-xl text-deep-text">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">What brings people here</p>
            <h2 className="font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              The problem no longer fits one ready-made answer
            </h2>
          </div>
          <ul className="border-t border-border">
            {recognitionPoints.map((point, index) => (
              <li
                key={point}
                className="grid gap-4 border-b border-border py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:py-6"
              >
                <span className="font-serif text-lg text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="max-w-3xl text-base leading-7 text-ink-light sm:text-lg">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section-dark">Published case</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-deep-text lg:text-4xl">
              The road became part of ordinary life again
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-deep-muted sm:text-lg">
              After a panic episode, a client could drive only a few miles from the city. The work moved from background load to the road incident itself. Change was tested first in imagination, then through real journeys.
            </p>
            <Link
              href="/evidence/driving-panic"
              className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-accent-dim hover:text-deep-text"
            >
              Read the full case →
            </Link>
          </div>
          <dl className="border-t border-deep-border">
            {[
              ["Limit", "a few miles from the city"],
              ["How it was tested", "in imagination, then on the road"],
              ["What returned", "the ability to drive again"],
            ].map(([term, value]) => (
              <div key={term} className="border-b border-deep-border py-5">
                <dt className="text-xs uppercase tracking-widest text-deep-muted">{term}</dt>
                <dd className="mt-2 font-serif text-2xl leading-snug text-deep-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section">What counts as change</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
            Not a good conversation about the result — a different response in the same life
          </h2>
          <div className="mt-12 grid border-y border-border md:grid-cols-3">
            {[
              ["01", "Response", "The same trigger can be checked again without producing the previous automatic answer."],
              ["02", "Action", "Choice is available again in the conversation, journey, decision or boundary."],
              ["03", "Reality", "If the external problem remains, it can be addressed without the old response taking control."],
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
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">How the three months work</p>
            <h2 className="font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              One cycle, repeated with new material
            </h2>
            <p className="mt-6 text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Ugis holds the structure. The evidence appears between meetings, where you apply the tool independently.
            </p>
          </div>
          <ol className="border-t border-border">
            {routeSteps.map((step) => (
              <li
                key={step.number}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3.5rem_14rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
              >
                <span className="font-serif text-xl text-accent">{step.number}</span>
                <h3 className="font-serif text-xl leading-snug text-ink sm:text-2xl">{step.title}</h3>
                <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section-dark">1:1 or group</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-deep-text lg:text-4xl">
            Private 1:1 work fits when the shared order is no longer enough
          </h2>
          <div className="mt-10 grid border-y border-deep-border md:grid-cols-2">
            <div className="py-8 md:border-r md:border-deep-border md:pr-10">
              <p className="text-xs uppercase tracking-widest text-accent-dim">Private 1:1 work</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                Subject, depth and next move are reset after each step according to your situation.
              </p>
            </div>
            <div className="border-t border-deep-border py-8 md:border-t-0 md:pl-10">
              <p className="text-xs uppercase tracking-widest text-deep-muted">Group</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                Fits when you can follow a shared sequence and practise independently between meetings.
              </p>
              <Link
                href="/group"
                className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-accent-dim hover:text-deep-text"
              >
                Explore the group →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Before deciding</p>
            <h2 className="font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              The format in brief
            </h2>
          </div>
          <div className="border-t border-border">
            {faq.map(([question, answer]) => (
              <details key={question} className="group border-b border-border">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 font-serif text-xl leading-snug text-ink marker:content-none sm:text-2xl">
                  {question}
                  <span aria-hidden="true" className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-6 pr-8 text-sm leading-6 text-muted sm:text-base sm:leading-7">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Next step</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              First determine whether 1:1 fits
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-light sm:text-lg">
              Describe the situation and what you have already tried. The first conversation establishes whether this is the right route.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
                variant="primary"
                size="lg"
              >
                Book a first conversation
              </Button>
              <Link
                href="/formats"
                className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-ink"
              >
                Compare formats →
              </Link>
            </div>
          </div>
          <dl className="border-t-2 border-accent pt-6 lg:text-right">
            <dt className="text-xs uppercase tracking-widest text-muted">3 months · 12 meetings</dt>
            <dd className="mt-2 font-serif text-4xl tracking-display text-ink sm:text-5xl">€6,000</dd>
            <dd className="mt-3 text-sm text-muted">Available now</dd>
          </dl>
        </div>
      </section>
    </>
  );
}
