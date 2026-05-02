import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Who This Is For",
  description:
    "The Off-Switch Method applies to anxiety, PTSD, burnout, stress and overload, panic attacks, emotional triggers, trauma, sleep disruption, emotional overload, and overthinking.",
};

const clusters = [
  {
    group: "Acute activation",
    heading: "Anxiety, panic, and threat response",
    supporting:
      "For people whose system moves into fear, danger, or alarm faster than the mind can settle it.",
    issues: [
      {
        label: "Panic Attacks",
        href: "/issues/panic-attacks",
        recognition:
          "The conviction is absolute: something is seriously wrong. The knowing doesn't stop it.",
        detail: "Documented field case: 40+ years of panic attacks no longer activating.",
      },
      {
        label: "Anxiety",
        href: "/issues/anxiety",
        recognition:
          "The anxiety is already there when you wake up. Before the day has given it a reason.",
        detail: "Persistent background activation — not situational, not rational.",
      },
      {
        label: "Sleep and Night Anxiety",
        href: "/issues/sleep",
        recognition:
          "Not tired-3am. Activated-3am. The body exhausted. The mind already running something.",
        detail: "Night removes what the day was covering. What remains is the activation.",
      },
    ],
  },
  {
    group: "Accumulated load",
    heading: "Stress, burnout, and accumulated load",
    supporting:
      "For people carrying too much pressure for too long, with recovery, clarity, or control starting to weaken.",
    issues: [
      {
        label: "Burnout",
        href: "/issues/burnout",
        recognition:
          "You rested. It didn't bring you back.",
        detail: "Energy, motivation, and capacity have started to break down after prolonged pressure.",
      },
      {
        label: "Stress and Overload",
        href: "/issues/stress-and-overload",
        recognition:
          "The day is over. The pressure has not left with it.",
        detail: "Still functioning, but the system no longer fully comes down between demands.",
      },
      {
        label: "When Emotions Take Over",
        href: "/issues/when-emotions-take-over",
        recognition:
          "The reaction is already happening before you have chosen it.",
        detail: "Anger, panic, shame, fear, or hurt can rise faster than the mind can manage.",
      },
      {
        label: "Overthinking",
        href: "/issues/overthinking",
        recognition:
          "The thinking has kept going past the point where it was useful. The loop continues anyway.",
        detail: "Not a thinking problem. An activation problem the mind is trying to solve.",
      },
    ],
  },
  {
    group: "Stored response patterns",
    heading: "Past responses still running",
    supporting:
      "For people whose present reactions are still shaped by charged material from earlier experiences.",
    issues: [
      {
        label: "PTSD",
        href: "/issues/ptsd",
        recognition:
          "You know you are safe. The body doesn't agree.",
        detail: "The event is history. The body's response to it is present.",
      },
      {
        label: "Recurring Triggers",
        href: "/issues/emotional-triggers",
        recognition:
          "You know the pattern. You know exactly where it comes from. It still fires.",
        detail: "Insight is real and complete. The pattern persists regardless.",
      },
      {
        label: "Trauma and Past Events",
        href: "/issues/trauma-and-past-events",
        recognition: "“I’ve dealt with this” and “this is still present” are not contradictions.",
        detail: "Past events may be logically understood while the body still carries the charge.",
      },
    ],
  },
];

export default function WhoThisIsFor() {
  return (
    <>
      {/* HERO */}
      <section className="grain pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Who This Is For
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              The Off-Switch Method works directly on the activation, not only on the
              explanation of where it came from. These pages are for people who understand
              the story, but still feel the reaction happening in the body.
            </p>
          </div>
        </div>
      </section>

      {/* CLUSTER GRID */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {clusters.map((cluster, ci) => (
              <div key={cluster.group}>
                {/* Cluster header */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Large pale number — left column on desktop */}
                    <div
                      className="font-serif text-6xl md:text-7xl leading-none shrink-0 md:w-20"
                      style={{ color: "var(--color-accent)", opacity: 0.35 }}
                    >
                      {String(ci + 1).padStart(2, "0")}
                    </div>
                    {/* Heading + description — right column on desktop */}
                    <div className="pt-1 md:pt-2">
                      <h2
                        className="font-serif text-3xl lg:text-4xl font-light leading-tight tracking-display"

                        style={{ color: "var(--color-ink)" }}
                      >
                        {cluster.heading}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                        {cluster.supporting}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-border" />
                </div>

                {/* Issue cards */}
                <div className={`grid grid-cols-1 gap-5 ${cluster.issues.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {cluster.issues.map((issue) => (
                    <Link
                      key={issue.href}
                      href={issue.href}
                      className="group flex flex-col border border-border hover:border-accent focus-visible:border-accent focus-visible:outline-none transition-colors duration-200 bg-white"
                    >
                      {/* Top accent bar — visible on hover/focus */}
                      <div className="h-0.5 bg-transparent group-hover:bg-accent group-focus-visible:bg-accent transition-colors duration-200" />

                      <div className="p-8 lg:p-10 flex flex-col flex-1">
                        {/* Issue name — dominant heading */}
                        <h3 className="font-serif text-2xl lg:text-3xl font-light text-ink leading-tight mb-5 group-hover:text-accent transition-colors duration-200">
                          {issue.label}
                        </h3>

                        {/* Recognition line — supporting context */}
                        <p className="text-sm text-ink-light leading-relaxed italic flex-1 mb-6">
                          {issue.recognition}
                        </p>

                        {/* Detail line */}
                        <p className="text-sm text-ink-light leading-relaxed mb-6 border-t border-border pt-4">
                          {issue.detail}
                        </p>

                        {/* CTA */}
                        <span className="text-sm text-accent group-hover:text-accent-dim transition-colors flex items-center gap-1.5">
                          How this applies
                          <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-base text-deep-muted leading-relaxed mb-8">
              If the pattern is familiar and you&rsquo;ve read enough to want a
              conversation:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Book a first conversation
              </Button>
              <Button href="/the-method" variant="ghost-light" size="lg">
                How the method works →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
