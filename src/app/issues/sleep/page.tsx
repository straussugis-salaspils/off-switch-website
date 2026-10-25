import type { Metadata } from "next";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Sleep Anxiety and Waking Anxious at Night",
  description: "For recurring sleep anxiety, an activated mind at bedtime, or waking during the night with the response already running.",
  path: "/issues/sleep",
});

export default function Sleep() {
  return (
    <IssuePageLayout
      h1="Sleep Anxiety and Waking Anxious at Night"
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
          "The day gives the tension something to compete with. Night doesn't. With the tasks and distractions gone, the unfinished conversation or fear about tomorrow has your full attention.",
          "In this pattern, the same unresolved response drives both the thoughts and the difficulty sleeping. A better bedtime routine does not, by itself, change the response to that conversation or feared event. That is what the Method works on.",
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
      readingGuides={[
        { title: "Repetitive thoughts, sleep and low mood", description: "Browse the complete Library topic on nighttime activation, repetitive thought and difficulty switching off.", href: "/library/thoughts-sleep-low-mood" },
        { title: "Why your mind replays the day at night", description: "Why the day can continue mentally after the external demands have ended.", href: "/articles/why-your-mind-replays-the-day-at-night" },
        { title: "Why you cannot relax even when there is time", description: "How a system can remain active despite exhaustion, quiet and enough time to rest.", href: "/articles/why-you-cannot-relax" },
      ]}
      ctas={{
        closing: "If your evenings or nights keep bringing back the same anxiety, we can look at whether this work is relevant to it. Read what the practice involves, or book a first conversation about your situation.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
  );
}
