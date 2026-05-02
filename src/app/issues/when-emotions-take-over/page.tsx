import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";

export const metadata: Metadata = {
  title: "When Emotions Take Over | The Off-Switch Method",
  description:
    "For reactions that rise faster than conscious choice: anger, panic, shame, fear, hurt, or defensiveness. A structured Off-Switch Method page on emotional activation.",
};

export default function WhenEmotionsTakeOver() {
  return (
    <>
    <IssuePageLayout
      h1="When Emotions Take Over"
      intro={[
        "The reaction is already happening before you have chosen it.",
        "You may understand the situation. You may even know how you should respond. But in the moment, the body has already moved first. Anger, panic, shame, fear, hurt, or defensiveness rises before there is enough space to choose.",
        "This is not mainly about managing reactions. It is about responses that arrive faster than conscious choice — and why insight alone often does not change the speed at which they arrive.",
      ]}
      whatItLooksLike={[
        "Reactions that are faster and larger than the situation warrants — with the recognition arriving mid-reaction rather than before it.",
        "Specific tones, words, people, or situations that reliably hit too hard. The triggers are often not a mystery. They still fire.",
        "The emotional aftermath: the conversation ends, the trigger passes, the agitation continues. Replaying it, defending internally, going over it — unable to drop it for hours.",
        "Knowing the response was too much. Not being able to use that knowledge while it is happening.",
        "Periods of genuine calm, punctuated by intensity that feels disproportionate to the immediate situation.",
        "Relationships shaped by vigilance — yours, or other people's around you.",
        "Prior approaches — breathing, pausing, tracking the pattern, understanding the history — working to a degree at the margins. The baseline returning.",
      ]}
      mechanism={{
        heading: "What drives the intensity",
        paragraphs: [
          "The present situation is not the only thing the reaction is to.",
          "When something in the current moment resembles older material — a particular tone, a specific kind of dismissal, a moment that matches earlier experiences — the charge attached to that older material fires alongside the present response. The intensity is not created only by what is happening now. It is what is happening now, plus what the moment matches from history.",
          "Often there is a second layer: the reaction itself becomes charged. The speed of it, the loss of control, the aftermath — these carry their own weight, often of shame or self-judgment. The original trigger, and then the reaction to having reacted. Both add to what is already present.",
          "Understanding this — the pattern, the origin, the logic of the trigger — may explain the meaning of it. But understanding alone does not always reduce the activation that fires when the trigger connects.",
        ],
      }}
      methodSection={{
        heading: "What the method works on",
        paragraphs: [
          "The method works on what the trigger is connected to — the specific past experiences it has been drawing from, and the body's response to them.",
          "As the activation on that underlying material reduces, the trigger loses the weight that was making the reaction disproportionate. This does not depend on better self-control at the moment the reaction starts. It works on what the trigger is pulling from, so the reaction no longer has the same fuel.",
          "Where insight exists but reaction speed still outruns it — where the pattern is understood but the response fires before the understanding arrives — that is the gap this addresses.",
          "If reactions involve danger to self or others, immediate crisis, psychiatric, or medical support is the correct starting point.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote:
          "One case from the 1:1 work: a pattern of acute stress response to criticism — rooted in a history of workplace bullying — was cleared as part of a full engagement. By the end of the work, what had previously produced a significant reactive response no longer activated.",
        attribution: "Case from 1:1 work",
        context: "anonymized",
        cta: { label: "Full case documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      ctas={{
        closing:
          "If the pattern is consistent and has not responded to previous approaches, the first step is a conversation about your specific situation.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            If the main pattern is accumulated pressure and responsibility rather than sudden reaction,{" "}
            <Link href="/issues/stress-and-overload" className="text-accent hover:text-accent-dim transition-colors">
              Stress and Overload
            </Link>{" "}
            may be more relevant.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the same situations keep setting off the reaction,{" "}
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
