import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Stress and Overload That Does Not Switch Off",
  description:
    "For accumulated pressure, responsibility and mental load that remains active after the immediate demand or working day has ended.",
  path: "/issues/stress-and-overload",
});

export default function StressAndOverload() {
  return (
    <>
    <IssuePageLayout
      h1="Stress and Overload That Does Not Switch Off"
      intro={[
        "The day is over. The pressure has not left with it.",
        "This is for people who are still functioning, but carrying more pressure than their system can keep absorbing. The workload may be understood. The responsibilities may be real. But even when the immediate demand is over, the system does not fully return to neutral.",
        "You may know exactly why you are under pressure. That does not explain how to come down from it when there is finally a chance to stop. This page is about the load that remains.",
      ]}
      whatItLooksLike={[
        "Pressure present even when nothing immediate requires attention. A background state that doesn't fully leave between demands.",
        "Tired but unable to rest in a way that recovers anything. Sleep that does not restore what it should. The next day begins from roughly where the last one ended.",
        "The mind running ahead: planning, anticipating, scanning for what might need attention — problems that can wait, or that cannot be solved right now. It continues regardless.",
        "Reactions to small things larger than the situation warrants. Impatience where there would not have been impatience before.",
        "Needing things to stay under control because everything feels fragile if they do not. Difficulty stepping back, delegating, or tolerating uncertainty.",
        "Functioning well from the outside while carrying something that does not show.",
        "Steps already taken — rest, reduced workload, or better habits — that helped at the margins without changing the baseline.",
      ]}
      mechanism={{
        heading: "Why the system stays running",
        paragraphs: [
          "Normal stress rises and falls. The body meets a demand, responds, and returns to baseline. That is how it is designed to work.",
          "When you do not recover between demands, each new period of pressure adds to what the last one left behind. The next ordinary request lands on top of all of it. Your reaction can look disproportionate from the outside and feel entirely real from the inside.",
          "By then, reducing the workload may bring some relief without bringing you back to calm. The immediate demand has gone; the accumulated response has not.",
          "If the external load is still objectively too high, practical workload, boundary, medical, or organizational changes may also be necessary; this work addresses the accumulated internal activation that remains even when the person already understands the pressure.",
        ],
      }}
      methodSection={{
        heading: "How the method relates to accumulated stress",
        paragraphs: [
          "The first phase of the method works directly on what has accumulated — not on managing its symptoms or reorganizing external demands. The primary tool is introduced in Session 1 and used daily by the client from that point. It is not relaxation, and it does not depend on insight, willpower, or trying to calm yourself down. Over time, it reduces the accumulated load until genuine rest becomes accessible again.",
          "Once that has happened, the second phase works through the specific material contributing to the sustained activation — the periods of sustained difficulty, the experiences that built up rather than cleared, the patterns still running underneath. The method works through these until they no longer activate.",
          "We track whether the response is reducing and work towards an endpoint where you no longer need ongoing sessions.",
          "Where medical, psychiatric, or immediate crisis support is needed first, this is not the right starting point.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote:
          "A professional carrying sustained load across work and family responsibilities — still functioning, but unable to properly switch off for years — worked through the method over three months. The baseline came down. What had felt like a permanent state became accessible to change.",
        attribution: "Case from 1:1 work",
        context: "anonymized",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      readingGuides={[
        { title: "Work, burnout and difficulty acting", description: "Browse the complete Library topic on sustained workload, burnout, work reactions and blocked action.", href: "/library/work-burnout-action" },
        { title: "Why a panic attack can begin after prolonged overload", description: "Why the most visible reaction can appear after the system has carried pressure for a long time.", href: "/articles/panic-attack-after-stress-and-overload" },
        { title: "Why you cannot relax even when there is time", description: "Why stopping the external demand does not automatically bring the internal baseline down.", href: "/articles/why-you-cannot-relax" },
        { title: "Why one holiday does not fix burnout", description: "The difference between temporary distance from pressure and actual recovery of capacity.", href: "/articles/why-a-holiday-does-not-fix-burnout" },
      ]}
      ctas={{
        closing:
          "You may not be able to remove every responsibility. The question is whether you can stop carrying the pressure of all of them all the time. Read how the work proceeds, or talk with me about your situation.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            If recovery and capacity have started to break down,{" "}
            <Link href="/issues/burnout" className="text-accent hover:text-accent-dim transition-colors">
              Burnout
            </Link>{" "}
            may be more specific.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the pressure shows up as sudden emotional reactions,{" "}
            <Link href="/issues/when-emotions-take-over" className="text-accent hover:text-accent-dim transition-colors">
              When Emotions Take Over
            </Link>{" "}
            may be more relevant.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the pressure shows up as mental loops that won&rsquo;t stop,{" "}
            <Link href="/issues/overthinking" className="text-accent hover:text-accent-dim transition-colors">
              Overthinking
            </Link>{" "}
            may be more relevant.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
