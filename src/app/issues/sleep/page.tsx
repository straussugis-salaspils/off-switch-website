import type { Metadata } from "next";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";

export const metadata: Metadata = {
  title: "Sleep and Night Anxiety",
  description: "You know what 3am is like. Not tired-3am. Activated-3am.",
};

export default function Sleep() {
  return (
    <IssuePageLayout
      h1="Sleep and Night Anxiety"
      intro={[
        "You know what 3am is like.",
        "Not tired-3am. Activated-3am. The body exhausted, the mind already running something. A conversation that didn't finish right. Something coming. Nothing specific — just the background that was held at bay all day, now with nowhere left to go.",
        "Night removes that. The structure, the tasks, the forward motion that was occupying the activation. When they stop, what was underneath comes forward.",
        "Or the other version: falling asleep isn't the problem. Waking at 3am already activated is. Lying there, waiting for the alarm, unable to get back. The night didn't start it. It just stopped covering it.",
      ]}
      safetyNote="If sleep disruption is new, severe, medically unexplained, or connected to medication, substances, breathing problems, pain, hormonal changes, or psychiatric instability, those causes should be assessed first. This page is about recurring night anxiety and body-level activation that continues after standard explanations and sleep-habit fixes have not resolved it."
      whatItLooksLike={[
        "The mind starts as soon as you lie down. Not because there's something to solve — because the activation that was occupied all day is now free.",
        "The body won't settle: jaw, chest, stomach, shoulders still holding the day when they should be releasing it.",
        "Waking between 2 and 4am already in a state. Not drifting into wakefulness — arriving there with the anxiety already running, already in motion before you've decided to be awake.",
        "Bedtime becoming something to dread. Not fear exactly. The body already knowing what's coming and tightening before you get there.",
        "The anxiety that compounds itself: knowing tonight may be hard, and the knowing making it more likely.",
        "Waking emotionally drained after a night of alarm, rumination, or repeated activation. Dreams that continue the day rather than interrupt it.",
        "Having tried the obvious approaches — consistent schedule, no screens, less caffeine — without lasting results. Not because the advice is wrong. Because the problem is not the habits.",
      ]}
      mechanism={{
        heading: "Why it continues even when habits improve",
        paragraphs: [
          "The day gives the activation something to compete with. Night doesn't.",
          "During waking hours, the underlying load is present but not the loudest thing in the room. There's structure, tasks, forward motion — the activation has somewhere else to go. Night removes that. What the day was covering becomes the only thing in the room.",
          "The mind returns to the same material — the unfinished conversation, the concern, the anticipatory fear — not because the thinking is excessive, but because what's underneath has not resolved. The thoughts are not producing the disrupted sleep. The activation is producing the thoughts and the disrupted sleep both.",
          "When the standard approaches don't work, it is usually because the target is wrong. The problem is not the sleep. It is what the sleep is revealing.",
        ],
      }}
      methodSection={{
        heading: "How the method relates to this",
        paragraphs: [
          "The first phase of the method reduces what the body is still carrying into the night — the anticipatory anxiety that begins as the day ends, the physical tension that remains when everything stops.",
          "The second phase addresses the specific material the mind keeps returning to when nothing else is competing for its attention: the unresolved concerns, the persistent memories, the situations still active underneath. When that material no longer activates, the mind no longer needs to return to it at 3am.",
          "Sleep often improves as the underlying activation reduces, but the method does not treat sleep as an isolated problem. What was disrupting it changes; sleep may then follow.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote: "My sleep has normalized. I am in a stable calm state that does not depend on external circumstances.",
        attribution: "Elena Kopychenko",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      ctas={{
        closing: "If sleep is the presenting problem and the standard fixes haven't moved it, the mechanism explanation on The Method page is the starting point.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
  );
}
