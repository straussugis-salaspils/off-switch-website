import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CaseSummary from "@/components/blocks/CaseSummary";

export const metadata: Metadata = {
  title: "Catastrophic Anxiety and Future Collapse After Stroke | Evidence",
  description:
    "An anonymized practitioner case. Catastrophic anticipation reduced substantially after stroke. The change held through a later layoff and heart surgery, both navigated without collapse.",
};

export default function AnxietyAfterStroke() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-deep-muted mb-4">
              <Link href="/evidence" className="hover:text-deep-text transition-colors">
                Evidence
              </Link>
              <span className="mx-2 text-deep-muted/40">·</span>
              <span>Case record</span>
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Catastrophic Anxiety and Future Collapse After Stroke
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              This case matters not because life became easier. What mattered was that the
              old collapse response did not return in situations where it had previously
              felt almost inevitable.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              An anonymized practitioner case in which catastrophic anticipation following
              a stroke remained active after medical recovery. The work addressed the
              internal future-collapse pattern, not the medical condition itself. The
              change held through later real-world events — a layoff and heart surgery —
              both navigated without collapse.
            </p>
            <p className="text-sm text-deep-muted/70 leading-relaxed max-w-2xl">
              Retrospective practitioner estimate. No formal tracker. The work did not
              treat the stroke, heart surgery, neurological recovery, or any medical
              condition. It addressed the internal catastrophic anticipation pattern that
              remained active after medical recovery. Anonymized practitioner record. Not
              a controlled study.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-10 lg:py-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border border-border p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p className="text-sm font-medium text-ink mb-3">Before</p>
              <p className="text-base text-ink-light leading-relaxed">
                Internally organised around a catastrophic future-collapse frame — a
                psychological state, not a medical prognosis. Catastrophic default in
                response to uncertainty and future events.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — at post-engagement follow-up</p>
              <p className="text-base text-ink-light leading-relaxed">
                Handled layoff and heart surgery without collapse. New work found.
                Previous catastrophic-anticipation pattern did not return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE SUMMARY */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-6">Case summary</p>
          <CaseSummary
            evidenceType="Retrospective practitioner estimate. Anonymized practitioner record. No formal tracker. The work addressed the internal catastrophic anticipation pattern, not the stroke, heart surgery, or any medical condition."
            startingPoint="Approximately 70/100 distress and threat activation, retrospective practitioner estimate."
            endPoint="Approximately 10–15/100 at close of main engagement and at post-pause follow-up."
            functionalOutcome="Handled layoff and heart surgery without collapse. New work found. Previous catastrophic-anticipation pattern did not return."
          />
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Summary</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Physically recovered from a stroke and back at work, the client was
                internally organised around a catastrophic anticipation of future collapse
                — a psychological frame, not a medical prognosis. The main engagement ran
                for approximately three to four months. The collapsed internal future frame
                shifted.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                After the main engagement closed, there was a three-month pause. During
                that pause, two significant events arrived: a layoff, and a diagnosis of
                a cardiac condition requiring surgery. Both were navigated calmly and
                stably. New work was found. The previous catastrophic-anticipation pattern
                did not return.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The credibility of this case rests not on the practitioner estimate but
                on what happened after the engagement closed. Two objectively difficult
                events arrived and neither produced the collapse that had previously been
                predictable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATION */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Context at intake</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Physically recovered from a stroke and back at work. Sole financial
                provider for a family with young children. Pre-stroke working pattern
                had involved sustained high pressure with accumulated stress in the months
                before the stroke occurred.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Presenting state at intake: very high anxiety, catastrophic default in any
                decision, anticipatory fear, irritability, difficulty sleeping. The medical
                reassurance that the stroke would not repeat had not altered the internal
                state. Prior therapeutic work had not resolved the underlying activation
                pattern.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The deeper pattern that emerged: internally living inside a catastrophic
                future-collapse frame — a psychological conviction, not a medical
                prognosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING INTERPRETATION */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Working interpretation</h2>
            <p className="text-base text-ink-light leading-relaxed">
              The working interpretation was that the stroke had not invented the
              underlying patterns — work pressure, anticipatory anxiety, a longstanding
              threat response — but had locked them into a lethal-feeling frame. The
              visible problem was post-stroke catastrophic anticipation, but the underlying
              pattern included accumulated load that predated the stroke. The future-collapse
              frame was a psychological state operating on top of an existing high-activation
              baseline.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE WORK ADDRESSED */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">What the work addressed</h2>
            <div className="space-y-7">
              <div>
                <p className="text-base font-medium text-ink mb-2">Reduction of catastrophic future anticipation</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The collapsed one-year frame was the central intervention. A workable
                  five-year frame was built first using a structured future process — with
                  anticipatory fear at each anticipated point worked through until it no
                  longer registered. The five-year frame stabilised, then a longer-range
                  frame was built and walked.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Reduction of historical activation load</p>
                <p className="text-base text-ink-light leading-relaxed">
                  A longstanding threat response to criticism — active well before the
                  stroke — was cleared through the historical chain of past instances. The
                  full autobiographical inventory was completed in approximately one month,
                  attributable to an unusually high volume of between-sessions practice.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Stability under real-world pressure</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The strongest test of the work was not inside the sessions. During the
                  post-engagement pause, two significant real-world events arrived. Both
                  were navigated stably. The client found new work. The previous
                  catastrophic-anticipation pattern did not return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTITIONER-ESTIMATED CHANGE */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Practitioner-estimated change</h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              No formal tracker was used in this case. The following are retrospective
              practitioner estimates based on intake notes, session records, and outcome
              review. They are direction-of-change indicators only — not a validated
              measurement.
            </p>
            <div className="mb-5">
              {[
                { point: "Intake", value: "approximately 70/100", note: "Distress and threat activation" },
                { point: "Close of engagement", value: "approximately 15/100", note: "" },
                { point: "Post-pause follow-up", value: "approximately 10–15/100", note: "After subsequent high-stress events" },
              ].map((row) => (
                <div key={row.point} className="border-b border-border-light py-3 flex flex-wrap gap-4 items-baseline">
                  <span className="text-xs uppercase tracking-widest text-muted-light w-44 shrink-0">{row.point}</span>
                  <span className="font-medium text-ink-light">{row.value}</span>
                  {row.note && <span className="text-sm text-muted">{row.note}</span>}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-light leading-relaxed italic">
              Retrospective practitioner estimate. Not a validated measurement. Not a
              clinical score. One client-reported recovery percentage noted early in the
              engagement is a self-description, not a measured instrument.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCTIONAL CHANGES */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Functional changes</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                During the main engagement: internal time-frame shifted from catastrophic
                collapse anticipation to a workable long-range frame. Catastrophic default
                in decision-making substantially reduced. Sleep improved.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                During the post-engagement pause: the subsequent real-world events were
                navigated without collapse, without depressive episode, and without return
                of the previous pattern. New work was found.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS CASE SUGGESTS */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">What this case suggests</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                This case suggests that internal catastrophic anticipation can remain
                active after the external medical danger has passed. Physical recovery
                and medical reassurance did not, on their own, alter the internal pattern.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                It also suggests that when that pattern is reduced, the person may
                navigate later real-world shocks — a layoff and heart surgery — without
                the same collapse response. Two objectively difficult events arrived
                during the post-engagement pause; neither produced the collapse that had
                previously been predictable.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                This is a single case. It does not prove a mechanism or a general effect.
                It records an outcome: the same person who arrived with a catastrophic
                future-collapse frame later navigated objectively difficult events stably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS AND HONESTY */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">Limits and honesty</h2>
            <div className="space-y-3">
              {[
                "Anonymized practitioner record. The client is not identified in any way.",
                "No formal tracker was used. The severity estimates are retrospective practitioner observations, not validated measurements. They should not be cited as clinical scores.",
                "This is not a medical claim about stroke, neurological recovery, heart surgery, or cardiac conditions. The work addressed emotional and anticipatory activation only.",
                "The medical conditions were treated medically. The subsequent events were navigated — they were not prevented.",
                "Single case. Results are not representative of all clients or presenting situations.",
                "Not a controlled study. There was no control group and no comparison condition.",
                "Not peer-reviewed.",
                "Not a substitute for medical or psychiatric care.",
                "No guarantee of similar outcomes. Results vary between individuals and contexts.",
              ].map((item, i) => (
                <div key={i} className="border-b border-border-light pb-3">
                  <p className="text-base text-ink-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="py-12 lg:py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button href="/evidence" variant="ghost" size="md">← Back to Evidence</Button>
            <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="md">Book a first conversation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
