import type { Metadata } from "next";
import Link from "next/link";
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
              I teach you a physical technique in the first session. You learn to use
              it yourself, then practise between meetings. I guide what we work on and
              in what order; together, we check whether the reaction changes.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              The Method works directly on the nervous system, not through retelling
              your story. You do not need to know where the symptoms began or relive
              what happened. We follow progress through ratings and what changes in
              your life.
            </p>
          </div>
        </div>
      </section>

      {/* THE TECHNIQUE — explain the actual work before its framework */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              What you actually learn to do
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The main tool is a physical technique you apply to your own body. You
              place your hands in a specific position and make a slow bilateral movement
              while keeping a memory, body sensation, anxious thought or anticipated
              event in mind. I teach you how in Session 1. After that, you have the tool.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Before and after each cycle, you rate the intensity of the response from
              0 to 5. We are checking something specific: does the same memory or
              situation still produce the same physical reaction? When it no longer
              registers, work on that target ends. The memory remains; the response to
              it has changed.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Regular practice matters. Allow 30–60 minutes a day for independent
              practice. Working regularly with the technique allows faster progress
              than reaching for it only when something goes wrong. You do the practice;
              I guide the sequence and help check what still needs work.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              You can know exactly where a fear comes from and still feel it in your
              body. That does not make your understanding wrong.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              The point is not to become better at explaining the response. It is to
              meet the same situation without being carried away by it.
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
            First, reduce the accumulated load. Then work through the emotional history.
            Then build changes into daily life. Each phase must be substantially complete
            before the next begins; the order is part of how the Method works.
            The private programme includes 12 sessions over three to four months.
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
                <p className="text-xs uppercase tracking-widest text-muted-light mb-6">Reduce the immediate load</p>
                <div className="space-y-3 flex-1">
                  {[
                    "Chronic stress accumulated over years",
                    "Acute emotional overload",
                    "Future anxiety and physical tension stored in the body",
                    "Learn the physical technique in Session 1",
                  ].map((l) => (
                    <p key={l} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-0.5">—</span>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-accent italic">
                    Before moving on: the system is stable enough for deep work
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
                    "More than the problem that first brought you here",
                    "Fear of the future, or difficulty seeing one",
                    "Daily practice through the memory inventory",
                  ].map((l) => (
                    <p key={l} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-0.5">—</span>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-accent italic">
                    Before moving on: emotional history no longer drives the reaction
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Memories we have worked through stop producing their previous physical response.
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
                    "Identify and work on the patterns that remain",
                    "Change the habits and arrangements that keep problems going",
                    "Meet less often as you become more independent",
                    "Work towards continuing without ongoing practitioner support",
                  ].map((l) => (
                    <p key={l} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-0.5">—</span>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-accent italic">
                    The aim: the pattern no longer drives your life.
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    Changes in behavior and daily life can hold without ongoing practitioner involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Completion criterion */}
          <div className="mt-12 mb-12 border-t-2 border-accent pt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              How we know when to finish
            </p>
            <p className="text-sm text-ink-light leading-relaxed mb-3">
              We measure your symptom score and trigger response from the first
              session. Progress means the same trigger hits with less force,
              symptoms reduce, function returns, and you need less practitioner
              support over time.
            </p>
            <p className="text-sm text-ink-light leading-relaxed mb-3">
              The client&rsquo;s symptom score has dropped from a typical starting range
              of 50–70 to approximately 10 or below (measured on a structured 105-point
              scale). The client reports the pattern no longer drives them. Continued
              practitioner involvement is no longer necessary.
            </p>
            <p className="text-sm text-ink-light leading-relaxed mb-3">
              If more work is needed after the 12 sessions, you continue independently or
              under a separate arrangement.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The 105-point scale — 21 symptom items rated 0–5 — measures overall load at
              intake and closure. The 0–5 scale used within sessions tracks activation on
              individual memories, triggers or situations. We use these ratings to follow
              change during the work. They are not diagnostic tests.
            </p>
          </div>

          <details className="max-w-3xl">
            <summary className="cursor-pointer font-serif text-2xl text-ink py-4">
              What happens in each phase
            </summary>
            <p className="text-base text-ink-light leading-relaxed mt-4 mb-8">
              Early meetings may be closer together; later ones are spaced according to
              progress and your ability to work independently between them.
            </p>
            <div className="space-y-12">
            {/* Phase 1 */}
            <div className="max-w-3xl pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Phase 1
              </p>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">Regulate</h3>
              <p className="text-base text-ink-light leading-relaxed mb-4">
                In Sessions 1–3, you establish daily practice, starting with
                lower-intensity material. The first task is to reduce the accumulated
                load enough for you to function and approach deeper material without
                becoming destabilized.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                Alongside the physical technique, this phase introduces two support
                practices: a structured audio process for reducing chronic stress,
                used for 30 minutes daily, and a brief deliberate laughter practice
                that counters the biochemical effects of prolonged stress.
              </p>
              <p className="text-sm text-muted leading-relaxed italic">
                We do not move to heavy material before the system is stable enough.
                Starting there can destabilize rather than resolve the problem.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="max-w-3xl pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Phase 2
              </p>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">Repattern</h3>
              <p className="text-base text-ink-light leading-relaxed mb-4">
                In Sessions 4–6, you begin a structured memory inventory across all
                areas of your life. Sessions 7–9 continue the deeper work on past
                events, recurring triggers and feared future events.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                Thought patterns also become clearer as the emotional load comes down.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                This is two months of daily homework: using the technique to work
                through the inventory until the memories no longer provoke the
                response. In meetings, we check intensity, adjust the work and keep
                the sequence safe and workable.
              </p>
              <p className="text-sm text-muted leading-relaxed italic">
                Building a future on emotional history that still drives your reactions
                leaves it unstable. That is why this work comes first.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="max-w-3xl pt-10 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Phase 3
              </p>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">Integrate</h3>
              <p className="text-base text-ink-light leading-relaxed mb-4">
                In Sessions 10–12, the focus becomes more precise. Emotional load has
                usually fallen substantially; we work on the habits, assumptions and
                practical arrangements that remain.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                A calmer response does not, by itself, fix an impossible workload or
                establish a boundary. This phase addresses behavior that persists,
                unclear roles, overloaded systems, and relationships without clear
                boundaries — including the places where you know what needs to change
                but still do not change it.
              </p>
            </div>
            </div>
          </details>

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

      {/* THE TARGET — CHANGE THE RESPONSE, NOT THE MEMORY */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              What changes
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6 tracking-display">
              You do not have to forget what happened
            </h2>
            <div className="space-y-4 mb-12">
              <p className="text-base text-ink-light leading-relaxed">
                We work on the emotional charge attached to a memory, trigger or
                future fear, directly reducing it until it no longer sets off the
                response. The aim is not to make you forget what happened.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Understanding where it began does not change the response attached
                to the memory. Managing the response at the surface does not reduce
                what is generating it. Reducing acute symptoms does not clear the
                charge that keeps producing them.
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
                The private 1:1 process is not a two-minute cure. You learn to apply
                this work repeatedly, safely, and independently.
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
                  attribution="Private 1:1 client"
                />
              </div>
              <p className="text-xs text-muted-light leading-relaxed italic">
                Individual reports are not guarantees of similar results.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-6">
                The Method was also delivered in a free online program in Ukraine in
                2022, with approximately 7,000 people enrolled during active conflict.
                Results from measured completers, and the limits of that field record,
                are described in the{" "}
                <Link href="/evidence/ukraine-2022" className="text-accent underline underline-offset-2">
                  Ukraine report
                </Link>.
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
              How this differs from other approaches
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Many people arrive here after doing reasonable things: therapy, CBT,
                coaching, breathing exercises, journaling, discipline, or medication.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Those approaches have different purposes. The comparison below
                shows how their focus differs from the work described here.
              </p>
            </div>
          </div>

          {/* The timeline stays visible without repeating the programme facts */}
          <div className="max-w-3xl border border-border bg-white p-6 lg:p-8 mb-10">
            <h3 className="font-serif text-xl lg:text-2xl font-light text-ink leading-snug mb-3">
              Typical timeline
            </h3>
            <div className="border-t border-border-light pt-5">
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
                different: "A defined period of work with progress tracked, daily practice between sessions, and no requirement to retell events in detail.",
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
                different: "Works on the emotional response behind the behavior, with daily practice between sessions and a defined endpoint.",
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

          {/* Comparison scope */}
          <div className="max-w-3xl mt-10 space-y-4">
            <p className="text-sm text-muted-light leading-relaxed italic pt-2">
              This comparison is for orientation only. The Off-Switch Method is
              not a substitute for medical, psychiatric, emergency, or crisis
              care. Medication decisions should always be made with a qualified
              prescriber.
            </p>
          </div>
        </div>
      </section>


      {/* SCOPE */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
              Who the method is for and what it does not replace
            </h2>
            <div className="space-y-5">
              {[
                {
                  label: "This is not an in-depth talking approach.",
                  body: "If what you need is to talk through your experience in depth, a different practitioner would be a better fit.",
                },
                {
                  label: "Not a substitute for psychiatric medication where medication is medically necessary.",
                  body: "Where clinical medication is part of a client's treatment, this works alongside it.",
                },
                {
                  label: "The daily practice is essential.",
                  body: "The work stalls without it. Before starting, you need to be willing to make room for the practice between meetings.",
                },
                {
                  label: "Not crisis management.",
                  body: "Acute stabilization in a crisis is possible. Structural transformation requires the full method, sustained.",
                },
                {
                  label: "Not coaching.",
                  body: "This is not built around performance targets or accountability. We first work on the emotional response that keeps the problem going, then on the behavior and practical changes that are needed.",
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
        heading="How to do this work"
        body="Private 1:1 work can begin now. The next group is planned for January 2027. Both use the Method: in private work, I adapt the sequence to your situation; in the group, you follow a shared sequence. Compare the meetings, daily practice and cost before choosing."
        primary={{ label: "Compare formats", href: "/formats" }}
        secondary={{ label: "See the evidence", href: "/evidence" }}
      />
    </>
  );
}

