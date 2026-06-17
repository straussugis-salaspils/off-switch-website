import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CaseSummary from "@/components/blocks/CaseSummary";

export const metadata: Metadata = {
  title: "Senior Organizational Leader Under Multiple Crises | Evidence",
  description:
    "An anonymized practitioner case. Function returned while external crises remained unresolved. Sleep restored, work capacity recovered, concurrent pressures navigated from a stable baseline.",
};

export default function InstitutionalLeader() {
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
              Senior Organizational Leader Under Multiple Crises
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              This case matters because the pressure outside did not disappear. What
              changed was the leader&rsquo;s capacity to move through it with restored sleep,
              work capacity, and a lower internal load.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              An anonymized practitioner case. Function returned while the external
              crisis remained unresolved — a senior leader moved from functional collapse
              to stable work capacity, restored sleep, and a lower internal load.
            </p>
            <p className="text-sm text-deep-muted/70 leading-relaxed max-w-2xl">
              Retrospective practitioner estimate. No formal tracker. Anonymized
              practitioner record. Not a controlled study.
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
                Functional collapse at work. Sleep disrupted. Multiple concurrent pressures
                active simultaneously.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — close of engagement</p>
              <p className="text-base text-ink-light leading-relaxed">
                Work capacity returned. Sleep restored. Primary external situation accepted.
                Concurrent pressures navigated from a stable baseline. External situation
                had not changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE SUMMARY — 4 rows */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-6">Case summary</p>
          <CaseSummary
            evidenceType="Retrospective practitioner estimate. Anonymized practitioner record. No formal tracker."
            startingPoint="Approximately 60/100 distress and functional collapse."
            endPoint="Approximately 10/100 by close of engagement and informal four-month review."
            functionalOutcome="Sleep restored. Work capacity returned. Concurrent pressures navigated from a stable baseline."
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
                A senior leader arrived framing the problem as burnout — she did not want
                to work. The framing did not match the situation. Several high-stakes
                pressures were active simultaneously: a major relationship rupture, serious
                family-care responsibility, recent personal loss, and sustained functional
                collapse at work.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Across approximately three months and seven to eight sessions, the work
                moved through stabilisation, systematic clearing of accumulated emotional
                material, and structural changes to how she worked. Sleep improved. Net
                work output remained stable while recovery space was rebuilt.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The credibility of this case rests not on the numbers — there are no
                formal tracker scores — but on what the external situation was. None of
                the pressures had resolved. What changed was the baseline from which she
                was operating.
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
                A senior leader responsible for a public-facing institutional function.
                At intake, several pressures were active at once: a major relationship
                rupture, a serious family-care responsibility, a recent personal loss,
                and sustained functional collapse at work — no drive, no ideas, difficulty
                engaging with problems she would normally have managed.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Sleep was poor. Time away from work had already been taken. She expected
                half a year to a year to recover. The active engagement took roughly three
                months.
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
              The working interpretation was that the &ldquo;burnout&rdquo; framing was a downstream
              readout of a much wider accumulated load. The external pressures were not
              about to resolve quickly. The accumulated load needed to come down regardless
              of whether the external situations changed — because standard conversational
              approaches would not reach the underlying activation.
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
                <p className="text-base font-medium text-ink mb-2">Stabilization under unresolved pressure</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The primary self-applied technique was introduced in the first session
                  and used daily from that point. Sleep typically begins to improve within
                  one to two weeks — it did here. When the family situation escalated
                  mid-engagement, the work adapted to address what had arisen rather than
                  deferring it.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Reduction of accumulated emotional load</p>
                <p className="text-base text-ink-light leading-relaxed">
                  Heavier emotional material was worked across the middle sessions —
                  the unresolved personal pressures and accumulated emotional load. An
                  autobiographical inventory was run across personal history. Anticipatory
                  fear about the year ahead was addressed through a structured future-facing
                  process.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Structural recovery and work capacity</p>
                <p className="text-base text-ink-light leading-relaxed">
                  A structural change at work was made: a shorter working day with the
                  remainder protected for recovery. Net output remained stable. This was
                  not a productivity intervention — it was a recovery design. By an
                  informal four-month review, energy for work had returned to a sustained
                  level.
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
                { point: "Intake", value: "approximately 60/100", note: "Distress and functional collapse" },
                { point: "Close of engagement", value: "approximately 10/100", note: "" },
                { point: "Four-month review", value: "approximately 10/100", note: "Sustained" },
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
              clinical score.
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
                Sleep improved substantially. A shorter working day with protected
                recovery time was established; net work output remained stable. The
                &ldquo;burnout&rdquo; framing dissolved — it was a downstream effect, not the
                primary problem.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The external pressures were navigated from a stable baseline rather than
                from collapse. The primary external situation moved from non-acceptance to
                working acceptance. Self-direction returned. By the four-month review,
                energy for work had returned to a sustained level.
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
                This case suggests that accumulated load can be reduced even when the
                external situation does not change. The external pressures remained largely
                as they were. What changed was the internal baseline from which those
                pressures were being met.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                It does not prove a mechanism. It records a pattern: function returned
                while external reality remained difficult.
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
                "Single case. Results are not representative of all clients or presenting situations.",
                "Accumulated load was reduced; the external situations were not changed by the work.",
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
