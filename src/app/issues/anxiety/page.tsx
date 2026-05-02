import type { Metadata } from "next";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";

export const metadata: Metadata = {
  title: "Anxiety",
  description: "Understanding the anxiety and switching off the anxiety are two different kinds of work. This is relevant to the gap between them.",
};

export default function Anxiety() {
  return (
    <IssuePageLayout
      h1="Anxiety"
      intro={[
        "The anxiety is already there when you wake up. Before the day has given it a reason.",
        "Most people who find this page have worked on it. Sometimes for years. Therapy that was real and useful. Insights that are genuinely theirs — where it came from, what shaped it, why it makes sense in context. The pattern can be described with more precision than most people who haven't lived inside it.",
        "It is still there in the morning.",
        "That is not a failure of understanding. Understanding the anxiety and switching off the anxiety are two different kinds of work. This is relevant to the gap between them.",
        "For people whose anxiety has been understood, worked on, explained — and still keeps activating.",
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
          "Past experiences that generated fear, overwhelm, or loss — and never fully resolved — are still registering as active. When present situations resemble those original experiences closely enough, the old response fires. It does not need a current reason. It activates because the original material is still carrying activation.",
          "Understanding where the anxiety came from addresses its meaning. It does not address the activation attached to it. Both layers are real. They respond to different kinds of work.",
        ],
      }}
      methodSection={{
        heading: "What the method addresses",
        paragraphs: [
          "The Off-Switch Method works at the level where the activation lives — not in the narrative about the anxiety, but in the body's stored response to specific memories, triggers, and patterns.",
          "A physical technique is applied to specific targets: a memory, a recurring trigger, a body sensation, an anticipatory concern. The activation on that target is worked down until it no longer registers. What held the anxiety in place is not the story. When the activation reduces, the body's response to that material changes.",
          "This is not insight-based work. It does not require understanding the source of the anxiety more clearly than you already do. It addresses a different layer — the one where the response is held, not where the explanation lives.",
          "It is relevant specifically where the understanding is already present and the response is still active.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote: "I found that after a couple of days the whole volcano of emotions just disappeared. I quickly returned to normal life. It was possible to get rid of panic attacks, fears and anxieties. In general, I look at life with great optimism and confidence.",
        attribution: "Irina Sennikova",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      ctas={{
        closing: "If this is familiar — understanding solid, response still active — the next step is understanding how the method works.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
  );
}
