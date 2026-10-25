import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Recurring Triggers That Still Fire Despite Insight",
  description: "For a known emotional trigger that continues to produce the old reaction even after you understand the pattern and its origins.",
  path: "/issues/emotional-triggers",
});

export default function EmotionalTriggers() {
  return (
    <>
    <IssuePageLayout
      h1="Recurring Triggers"
      intro={[
        "You know the pattern. You know exactly where it comes from. You can describe the type of situation, the tone of voice, the dynamic — in more detail than most people who haven't spent years working on it.",
        "It still fires.",
        "The frustration here is specific: not that you react — you understand why — but that the understanding makes no difference when the moment comes. You can be watching yourself react and not be able to stop it. The awareness is completely present. The reaction continues anyway.",
        "Most people reading this have done real work on it. Therapy that was genuine and useful. Insight that is solidly theirs. The pattern is named and mapped. It still fires.",
      ]}
      whatItLooksLike={[
        "A specific type of situation or interaction — a tone of voice, a kind of criticism, a feeling of being dismissed or ignored, a particular relational dynamic — that reliably produces a response larger than the current situation warrants.",
        "Recognizing the pattern while it is happening. And still being unable to stop it.",
        "The familiar aftermath: perspective returns, you can see how much bigger the reaction was than the situation, and you are frustrated that it happened again.",
        "The pattern is consistent and specific. Not random emotional instability — a predictable response to a predictable kind of situation.",
        "Relationships affected by the recurring pattern. Partners, close colleagues, family — people who have been on the receiving end, more than once.",
        "Prior work that produced real insight. Therapy that named the origin. Coaching that mapped the trigger. Years of self-development that changed how the person understands themselves. The insight is real. The pattern persists.",
      ]}
      mechanism={{
        heading: "What the reaction is drawing from",
        paragraphs: [
          "The resemblance doesn't have to be exact. A particular tone, a familiar dynamic — and the old response fires. It's the match that lights something older.",
          "It may connect to an earlier experience, a familiar relationship dynamic, anticipated rejection or conflict, or a body sensation. The resemblance only has to be close enough to bring up the response.",
          "Knowing that connection can be valuable. But naming the pattern does not necessarily change the response attached to it. That is why you can recognize the trigger and still react.",
        ],
      }}
      methodSection={{
        heading: "What the method works on",
        paragraphs: [
          "The Method works on the experiences, anticipated responses or sensations connected to the trigger. As their emotional charge comes down, the present-day cue has less to set off.",
          "This is not about developing better responses at the moment of triggering. It is not impulse control or pausing before reacting. It is about working back to what the trigger is actually drawing from — until it no longer carries the activation that drives the reaction.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote: "I realized that for the last 10 years I could not move forward just because of situations from my past. I tried many methods and was sure I had dealt with everything — only here did it turn out those situations were still affecting me.",
        attribution: "Victoria Vayzhgela",
        context: "Ukraine",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      readingGuides={[
        { title: "Emotional triggers: what they are and why they start a reaction", description: "The definition and mechanism: how a present cue becomes connected to an automatic response.", href: "/articles/emotional-triggers" },
        { title: "Why your reaction can feel bigger than the situation", description: "How the present moment and older activated material can arrive inside one reaction.", href: "/articles/why-your-reaction-feels-bigger-than-the-situation" },
        { title: "The past and difficult memories", description: "Browse the Library topic on recurring triggers, connected memories and reactions that continue in the present.", href: "/library/past-difficult-memories" },
      ]}
      ctas={{
        closing: "You do not need to explain the pattern more convincingly. If you want to work on the reaction that still arrives, start with a conversation about your situation or read how the Method works.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            If the trigger becomes sudden emotional intensity,{" "}
            <Link href="/issues/when-emotions-take-over" className="text-accent hover:text-accent-dim transition-colors">
              When Emotions Take Over
            </Link>{" "}
            may be more specific.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If it turns into repeated mental loops,{" "}
            <Link href="/issues/overthinking" className="text-accent hover:text-accent-dim transition-colors">
              Overthinking
            </Link>{" "}
            may be more specific.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
