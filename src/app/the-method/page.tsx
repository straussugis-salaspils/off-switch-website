import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";
import CTABand from "@/components/blocks/CTABand";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "A structured three-phase intervention for anxiety, trauma, and persistent emotional patterns. Field-tested at scale in active conflict conditions.",
};

const issueLinks = [
  { label: "Anxiety", href: "/issues/anxiety" },
  { label: "PTSD", href: "/issues/ptsd" },
  { label: "Burnout", href: "/issues/burnout" },
  { label: "Panic attacks", href: "/issues/panic-attacks" },
  { label: "Recurring triggers", href: "/issues/emotional-triggers" },
  { label: "Trauma and past events", href: "/issues/trauma-and-past-events" },
  { label: "Sleep disruption", href: "/issues/sleep" },
  { label: "When emotions take over", href: "/issues/when-emotions-take-over" },
  { label: "Stress and overload", href: "/issues/stress-and-overload" },
  { label: "Overthinking", href: "/issues/overthinking" },
];

export default function TheMethod() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              The Off-Switch Method
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              A structured three-phase intervention for anxiety, trauma, and persistent
              emotional patterns. Field-tested at 7,000-participant scale in active conflict conditions.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              The method works directly on the nervous system — not on the narrative. The
              client learns the primary tool in the first session and applies it
              independently between sessions. The practitioner designs the sequence. The
              work happens between sessions.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              The method does not require the client to tell their story, to understand the
              origin of their symptoms, or to relive what happened. The progress is
              measurable.
            </p>
          </div>
        </div>
      </section>

      {/* CORE DISTINCTION */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Why insight isn&rsquo;t always enough
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              There is a level below the story where emotional activation remains active —
              in the body, attached to specific memories, anticipated situations, and sensory
              triggers. That level does not respond to understanding alone.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Someone can know exactly where their anxiety comes from, have spent years
              working on it therapeutically, and still feel the same physical response when
              the subject surfaces. The understanding is real. The nervous system state
              hasn&rsquo;t changed.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              The Off-Switch Method works at the physiological level directly. The client
              focuses on a specific target — a memory, a body sensation, an anxious thought
              — and applies the primary technique while holding that target in attention. The
              activation attached to the target drops on a 0–5 scale. When it no longer
              registers, work on that target ends. The memory remains. The activation does
              not.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              This is not a better version of insight-based work. It addresses a different
              layer.
            </p>
            <TestimonialCard
              quote="Now it is possible to remove my negative anchors more quickly, without retraumatization — and not spend endless months working with a psychotherapist on a single episode."
              attribution="Irina Matvienko"
              context="Ukraine"
            />
          </div>
        </div>
      </section>

      {/* THREE PHASES */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            Structure
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-4 tracking-display">
            The three phases
          </h2>
          <p className="text-base text-ink-light leading-relaxed max-w-2xl mb-10">
            The method moves through three phases in sequence. Each phase must be
            substantially complete before the next begins. The sequence is not optional —
            it is the mechanism.
          </p>

          {/* Phase flow diagram */}
          <div className="max-w-5xl mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-0">
              {/* Phase 01 */}
              <div className="border-2 border-border p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-xs uppercase tracking-widest text-accent">Phase 01</p>
                  <p className="text-xs text-muted-light">Sessions 1–3</p>
                </div>
                <h3 className="font-serif text-3xl font-light text-ink mb-3">Regulate</h3>
                <p className="text-xs uppercase tracking-widest text-muted-light mb-6">Immediate activation reduction</p>
                <div className="space-y-3 flex-1">
                  {[
                    "Chronic stress accumulated over years",
                    "Acute emotional overload",
                    "Future anxiety and body tension",
                    "Client learns primary tool in Session 1",
                  ].map((l) => (
                    <p key={l} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-0.5">—</span>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-accent italic">
                    Gate: system stable enough for deep work
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Sleep typically begins to shift within the first one to two weeks of daily practice.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden lg:flex flex-col items-center justify-center w-10 shrink-0">
                <div className="w-full h-px bg-accent" />
                <span className="text-accent text-xs mt-1">→</span>
              </div>
              <div className="lg:hidden flex items-center justify-center py-3">
                <div className="h-8 w-px bg-border" />
              </div>

              {/* Phase 02 */}
              <div className="border-2 border-border p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-xs uppercase tracking-widest text-accent">Phase 02</p>
                  <p className="text-xs text-muted-light">Sessions 4–9</p>
                </div>
                <h3 className="font-serif text-3xl font-light text-ink mb-3">Repattern</h3>
                <p className="text-xs uppercase tracking-widest text-muted-light mb-6">Deep pattern and memory work</p>
                <div className="space-y-3 flex-1">
                  {[
                    "Full emotional history — all life domains",
                    "Not only the presenting complaint",
                    "Future anxiety and collapsed time horizon",
                    "Daily practice — client does the clearing",
                  ].map((l) => (
                    <p key={l} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-0.5">—</span>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-accent italic">
                    Gate: emotional history no longer drives the reaction
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Specific past material that has been worked stops generating its prior physical response.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden lg:flex flex-col items-center justify-center w-10 shrink-0">
                <div className="w-full h-px bg-accent" />
                <span className="text-accent text-xs mt-1">→</span>
              </div>
              <div className="lg:hidden flex items-center justify-center py-3">
                <div className="h-8 w-px bg-border" />
              </div>

              {/* Phase 03 */}
              <div className="border-2 border-border p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-xs uppercase tracking-widest text-accent">Phase 03</p>
                  <p className="text-xs text-muted-light">Sessions 10–12</p>
                </div>
                <h3 className="font-serif text-3xl font-light text-ink mb-3">Integrate</h3>
                <p className="text-xs uppercase tracking-widest text-muted-light mb-6">Integration into life and work</p>
                <div className="space-y-3 flex-1">
                  {[
                    "Remaining patterns become visible and addressable",
                    "Life architecture and structural habits are refined",
                    "Sessions become less frequent as the client becomes self-directed",
                    "Practitioner exits at completion",
                  ].map((l) => (
                    <p key={l} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-0.5">—</span>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-accent italic">
                    Endpoint: The pattern no longer drives the person.
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Behavioral and structural changes can hold without ongoing practitioner involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Completion criterion */}
          <div className="mt-12 mb-12 border-t-2 border-accent pt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Completion criterion
            </p>
            <p className="text-sm text-ink-light leading-relaxed mb-3">
              The client&rsquo;s symptom score has dropped from a typical starting range
              of 50–70 to approximately 10 or below (measured on a structured 105-point
              scale). The client reports the pattern no longer drives them. Continued
              practitioner involvement is no longer necessary.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The 105-point scale — 21 symptom items rated 0–5 — measures overall load at
              intake and closure. The 0–5 scale used within sessions tracks activation on
              individual targets. Both are operational readings, not diagnostic instruments.
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="max-w-3xl pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Phase 1
              </p>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">Regulate</h3>
              <p className="text-base text-ink-light leading-relaxed mb-4">
                Reduce the accumulated emotional load enough that the client can function
                and access the next layer without destabilizing.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                This phase addresses: chronic stress built up over years, acute emotional
                overload, future anxiety, physical tension stored in the body.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The primary tool is introduced in Session 1 and immediately owned by the
                client. Two support tools are added in this phase: a structured audio
                process for stripping systemic chronic stress (used 30 minutes daily), and
                a brief deliberate laughter practice that counters the biochemical effects
                of prolonged stress.
              </p>
              <p className="text-sm text-muted leading-relaxed italic">
                Why this must come first: Approaching heavy material before the system is
                regulated destabilizes rather than resolves. This is a sequencing
                requirement.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="max-w-3xl pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Phase 2
              </p>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">Repattern</h3>
              <p className="text-base text-ink-light leading-relaxed mb-4">
                Clear the full emotional history and rebuild the internal view of the
                future.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                This phase addresses: unprocessed memories across all life domains, not
                only the presenting complaint; future anxiety and collapsed or fear-laden
                views of what is ahead; patterns of thought that were masked by emotional
                activation and are now visible.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The main workload here is two months of daily homework — working through a
                structured inventory of all life domains using the primary tool until each
                no longer activates. Sessions calibrate the process; the client does the
                work.
              </p>
              <p className="text-sm text-muted leading-relaxed italic">
                Why past must precede future: Future structure built on uncleared emotional
                history is unstable. The future work holds because the clearing comes first.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="max-w-3xl pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Phase 3
              </p>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">Integrate</h3>
              <p className="text-base text-ink-light leading-relaxed mb-4">
                Make the change hold without ongoing practitioner involvement.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                This phase addresses: behavioral patterns that persist after the emotional
                clearing; situations that generate structural stress — role confusion,
                overloaded systems, relationships without clear boundaries; situations where
                the person knows what needs to change and still doesn&rsquo;t change it.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Sessions at this stage are infrequent. The client is self-directed. The
                practitioner exits.
              </p>
            </div>
          </div>

          {/* Issue routing */}
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-muted mb-4">
              See how the method applies to a specific pattern:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {issueLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-accent hover:text-accent-dim transition-colors underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-16 lg:py-20 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-accent-dim mb-6">
            What this is not — and what it targets instead
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-deep-border max-w-5xl">
            {[
              {
                label: "Not only insight",
                body: "Understanding the origin does not change the activation attached to the memory.",
              },
              {
                label: "Not only coping tools",
                body: "Managing the response at the surface does not reduce what is generating it.",
              },
              {
                label: "Not only symptom management",
                body: "Reducing acute symptoms does not clear the underlying charge that keeps producing them.",
              },
              {
                label: "Works on the charge itself",
                body: "The activation attached to specific memories, triggers, and anticipated events — directly reduced until it no longer fires.",
                highlight: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-7 ${item.highlight ? "bg-deep-surface border-t-2 border-accent" : "bg-deep"}`}
              >
                <p className={`text-base font-medium mb-3 ${item.highlight ? "text-accent-dim" : "text-deep-text"}`}>
                  {item.label}
                </p>
                <p className="text-sm text-deep-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT MEMORY ERASURE — CHARGE REDUCTION */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Mechanism
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6 tracking-display">
              Not memory erasure. Charge reduction.
            </h2>
            <div className="space-y-4 mb-12">
              <p className="text-base text-ink-light leading-relaxed">
                The Off-Switch Method does not try to make people forget what
                happened.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                It works on something more practical: the emotional charge
                attached to a memory, trigger, or future fear.
              </p>
              <p className="text-base text-ink leading-relaxed">
                When that charge drops, the memory may still be there — but it
                no longer hits the body with the same force.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Some memories take years to explain. Once the method is learned,
                the charge behind a specific target can sometimes shift in
                minutes.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The private process is not a two-minute cure. It is a structured
                process that teaches the person how to apply this work
                repeatedly, safely, and independently.
              </p>
            </div>

            <div className="border-t border-border pt-10">
              <p className="text-xs uppercase tracking-widest text-accent mb-6">
                Client reports
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <TestimonialCard
                  quote="After losing my mom, I was triggered and ran out crying. After 25 minutes with Ugis, the torment stopped. I still miss her, of course, but those negative feelings no longer take over. Once those are out of the way, we see so much more beauty."
                  attribution="Michelle Rodeback"
                />
                <TestimonialCard
                  quote="I had moved on, married, had children, and forgiven what happened, but there was still residue from a traumatic experience in my twenties. The work was not painful. It felt like something shifted in my mind and emotions. It was not erased — it simply stopped carrying the same charge."
                  attribution="Private client"
                />
              </div>
              <p className="text-xs text-muted-light leading-relaxed italic">
                Individual reports are not guarantees of similar results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN UNDERSTANDING IS NOT ENOUGH — comparison */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Comparison
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6 tracking-display">
              When understanding is not enough
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Many people arrive here after doing reasonable things: therapy, CBT,
                coaching, breathing exercises, journaling, discipline, or medication.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                They may already understand the pattern. They may know the trigger.
                They may even know where it came from.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                But when the trigger appears, the body still reacts.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The Off-Switch Method starts from a different question:
              </p>
              <p className="text-base text-ink leading-relaxed">
                Can the reaction itself be reduced until it no longer drives the person?
              </p>
            </div>
          </div>

          {/* Off-Switch Method callout — pulled out of the table */}
          <div className="max-w-3xl border border-border bg-white p-6 lg:p-8 mb-10">
            <h3 className="font-serif text-xl lg:text-2xl font-light text-ink leading-snug mb-3">
              The Off-Switch Method in one scan
            </h3>
            <p className="text-base font-medium text-ink leading-snug mb-6">
              Works directly on the reaction pattern itself.
            </p>

            {/* Attribute strip — five inline label/value lines */}
            <div className="space-y-2.5 mb-6 text-sm">
              <p className="leading-relaxed">
                <span className="text-muted">Target —</span>{" "}
                <span className="text-ink-light">the reaction pattern, not the explanation.</span>
              </p>
              <p className="leading-relaxed">
                <span className="text-muted">Who does the work —</span>{" "}
                <span className="text-ink-light">client, daily, between sessions, after the technique is taught in Session 1.</span>
              </p>
              <p className="leading-relaxed">
                <span className="text-muted">Arc —</span>{" "}
                <span className="text-ink-light">usually 12 sessions over 3–4 months.</span>
              </p>
              <p className="leading-relaxed">
                <span className="text-muted">Tracking —</span>{" "}
                <span className="text-ink-light">symptom score and trigger response measured from the first session.</span>
              </p>
              <p className="leading-relaxed">
                <span className="text-muted">Narration —</span>{" "}
                <span className="text-ink-light">detailed retelling of events is not required; the work targets the activation, not the content.</span>
              </p>
            </div>

            {/* Typical timeline */}
            <div className="border-t border-border-light pt-5">
              <p className="text-xs uppercase tracking-widest text-muted-light mb-4">
                Typical timeline
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-4">
                <li>
                  <p className="text-xs text-accent mb-1">Session 1</p>
                  <p className="text-sm text-ink-light leading-snug">First observable shift</p>
                </li>
                <li>
                  <p className="text-xs text-accent mb-1">3–4 weeks</p>
                  <p className="text-sm text-ink-light leading-snug">Significant reduction</p>
                </li>
                <li>
                  <p className="text-xs text-accent mb-1">7–8 weeks</p>
                  <p className="text-sm text-ink-light leading-snug">Results sustained</p>
                </li>
                <li>
                  <p className="text-xs text-accent mb-1">10–16 weeks</p>
                  <p className="text-sm text-ink-light leading-snug">Pattern no longer drives the person</p>
                </li>
              </ol>
            </div>
          </div>

          <h3 className="font-serif text-xl lg:text-2xl font-light text-ink leading-snug mb-6">
            How familiar approaches usually differ
          </h3>

          {/* Approach cards — responsive 2-col grid, replaces the old table + mobile cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                approach: "CBT",
                fit: "Thinking patterns are feeding anxiety or avoidance. Works on thoughts, beliefs, and habits.",
                different: "Works on the activation underneath the thought, with daily self-applied practice between sessions.",
              },
              {
                approach: "Talk therapy",
                fit: "You need to talk through experience and understand yourself better. Works on feelings, life story, relationships, and meaning.",
                different: "A finite, tracked arc — usually 12 sessions over 3–4 months — with daily self-applied work between sessions and no requirement to retell the events in detail.",
              },
              {
                approach: "EMDR",
                fit: "Specific memories still feel emotionally active. Works on disturbing memories.",
                different: "Covers a broader sequence — current activation, past charge, future fear, repeated triggers — with daily client-led practice and no requirement for detailed recounting of the original events.",
              },
              {
                approach: "Somatic therapy",
                fit: "The body feels stuck in stress, shutdown, or overwhelm. Works on body stress, tension, and regulation.",
                different: "Uses the body as an entry point and tracks whether the original trigger, symptoms, and functional problem actually reduce.",
              },
              {
                approach: "Medication",
                fit: "Symptoms are strong enough to need medical support. Works on symptoms such as anxiety, mood, panic, or sleep.",
                different: "Not a substitute for medical care. Works on the reaction pattern itself and on building self-regulation capacity.",
              },
              {
                approach: "Coaching",
                fit: "You need clarity, execution, or accountability. Works on goals, behavior, decisions, and performance.",
                different: "Addresses the emotional activation underneath the behavior, on a finite arc, with the client doing the daily clearing between sessions.",
              },
            ].map((row) => (
              <div
                key={row.approach}
                className="group flex flex-col border border-border hover:border-accent transition-colors duration-200 bg-white"
              >
                <div className="h-0.5 bg-transparent group-hover:bg-accent transition-colors duration-200" />
                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl lg:text-2xl font-light text-ink leading-snug mb-5">
                    {row.approach}
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">
                        When it tends to fit
                      </p>
                      <p className="text-sm text-muted leading-relaxed">{row.fit}</p>
                    </div>
                    <div className="border-t border-border-light pt-5">
                      <p className="text-[10px] uppercase tracking-widest text-accent mb-1.5">
                        Where the Off-Switch Method is different
                      </p>
                      <p className="text-sm text-ink-light leading-relaxed">{row.different}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* After-table outcome copy + safety note + CTA bridge */}
          <div className="max-w-3xl mt-10 space-y-4">
            <p className="text-base text-ink-light leading-relaxed">
              In this method, progress is not defined by whether the person can
              explain the problem better.
            </p>
            <p className="text-base text-ink leading-relaxed">
              Progress means the same trigger hits with less force, symptoms
              reduce, function returns, and the person needs less practitioner
              support over time.
            </p>
            <p className="text-sm text-muted-light leading-relaxed italic pt-2">
              This comparison is for orientation only. The Off-Switch Method is
              not a substitute for medical, psychiatric, emergency, or crisis
              care. Medication decisions should always be made with a qualified
              prescriber.
            </p>
            <p className="text-base text-ink-light leading-relaxed pt-4">
              If the issue is not a lack of insight, but a reaction pattern that
              keeps returning, the next step is to assess whether this method is
              a fit.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY TOOL */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              The primary tool
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The method&rsquo;s main instrument is a physical technique the client applies
              to their own body. Learned in Session 1. From that point, it belongs to the
              client.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The technique involves placing the hands on a specific location on the body
              and performing a slow bilateral motion while holding a target in attention.
              The target can be a memory, a body sensation, an anxious thought, or an
              anticipated event.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              What the client observes: the activation on the target goes down. The body
              releases. When the memory is accessed again, the response is not there.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The client rates intensity before and after each cycle using a 0–5 scale.
              This is an operational test — a measurable reading, not a general sense of
              feeling better.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Progress depends on regular practice. A client who works with it 15–30
              minutes daily progresses faster than one who uses it only reactively. The
              practitioner designs the sequence. The client does the clearing. This is how
              the method is designed to work.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              On a 0–5 intensity scale, what is being tested operationally is whether
              the same target still produces the same body response.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT STRUCTURE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              What a full engagement looks like
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              A standard private engagement is usually structured around 12 sessions
              over 3–4 months. Early sessions may be closer together; later sessions are
              spaced according to phase, progress, and the client&rsquo;s ability to
              work independently between sessions.
            </p>
            <div className="space-y-5">
              {[
                {
                  sessions: "Sessions 1–3",
                  desc: "Stabilization. The primary tool is introduced and owned by the client. Work moves from lower-intensity material to heavier emotional targets in the correct sequence. Daily practice is established.",
                },
                {
                  sessions: "Sessions 4–6",
                  desc: "The full life memory inventory is introduced. A structured autobiographical clearing process begins as daily homework, with sessions used to calibrate the process, check intensity, and keep the sequence safe and workable.",
                },
                {
                  sessions: "Sessions 7–9",
                  desc: "Deeper pattern work. The client continues clearing emotional charge across past events, recurring triggers, future fears, and collapsed timelines. Future work and anticipated events are addressed as needed.",
                },
                {
                  sessions: "Sessions 10–12",
                  desc: "Precision work on remaining patterns, cognitive frames, and life architecture. By this stage, emotional load has usually reduced substantially. What remains is mostly behavioral, structural, and integration work.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-sm text-muted shrink-0 w-28">{item.sessions}</span>
                  <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
              Scope
            </h2>
            <div className="space-y-5">
              {[
                {
                  label: "Not a narrative-processing approach.",
                  body: "Clients who need to work through their experience in depth verbally are better served by a different practitioner.",
                },
                {
                  label: "Not a substitute for psychiatric medication where medication is medically necessary.",
                  body: "Where clinical medication is part of a client's treatment, this works alongside it.",
                },
                {
                  label: "Not viable without daily practice between sessions.",
                  body: "The method stalls without it. Clients who are not prepared to do the daily work are not a match for this engagement.",
                },
                {
                  label: "Not crisis management.",
                  body: "Acute stabilization in a crisis is possible. Structural transformation requires the full method, sustained.",
                },
                {
                  label: "Not coaching.",
                  body: "There is no performance framework or accountability system at the center. The work is clearing what maintains the problem — before behavioral architecture is worth building.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-border-light pb-5">
                  <p className="text-base font-medium text-ink mb-1">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        dark
        primary={{ label: "See the Evidence", href: "/evidence" }}
        secondary={{ label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" }}
      />
    </>
  );
}
