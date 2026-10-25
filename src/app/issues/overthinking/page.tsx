import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Overthinking That Continues After It Stops Helping",
  description: "For analysis, replaying and future scenarios that continue after thinking has stopped producing useful information or decisions.",
  path: "/issues/overthinking",
});

export default function Overthinking() {
  return (
    <>
    <IssuePageLayout
      h1="Overthinking That Continues After It Stops Helping"
      intro={[
        "The thinking has kept going past the point where it was useful.",
        "Overthinking can look like analysis, planning, reviewing, preparing, or trying to prevent something from going wrong. But when the loop keeps running after it has stopped helping, the issue is often not lack of clarity. You have thought it through. You are still tense, and your mind goes looking for another answer.",
        "This is not about intelligence or its absence. People who overthink are often very good at thinking. The problem is not the quality of the analysis. The problem is that the mind cannot disengage — and the reason it cannot disengage is usually not that the thinking is unfinished. It is that something underneath has not resolved, and the mind is still trying.",
        "Stopping the loop can feel irresponsible. Like switching off the monitoring when the threat hasn't actually passed. That feeling is worth paying attention to, because it is pointing at something real.",
      ]}
      whatItLooksLike={[
        "Replaying conversations — especially ones that involved conflict, uncertainty, or something left unsaid.",
        "Running future scenarios repeatedly, including ones that may never happen, looking for the version that produces safety or certainty.",
        "Searching for the right interpretation, the perfect decision, the explanation that will finally settle the question. Brief relief from a round of analysis, followed by the mind returning to the same material.",
        "Difficulty resting even when physically exhausted. The body is done. The mind keeps producing more.",
        "Being mentally drained at the end of a day that, externally, did not demand that much.",
        "Knowing the thinking is excessive and still not being able to stop it. Not because awareness is missing — the awareness is already there. The loop continues anyway.",
        "Mindfulness, journaling, or cognitive approaches helping to a point. The loop returning, usually when something is at stake.",
        "The thinking intensifying around specific categories: relationships, risk, conflict, uncertainty, anticipation. Not random. Returning to the same material.",
      ]}
      mechanism={{
        heading: "Why the loop continues",
        paragraphs: [
          "The conversation is over, but the feeling it brought up has not settled. The mind returns to it, trying to think its way to safety, resolution or certainty.",
          "Another review may produce no new information and no better decision. Yet stopping still feels unsafe. In this pattern, the unresolved emotional response keeps asking for an answer that more analysis cannot supply.",
        ],
      }}
      methodSection={{
        heading: "What the method addresses",
        paragraphs: [
          "The method does not introduce better thoughts or more accurate analysis. It works on the material that is keeping the system activated underneath the loops.",
          "When the activation on specific material reduces — the memories, anticipations, or unresolved situations the mind keeps returning to — the loops responding to that material tend to reduce with it. When a conversation stops replaying or an anticipation stops running, it is usually not because the person decided to stop. The activation underneath changed.",
          "The useful test is not whether you can explain the loop. It is whether the same subject still pulls you into it.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote: "Not only did I get rid of the phantom siren in my head — in just three weeks I also resolved issues I had been working on for years in psychotherapy.",
        attribution: "Svetlana Valerievna",
        context: "Ukraine",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      readingGuides={[
        { title: "Repetitive thoughts, sleep and low mood", description: "Browse the complete Library topic on mental loops, nighttime replay and difficulty switching off.", href: "/library/thoughts-sleep-low-mood" },
        { title: "Why thoughts go in circles without reaching a decision", description: "Why another round of analysis may repeat the problem instead of resolving it.", href: "/articles/why-thoughts-go-in-circles" },
        { title: "Why your mind replays the day at night", description: "How unfinished activation can continue reviewing the day and preparing for tomorrow.", href: "/articles/why-your-mind-replays-the-day-at-night" },
        { title: "Why you cannot relax even when there is time", description: "Why available time and physical tiredness do not necessarily make disengagement possible.", href: "/articles/why-you-cannot-relax" },
      ]}
      ctas={{
        closing: "If you have thought it through many times and the loop still will not stop, we can discuss the particular subjects it returns to. Read about the Method or book a first conversation.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            If the loop is driven by accumulated pressure that does not switch off,{" "}
            <Link href="/issues/stress-and-overload" className="text-accent hover:text-accent-dim transition-colors">
              Stress and Overload
            </Link>{" "}
            may be more specific.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the loop escalates into sudden emotional reactions,{" "}
            <Link href="/issues/when-emotions-take-over" className="text-accent hover:text-accent-dim transition-colors">
              When Emotions Take Over
            </Link>{" "}
            may be more relevant.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
