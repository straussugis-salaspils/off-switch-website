import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";

export const metadata: Metadata = {
  title: "Stress and Overload | The Off-Switch Method",
  description:
    "For people carrying accumulated pressure, responsibility, and mental load that does not switch off. A structured Off-Switch Method page on stress, overload, and persistent activation.",
};

export default function StressAndOverload() {
  return (
    <>
    <IssuePageLayout
      h1="Stress and Overload"
      intro={[
        "The day is over. The pressure has not left with it.",
        "This is for people who are still functioning, but carrying more pressure than their system can keep absorbing. The workload may be understood. The responsibilities may be real. But even when the immediate demand is over, the system does not fully return to neutral.",
        "The causes may be clear. The workload, the sustained demands, the responsibilities that do not fully stop. Understanding them does not lower the activation. Knowing why the system is under pressure and getting it to return to baseline are two different kinds of work. This is relevant to the gap between them.",
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
          "The problem begins when the load does not fully clear between cycles. When each demanding period adds to what was already present — because the previous load was not resolved before the next arrived. Over time, the system's baseline rises. What is present now includes what did not clear before.",
          "At that point, the problem is no longer only the current workload. The system is already loaded before the next demand arrives. A normal request, decision, conflict, or deadline lands on top of existing charge. That is why the reaction can look disproportionate from the outside while feeling completely real from the inside. Rest helps at the margins. It does not clear what has accumulated. That is why reducing external pressure may not produce the return to neutral the person expects.",
          "If the external load is still objectively too high, practical workload, boundary, medical, or organizational changes may also be necessary; this work addresses the accumulated internal activation that remains even when the person already understands the pressure.",
        ],
      }}
      methodSection={{
        heading: "How the method relates to accumulated stress",
        paragraphs: [
          "The first phase of the method works directly on what has accumulated — not on managing its symptoms or reorganizing external demands. The primary tool is introduced in Session 1 and used daily by the client from that point. It is not relaxation, and it does not depend on insight, willpower, or trying to calm yourself down. Over time, it reduces the accumulated load until genuine rest becomes accessible again.",
          "Once that has happened, the second phase works through the specific material contributing to the sustained activation — the periods of sustained difficulty, the experiences that built up rather than cleared, the patterns still running underneath. The method works through these until they no longer activate.",
          "The engagement has a defined structure and a clear endpoint. The aim is a measurable reduction in automatic activation, not an ongoing support arrangement.",
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
      ctas={{
        closing:
          "If this is familiar — pressure continues, rest does not restore capacity, and the baseline does not change — start with the mechanism explanation or book a first conversation.",
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
