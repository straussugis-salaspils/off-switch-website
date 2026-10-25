import type { Metadata } from "next";
import Link from "next/link";
import IssuePageLayout from "@/components/blocks/IssuePageLayout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Burnout When Rest Does Not Restore Capacity",
  description:
    "For burnout in which rest, time away or reduced pressure has not restored energy, motivation and functional capacity.",
  path: "/issues/burnout",
});

export default function Burnout() {
  return (
    <>
    <IssuePageLayout
      h1="Burnout When Rest Does Not Restore Capacity"
      intro={[
        "You rested. It didn't bring you back.",
        "Burnout is not only being tired. It is what happens when pressure has continued for long enough that rest no longer fully restores capacity. The system has been running under demand for too long, and the normal return to energy, motivation, and clarity has started to break down.",
        "Tiredness resolves with rest. This doesn't. What has accumulated here is not addressed by sleep, time off, or doing less. It requires a different kind of work.",
      ]}
      safetyNote="This page is not about medical exhaustion, major depression, emergency psychiatric risk, or a work situation that is still actively unsafe. Those require appropriate medical, psychological, organizational, or practical support. This page is about burnout patterns where the person has rested, reduced pressure, or stepped away, yet the internal load and reduced capacity continue."
      whatItLooksLike={[
        "Fatigue that is not explained by recent workload and does not resolve with adequate rest.",
        "Difficulty concentrating or making decisions. Not a cognitive problem. A load problem.",
        "Simple tasks feel heavier than they should. Things that used to require no thought now require effort.",
        "Work that was meaningful now feels flat, or produces nothing when you turn toward it.",
        "Looking functional from the outside for longer than you feel functional on the inside.",
        "Emotional blunting alongside moments of acute fragility. Numb underneath and thin-skinned at the surface. Tired and still wired at the same time.",
        "Patience shorter. Capacity smaller. Snapping at people who don't deserve it, for reasons that wouldn't have registered before.",
        "Time off that helped temporarily. Rest that looks like recovery from the outside but does not restore real capacity.",
        "Anxiety underneath the depletion. The depletion looks like numbness. Underneath it, the activation is often still high.",
        "Having taken real steps — time away, reduced workload, better sleep — with limited or temporary effect.",
      ]}
      mechanism={{
        heading: "Why rest is not enough",
        paragraphs: [
          "Each demanding period can add to what the previous one left behind. Eventually, even when the demands ease, you remain tense, depleted or unable to settle. Time away offers some relief without changing what you are still carrying. That is the pattern this work addresses.",
          "If the external pressure is still continuing, the conditions themselves may also need to change; the method does not replace necessary workplace, medical, or practical decisions.",
        ],
      }}
      methodSection={{
        heading: "What the Off-Switch Method addresses in burnout",
        paragraphs: [
          "The first phase works on the accumulated emotional load. You learn a physical technique and practise it daily. This is not another instruction to relax or try harder to feel better; it is work on the response that keeps you from settling, so that rest can become restorative again.",
          "Once that has happened, the second phase works on the specific material contributing to it — the sustained difficult periods, the experiences that built up rather than cleared. The method works through these until they no longer activate.",
        ],
      }}
      proof={{
        type: "testimonial",
        quote:
          "A senior academic dealing with simultaneous burnout, an unexpected divorce, and a terminally ill parent at home — on antidepressants and unable to function at work — worked through the full protocol across three months. Sleep restored. Functional capacity recovered. The ongoing family situation navigated from a stable baseline rather than from collapse.",
        attribution: "Case from 1:1 work",
        context: "anonymized",
        cta: { label: "Full case and documentation on the Evidence page", href: "/evidence" },
      }}
      proofLabel="Reported individual outcome"
      readingGuides={[
        { title: "Work, burnout and difficulty acting", description: "Browse the complete Library topic on overload, burnout, work patterns and blocked action.", href: "/library/work-burnout-action" },
        { title: "How to recover from burnout without rebuilding the same system", description: "Recovery is not complete if the same working system immediately recreates the same load.", href: "/articles/how-to-recover-from-burnout" },
        { title: "Why one holiday does not fix burnout", description: "Why temporary relief may not change the accumulated load or the structure producing it.", href: "/articles/why-a-holiday-does-not-fix-burnout" },
        { title: "Why you cannot stop working even when exhausted", description: "What can keep the work response running after energy and capacity have already fallen.", href: "/articles/why-you-cannot-stop-working-when-exhausted" },
      ]}
      ctas={{
        closing:
          "If you have stepped back but still cannot recover, the first conversation is a chance to look at what remains — and whether this work fits. You can also read the Method page for the daily practice and sequence involved.",
        primary: { label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" },
        secondary: { label: "How the method works", href: "/the-method" },
      }}
    />
    <section className="py-6 lg:py-8 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl border-t border-border pt-6">
          <p className="text-sm text-muted leading-relaxed">
            If you are still functioning but feel constantly loaded,{" "}
            <Link href="/issues/stress-and-overload" className="text-accent hover:text-accent-dim transition-colors">
              Stress and Overload
            </Link>{" "}
            may be more specific.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
