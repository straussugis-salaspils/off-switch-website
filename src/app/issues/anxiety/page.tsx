import type { Metadata } from "next";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Persistent Anxiety After You Understand It",
  description: "For anxiety that remains active after you understand its origins, recognise the pattern and have already done useful work on it.",
  path: "/issues/anxiety",
});

export default function Anxiety() {
  return (
    <IssuePageLayout
      h1="Anxiety That Persists After You Understand It"
      intro={[
        "The anxiety is already there when you wake up. Before the day has given it a reason.",
        "Most people who find this page have worked on it. Sometimes for years. Therapy that was real and useful. Insights that are genuinely theirs — where it came from, what shaped it, why it makes sense in context. The pattern can be described with more precision than most people who haven't lived inside it.",
        "It is still there in the morning.",
        "That is not a failure of understanding. Knowing why you are anxious and changing the response are different kinds of work. This page is about the gap between them.",
      ]}
      safetyNote="If anxiety symptoms are new, severe, medically unexplained, or connected to medication, substances, or health changes, those causes should be assessed first. This page is about recurring anxiety patterns that continue after the person already understands the situation."
      whatItLooksLike={[
        "Activation that is present before the day has offered a clear reason for it. Chest, stomach, jaw — already engaged.",
        "A mental current that runs in the background. What might happen. How situations might develop. The analysis continues past the point where it produces anything useful.",
        "Specific situations — certain tones, certain types of interaction, certain outcomes — that reliably produce heightened activation. The triggers are not a mystery. They still fire.",
        "Exhaustion that isn't fully accounted for by workload. The cost of sustained vigilance.",
        "Moments of genuine calm, followed by the return. Calm feels temporary. The activation feels like the default.",
        "Prior approaches that helped at the margins — reduced the severity, improved management — without full resolution.",
      ]}
      mechanism={{
        heading: "Why it persists",
        paragraphs: [
          "Persistent anxiety is often not primarily a response to current threats. The response is older than the current situation.",
          "Past experiences of fear, overwhelm or loss can still bring up a physical response. When something now resembles them closely enough, that response returns — even when the present situation does not explain its strength.",
          "Understanding where the anxiety came from addresses its meaning. It does not address the activation attached to it. Both layers are real. They respond to different kinds of work.",
        ],
      }}
      methodSection={{
        heading: "What the method addresses",
        paragraphs: [
          "The Off-Switch Method works at the level where the activation lives — not in the narrative about the anxiety, but in the body's stored response to specific memories, triggers, and patterns.",
          "You learn a physical technique and apply it while attending to a specific memory, trigger, body sensation or anticipated event. We work on that response until it no longer registers, checking what happens when you return to the same material.",
          "You do not have to produce a better explanation of your anxiety first. The work is with the response that remains despite what you already understand.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote: "I found that after a couple of days the whole volcano of emotions just disappeared. I quickly returned to normal life. It was possible to get rid of panic attacks, fears and anxieties. In general, I look at life with great optimism and confidence.",
        attribution: "Irina Sennikova",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      readingGuides={[
        { title: "Anxiety and specific fears", description: "Browse the complete Library topic, from persistent anxiety to fear that spreads across similar situations.", href: "/library/anxiety-specific-fears" },
        { title: "Why anxiety can feel as though it has no cause", description: "How anxiety can be real and specific even when the present moment offers no obvious explanation.", href: "/articles/anxiety-for-no-reason" },
        { title: "Why anxiety can remain after you solve the main problem", description: "Why changing the situation and changing the response to it are not always the same piece of work.", href: "/articles/why-anxiety-returns-after-solving-a-problem" },
        { title: "How to tell whether an anxiety response has changed", description: "A practical way to test whether the old signal still produces the same automatic reaction.", href: "/articles/how-to-know-anxiety-response-has-changed" },
      ]}
      ctas={{
        closing: "If you know your anxiety well but still wake up with it, we can talk about what you have tried and whether this work fits. Or read how the Method works before deciding to speak.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
  );
}
