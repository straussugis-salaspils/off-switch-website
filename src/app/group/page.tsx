import type { Metadata } from "next";
import Link from "next/link";
import UgisWorkingPhoto from "@/components/blocks/UgisWorkingPhoto";

import FormatsNavigation from "@/components/layout/FormatsNavigation";
import Button from "@/components/ui/Button";
import { groupInquiryUrl } from "@/lib/conversion-links";
import { buildPageMetadata } from "@/lib/page-metadata";

const groupFit = [
  "The same reaction keeps turning up in different situations. You want to work on the pattern, not only the latest incident.",
  "You want to learn with a small group without having to tell your whole life story.",
  "You can make time for independent practice between live Zoom meetings.",
  "You want to check the difference in your actual life, not only feel better during a meeting.",
] as const;

const phases = [
  {
    number: "01",
    period: "Weeks 1–2",
    title: "Manage a specific reaction",
    action: "Learn the tool and begin with one situation you can work with.",
    check: "Can you notice the reaction earlier and reduce it independently?",
  },
  {
    number: "02",
    period: "Weeks 3–5",
    title: "Reduce the strain you carry",
    action: "Work with what keeps you tense or on alert between difficult moments.",
    check: "Is there less background tension making each new situation harder?",
  },
  {
    number: "03",
    period: "Weeks 6–8",
    title: "Work through connected reactions",
    action: "Work with past episodes and imagined future situations.",
    check: "When you return to the same memory or future situation, does it still set off the old reaction?",
  },
  {
    number: "04",
    period: "Weeks 9–12",
    title: "Put the change into practice",
    action: "Test what is different in conversations, decisions, boundaries, sleep and the things you do.",
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

      <section data-editorial-section className="grain bg-deep py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-page-dark">Off-Switch group programme</p>
          <h1 className="type-page-title max-w-4xl text-deep-text">
            The Off-Switch Group with Ugis
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-deep-muted sm:text-lg">
            You want to say what you mean, stop carrying work through the evening or face something you have been avoiding. Over 12 weeks, you learn and practise the method in your own life, with Ugis leading every weekly live Zoom meeting.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-deep-muted">
            12 live meetings, once a week, lasting 90–150 minutes each. Allow 30–60 minutes a day for independent practice.
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
              Tell Ugis what you want to work on and ask whether the group is a good fit.
            </p>
          </div>

          <dl className="mt-12 grid border-y border-deep-border sm:grid-cols-3">
            {[
              ["Length", "12 weeks"],
              ["Group", "up to 12 participants"],
              ["Next group", "planned for January 2027"],
            ].map(([term, value], index) => (
              <div
                key={term}
                className={`py-5 sm:px-6 ${index > 0 ? "border-t border-deep-border sm:border-l sm:border-t-0" : ""}`}
              >
                <dt className="text-[0.6875rem] uppercase tracking-widest text-deep-muted">{term}</dt>
                <dd className="mt-2 font-serif text-xl leading-snug text-deep-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-7 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)] lg:gap-20 lg:px-10">
          <div className="min-w-0">
            <UgisWorkingPhoto />
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
              Every group meeting is led by Ugis Strauss
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-ink-light">
              I created the Off-Switch Method. In the group, I teach through the situations you bring, show how to apply the technique and guide the next step. What you encounter in your practice helps me adjust the pace for the group.
            </p>
            <Link href="/about" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-ink">
              More about my work →
            </Link>
          </div>
          <div>
            <p className="eyebrow-section">Who the group is for</p>
            <h3 className="mb-7 font-serif text-2xl leading-tight tracking-display text-ink sm:text-3xl">
              Who the group programme is for
            </h3>
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
        </div>
      </section>

      <section data-editorial-section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section">Your 12 weeks</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-ink lg:text-4xl">
            What you practise and test during the 12-week programme
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-7 text-ink-light sm:text-lg">
            The point is not to become very good at attending Zoom. Each week, you learn with the group, practise with a situation, memory or worry of your own, and bring back what happened.
          </p>
          <p className="mt-8 text-sm font-medium text-accent">Inside a meeting — an example</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink-light">
            Suppose you bring a question about saying yes to your manager when you meant no. We can look at the precise point where the response starts: a tone, a look or the fear of displeasing the other person. I show how to work with that smaller target and check it again. Someone else may recognise the same sequence in a different situation and apply it to their own work. The next test is the conversation outside the meeting.
          </p>
          <Link
            href="/articles/why-the-main-work-happens-between-sessions"
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-ink"
          >
            How meetings and daily practice work →
          </Link>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-light">
            Here is what you work on over the 12 weeks, and what you check along the way.
          </p>
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

      <section data-editorial-section className="bg-deep py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <p className="eyebrow-section-dark">Group or private</p>
          <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-display text-deep-text lg:text-4xl">
            How the group programme differs from private 1:1 work
          </h2>
          <div className="mt-10 grid border-y border-deep-border md:grid-cols-2">
            <div className="py-8 md:border-r md:border-deep-border md:pr-10">
              <p className="text-xs uppercase tracking-widest text-accent-dim">In the group</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                Ugis leads a shared sequence. You apply the method to your own experiences, practise independently and bring back the situations where the reaction remains.
              </p>
            </div>
            <div className="border-t border-deep-border py-8 md:border-t-0 md:pl-10">
              <p className="text-xs uppercase tracking-widest text-deep-muted">In private 1:1 work</p>
              <p className="mt-5 font-serif text-xl leading-snug text-deep-text sm:text-2xl">
                Your meetings and next steps are built around your situation. Ugis chooses and adjusts what you work on, how deeply and in what order from what happens between your sessions.
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

      <section data-editorial-section className="bg-surface py-16 sm:py-20 lg:py-24">
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
          </div>
        </div>
      </section>
    </>
  );
}
