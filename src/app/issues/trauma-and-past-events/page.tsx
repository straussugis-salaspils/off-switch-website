import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";

export const metadata: Metadata = {
  title: "Trauma and Past Events | The Off-Switch Method",
  description:
    "For past experiences that still carry charge and shape present reactions, decisions, relationships, or body tension — even when the story is no longer new.",
};

export default function TraumaAndPastEvents() {
  return (
    <>
    <IssuePageLayout
      h1="Trauma and Past Events"
      intro={[
        "When the past won't stay in the past.",
        "You may understand what happened. You may have explained it, processed it, or placed it in the past. But the body can still carry the charge. A memory, relationship pattern, tone, place, conflict, or period of life can continue to shape present reactions even when the story is no longer new.",
        "This page is for people who do not necessarily identify with PTSD, but know that past experiences still affect the present. Past events can still carry stored activation — shaping reactions, decisions, relationships, confidence, shame, fear, or body tension — even when the events themselves are understood.",
        "“I’ve dealt with this” and “this is still present” are not contradictions.",
      ]}
      whatItLooksLike={[
        "Memories that, when accessed, produce a physical response — not just recollection, but something felt in the body. The event is historical. The response to it is not.",
        "Specific situations, tones, or dynamics that consistently connect back to that period — sometimes obviously, sometimes only visible in retrospect.",
        "Having talked about the events extensively — processed the meaning, understood the impact — without the body's response fully changing. The narrative is complete. The body's reaction hasn't followed.",
        "Avoidance that isn't always deliberate. Not returning to certain places. Not having certain conversations. Not letting the mind go to certain material — without a clear decision not to.",
        "A sense that the period has been contained rather than resolved. Not active every day. But not gone either.",
        "Patterns in relationships or responses that trace back to specific experiences — recognizable now in ways they weren't before.",
        "Life has moved forward. Something in the nervous system has not caught up.",
      ]}
      mechanism={{
        heading: "Why it continues even after understanding",
        paragraphs: [
          "The events themselves are not the ongoing problem. The problem is what the events left behind.",
          "Some experiences leave the body still responding to what the mind believes it has finished with. When the memory surfaces, the body responds to what is still attached to it — not just to the content of the memory itself. The event is history. The body's response to it is present.",
          "Working through the meaning of what happened is real work and often genuinely valuable. It doesn't change what is still attached to the memory.",
        ],
      }}
      methodSection={{
        heading: "How the method relates to this",
        paragraphs: [
          "The method works on the activation attached to specific memories and experiences — not on the narrative of what happened. The events are not relived or recounted in detail. The body's stored response to the material is what is worked on.",
          "The second phase of the method works through the emotional history — not only the presenting event, but the full range of past material that may still be carrying activation. When the memory no longer produces a significant response, work on that target ends. What changes is not the memory — it is what the memory still does in the body.",
          "This is not insight-based work. It does not require understanding more than you already do. It addresses what the understanding left unchanged.",
          "This is not crisis care or a substitute for medical or psychiatric support when that is needed.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote:
          "Now it is possible to remove my negative anchors more quickly, without retraumatization — and not spend endless months working with a psychotherapist on a single episode.",
        attribution: "Irina Matvienko",
        context: "Ukraine",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      ctas={{
        closing:
          "If this is familiar — understanding solid, body not yet following — the first step is a conversation about your specific situation.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            If past events still produce intrusive responses or hypervigilance,{" "}
            <Link href="/issues/ptsd" className="text-accent hover:text-accent-dim transition-colors">
              PTSD
            </Link>{" "}
            may be more specific.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If specific cues from those events keep firing,{" "}
            <Link href="/issues/emotional-triggers" className="text-accent hover:text-accent-dim transition-colors">
              Recurring Triggers
            </Link>{" "}
            may be more specific.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
