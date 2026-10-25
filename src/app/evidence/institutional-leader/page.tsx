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
              How a senior leader reduced her working hours without reducing output
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              A senior leader came to the work unable to face problems she would
              normally have managed. By the end, she was working a shorter day with
              time protected for recovery. Her net output had stayed the same.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Sleep improved, and her energy for work returned. The relationship
              rupture, family-care responsibility and personal loss had not disappeared.
              She was meeting those pressures from a different starting point.
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
                Poor sleep, no drive and no ideas. Work had become difficult to face
                while several serious personal pressures were happening at once.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — close of engagement</p>
              <p className="text-base text-ink-light leading-relaxed">
                A shorter working day, protected recovery time and stable net output.
                Sleep restored. The primary external situation was accepted, and the
                remaining pressures could be faced without the earlier collapse.
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
            functionalOutcome="Sleep restored. A shorter working day with stable net output. Work capacity returned despite continuing external pressures."
          />
        </div>
      </section>

      {/* SITUATION */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">What was happening when she arrived</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                She described the problem as burnout: she did not want to work. A senior
                leader responsible for a public-facing institutional function, she had
                lost the drive and ideas she normally brought to the role. Problems she
                would usually have managed had become difficult to engage with.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Several pressures were active at once: a major relationship rupture,
                a serious family-care responsibility and a recent personal loss.
                Sleep was poor. She had already taken time away from work and expected
                to need half a year to a year to recover.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The active engagement lasted approximately three months, with seven to
                eight sessions. It combined daily practice, work through accumulated
                emotional material and a change to the structure of her working day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING INTERPRETATION */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Why the work went beyond burnout</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                My working interpretation was that the difficulty at work was one
                consequence of a much wider emotional load. The pressures outside
                were not about to resolve quickly. We needed to work on what she was
                carrying while those situations continued.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                In this case, I did not expect conversation alone to reach the reactions
                keeping that load active. That is the practitioner&rsquo;s interpretation,
                not a mechanism established by this record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE WORK ADDRESSED */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">What we worked on</h2>
            <div className="space-y-7">
              <div>
                <p className="text-base font-medium text-ink mb-2">Daily practice while life remained difficult</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The primary self-applied technique was introduced in the first session
                  and used daily from that point. Sleep improved within one to two
                  weeks. When the family situation escalated
                  mid-engagement, the work adapted to address what had arisen rather than
                  deferring it.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">The history behind the current load</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The middle sessions addressed the unresolved personal pressures and
                  accumulated emotional load. She worked systematically through an
                  inventory of her personal history. A structured future-facing process
                  addressed the fear attached to the year ahead.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Making room for recovery in the working day</p>
                <p className="text-base text-ink-light leading-relaxed">
                  A structural change at work was made: a shorter working day with the
                  remainder protected for recovery. Net output remained stable. This was
                  not a productivity exercise: the purpose was to protect recovery. By an
                  informal four-month review, energy for work had returned to a sustained
                  level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTITIONER-ESTIMATED CHANGE */}
      <section className="py-14 lg:py-16 bg-surface">
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
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">What changed outside the sessions</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Sleep improved substantially. She could accept the primary external
                situation and make her own decisions again, rather than meeting every
                pressure from a state of collapse. By the informal four-month review,
                her energy for work was sustained.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The wider pressures remained largely as they were. The record shows
                work capacity returning while life was still difficult; it does not
                establish a mechanism or show that the external problems were solved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS AND HONESTY */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">What this record can and cannot establish</h2>
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
