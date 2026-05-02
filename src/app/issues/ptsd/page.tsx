import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";

export const metadata: Metadata = {
  title: "PTSD",
  description: "You know you are safe. The body doesn't agree. The gap between what you know and what the nervous system is still registering is not a belief problem.",
};

export default function PTSD() {
  return (
    <>
    <IssuePageLayout
      h1="PTSD"
      intro={[
        "You know you are safe. The body doesn't agree.",
        "You may know, logically, that the event is over. You may have talked about it, understood it, survived it, and rebuilt parts of life around it.",
        "But the body may still respond as if some part of the danger is present. Images, sensations, sounds, situations, sleep, closeness, conflict, or ordinary daily moments can activate a response that does not feel chosen.",
        "This is not a failure of insight or willpower. It is the gap between knowing that something is over and the nervous system no longer registering it as active.",
      ]}
      safetyNote="This page is about persistent trauma-linked activation. It is not emergency care, crisis support, or a replacement for medical or psychiatric treatment."
      whatItLooksLike={[
        "Intrusive material that surfaces without being chosen — memories, images, sensory fragments — arriving independently of intention.",
        "The body responding before the mind has time to evaluate the situation. Ordinary cues — tone of voice, smell, sound, physical position, facial expression, conflict, silence, sudden movement — can carry too much charge.",
        "Hypervigilance: a persistent state of alert that does not switch off in situations that are genuinely safe. The person can name what is happening. They cannot turn it down.",
        "Avoidance — of situations, places, sounds, conversations, or sensations that connect to the events. Sometimes deliberate; sometimes not noticed until the pattern becomes visible. What makes sense at first can slowly narrow life.",
        "Startle responses disproportionate to what triggered them.",
        "Sleep disruption: difficulty settling, night waking, disturbing material in dreams. Often not only from worry, but from the system not fully powering down.",
        "Emotional numbing alongside acute episodes. A sense of carrying something heavy, all the time.",
        "Shame or confusion about the response itself: “I know this is over, so why is my body still reacting?”",
        "The gap: knowing the events are over. Not feeling it.",
        "Prior treatment or explanation that helped to a degree. Specific activation that may still remain.",
      ]}
      mechanism={{
        heading: "Why the response continues",
        paragraphs: [
          "The nervous system does not respond to the calendar. It responds to what the present moment resembles.",
          "A sound, smell, tone, facial expression, body sensation, place, silence, pressure, or conflict can connect with the original material. When that connection happens, the body may react to the old danger as if it is current.",
          "Understanding what happened can reduce confusion. It can give language, meaning, and orientation. But if the activation is still attached to specific material, the body can continue to respond before thought has time to intervene.",
          "That is why people can be psychologically aware, articulate, and still unable to switch the response off.",
        ],
      }}
      methodSection={{
        heading: "What the method addresses",
        paragraphs: [
          "The Off-Switch Method works on the activation attached to specific traumatic material, not on persuading the person to think differently about what happened.",
          "The event does not need to be relived or described in full detail. The work identifies the specific target that still carries charge: an image, body sensation, moment, anticipation, sound, scene, or recurring response. A physical technique is then applied until the body's response to that material reduces.",
          "The aim is not to erase memory. It is to reduce the automatic activation attached to the memory or trigger, so the person can remember, encounter, or be reminded without the same level of involuntary nervous system response.",
          "Where medical, psychiatric, crisis, or emergency support is needed, that comes first. This work is relevant when the person is stable enough for structured process work and the remaining problem is persistent trauma-linked activation.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote: "The method was applied at scale to active war trauma in Ukraine in 2022 — approximately 7,000 participants, six cohort groups, and documented symptom reduction in completed cohorts. The full outcomes, data, and methodology are documented on the Evidence page.",
        attribution: "Ukraine Project 2022",
        cta: { label: "Full documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Documented field outcome"
      ctas={{
        closing: "The Evidence page carries the full Ukraine documentation. The Method page explains how the work is structured. If both are clear and you want to discuss whether this applies to your specific situation:",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "See the Evidence", href: "/evidence" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            If the main pattern is sudden body alarm,{" "}
            <Link href="/issues/panic-attacks" className="text-accent hover:text-accent-dim transition-colors">
              Panic Attacks
            </Link>{" "}
            may be more specific.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the main pattern is ongoing pressure and load,{" "}
            <Link href="/issues/stress-and-overload" className="text-accent hover:text-accent-dim transition-colors">
              Stress and Overload
            </Link>{" "}
            may be more relevant.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the issue is sleep disruption,{" "}
            <Link href="/issues/sleep" className="text-accent hover:text-accent-dim transition-colors">
              Sleep and Night Anxiety
            </Link>{" "}
            may be more relevant.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
