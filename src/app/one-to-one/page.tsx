import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UgisWorkingPhoto from "@/components/blocks/UgisWorkingPhoto";

import FormatsNavigation from "@/components/layout/FormatsNavigation";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/page-metadata";

const recognitionPoints = [
  "You know you want to say no. In the conversation, you hear yourself agreeing.",
  "You finish work, but your mind keeps going. The day is over only on the calendar.",
  "You feel calm about a situation until you actually have to face it.",
  "One part of life becomes easier. The same reaction still turns up somewhere else.",
  "The fear is quieter, but there is still a decision to make, a boundary to set or a skill to learn.",
] as const;

const routeSteps = [
  {
    number: "01",
    title: "Learn the tool",
    body: "In the first meeting, I teach you the hand position and slow bilateral movement you will use with a memory, worry or physical reaction. You then have a tool to practise yourself.",
  },
  {
    number: "02",
    title: "Choose what to work on",
    body: "We choose a particular situation, memory or worry and check how strongly you react to it before and after using the technique. That gives us something specific to work with.",
  },
  {
    number: "03",
    title: "Test the change",
    body: "Between meetings, you practise and test what happens in a real conversation, drive, night of sleep or decision. Can you do what the reaction used to prevent? A job, relationship or practical problem may still need attention; reducing the reaction does not make those decisions for you.",
  },
  {
    number: "04",
    title: "Review what has not changed and adjust the next step",
    body: "At the next meeting, we look at where the work got stuck. Was the target too much to begin with? Is a different part of the situation setting off the response? My job is to work out where the process failed and adjust the next step—not simply tell you to keep trying.",
  },
] as const;

const faq = [
  [
    "Can I start now?",
    "Yes. Start with a conversation about what keeps happening, what you have tried and whether private work makes sense for you.",
  ],
  [
    "How long is the programme?",
    "12 private 1:1 Zoom sessions over three to four months. Each session lasts 60–90 minutes, with independent practice between sessions.",
  ],
  [
    "What happens between meetings?",
    "Allow 30–60 minutes a day for independent practice. You work with the situations and memories agreed in the meeting, then notice what happens when you encounter them again. What changes, and what still needs work, helps Ugis plan your next session.",
  ],
  [
    "What if I need more work after the 12 sessions?",
    "The programme includes 12 private sessions. If there is more to work on after those sessions, you can continue independently with the method you have learned, or continue working with Ugis under a separate arrangement.",
  ],
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Private 1:1 Off-Switch Work with Ugis Strauss",
  description:
    "12 private 1:1 Off-Switch sessions over three to four months with Ugis Strauss, independent practice and change tested in ordinary life.",
  path: "/one-to-one",
});

export default function OneToOnePage() {
  return (
    <>
      <FormatsNavigation />

      <section data-editorial-section className="grain bg-deep py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow-page-dark">Private 1:1 Off-Switch programme · Ugis Strauss</p>
              <h1 className="type-page-title max-w-4xl text-deep-text">
                Private 1:1 work with Ugis
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-deep-muted sm:text-lg">
                You can explain the pattern. Then the conversation starts, the journey begins or the working day refuses to end. Work directly with me on the reaction, with each next step chosen from what actually happens between our meetings.
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
                  A complimentary 45-minute conversation about your situation, what you have tried and whether working together makes sense. The conversation does not commit you to the work.
                </p>
              </div>
            </div>

            <dl className="border-t border-deep-border">
              {[
                ["Length", "3–4 months"],
                ["Sessions", "12 private 1:1 Zoom sessions, 60–90 minutes each"],
                ["Daily practice", "30–60 minutes"],
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

      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)] lg:gap-20 lg:px-10">
          <div className="grid min-w-0 grid-cols-[6rem_minmax(0,1fr)] items-center gap-x-5 gap-y-5 sm:grid-cols-[8rem_minmax(0,1fr)] lg:block">
            <div className="relative aspect-[3/4] w-full overflow-hidden lg:w-48">
              <Image
                src="/images/ugis/ugis-strauss-portrait-2026-v1.webp"
                alt="Ugis Strauss"
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 256px, 192px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <h2 className="font-serif text-3xl leading-tight tracking-display text-ink lg:mt-6 lg:text-4xl">
              Your private sessions with Ugis Strauss
            </h2>
            <p className="col-span-2 max-w-md text-base leading-7 text-ink-light lg:mt-4">
              My private work began more than 15 years ago. Here, you work directly with me: I teach you the method, choose the next step with you and check what changes in your life.
            </p>
            <Link href="/about" className="col-span-2 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-ink lg:mt-4">
              More about my work →
            </Link>
          </div>
          <div>
            <p className="eyebrow-section">What brings people here</p>
            <h3 className="mb-7 font-serif text-2xl leading-tight tracking-display text-ink sm:text-3xl">
              Situations you can work on in private sessions
            </h3>
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
        </div>
      </section>

      <section data-editorial-section className="bg-deep py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section-dark">Individual case · client-maintained tracker</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-deep-text lg:text-4xl">
              The road became part of ordinary life again
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-deep-muted sm:text-lg">
              After a panic episode, this client could drive only roughly five miles beyond the city. The work first addressed the wider pressure he was carrying, then the road incident itself. He tested the change in imagination and through real journeys of 15, 100 and 200 miles over 90 days.
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
              ["Starting limit", "roughly five miles beyond the city"],
              ["How it was tested", "in imagination, then on the road"],
              ["During 90 days", "15-, 100- and 200-mile journeys"],
            ].map(([term, value]) => (
              <div key={term} className="border-b border-deep-border py-5">
                <dt className="text-xs uppercase tracking-widest text-deep-muted">{term}</dt>
                <dd className="mt-2 font-serif text-2xl leading-snug text-deep-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section data-editorial-section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Your practice. My direction.</p>
            <h2 className="font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              How private sessions and independent practice work together
            </h2>
            <p className="mt-6 text-sm leading-6 text-muted sm:text-base sm:leading-7">
              You do not have to work out the sequence on your own. I teach the technique, help choose what to work on and adjust the next step from what happens between our meetings. The programme includes structured work through your emotional history, not only the first problem you bring.
            </p>
            <Link href="/the-method" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-ink">
              More about the technique →
            </Link>
            <UgisWorkingPhoto className="mt-6" />
          </div>
          <ol className="border-t border-border">
            {routeSteps.map((step) => (
              <li
                key={step.number}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-x-5 sm:py-7"
              >
                <span className="font-serif text-xl text-accent">{step.number}</span>
                <h3 className="font-serif text-xl leading-snug text-ink sm:text-2xl">{step.title}</h3>
                <p className="text-base leading-7 text-muted sm:col-start-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-editorial-section className="bg-deep py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section-dark">1:1 or group</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-deep-text lg:text-4xl">
            Do you want private meetings or a group programme?
          </h2>
          <div className="mt-10 grid border-y border-deep-border md:grid-cols-2">
            <div className="py-8 md:border-r md:border-deep-border md:pr-10">
              <p className="text-xs uppercase tracking-widest text-accent-dim">Private 1:1 work</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                Your meetings and next steps are built around your situation. Ugis chooses and adjusts what you work on, in what order, from what happens between your sessions.
              </p>
            </div>
            <div className="border-t border-deep-border py-8 md:border-t-0 md:pl-10">
              <p className="text-xs uppercase tracking-widest text-deep-muted">Group</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                Ugis leads the group through a shared sequence. You apply the method to your own memories, worries and reactions, with independent practice between meetings.
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

      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
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

      <section data-editorial-section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-20 lg:px-10">
          <div>
            <p className="eyebrow-section">Next step</p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              First determine whether 1:1 fits
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-light sm:text-lg">
              You do not need a perfectly organised explanation. Tell Ugis what keeps happening and what you have already tried. Together, you can consider whether this is the right way to work on it.
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
            <dt className="text-xs uppercase tracking-widest text-muted">12 sessions · 3–4 months</dt>
            <dd className="mt-3 text-sm text-muted">Available now</dd>
          </dl>
        </div>
      </section>
    </>
  );
}
