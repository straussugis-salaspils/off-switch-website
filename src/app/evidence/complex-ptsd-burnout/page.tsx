import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CaseSummary from "@/components/blocks/CaseSummary";

export const metadata: Metadata = {
  title: "Complex PTSD and Burnout | Evidence",
  description:
    "An anonymized practitioner case. Client-maintained tracker reduced from 72 to 7 over approximately 14 weeks. Approximately 90% reduction sustained at six-week follow-up. Agency and practical functioning restored.",
};

export default function ComplexPtsdBurnout() {
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
              Complex PTSD and Burnout
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              The important change here was not only a lower tracker score. It was the
              return of practical agency in areas where the load had been closing down
              work, money, and close relationships.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              An anonymized practitioner case in which a long-standing complex PTSD and
              burnout pattern reduced from a self-rated tracker score of 72 to 7 over
              approximately 14 weeks — with the reduction continuing after the engagement
              closed, through self-directed practice.
            </p>
            <p className="text-sm text-deep-muted/70 leading-relaxed max-w-2xl">
              Client-maintained tracker. Anonymized practitioner record. Not a controlled
              study. Prior insight-based work had helped the client understand the
              pattern, but had not resolved the underlying activation.
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
                Tracker score 72/105. Prior insight-based work, including EMDR, had not
                resolved the core pattern. Practical agency substantially reduced
                across work, financial, and relational domains.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — by six-week follow-up</p>
              <p className="text-base text-ink-light leading-relaxed">
                Tracker score 7/105. Work boundaries established. Practical and financial
                life actions resumed. Close relationships reopened.
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
            evidenceType="Client-maintained self-rated tracker. Anonymized practitioner record."
            startingPoint="Tracker score 72/105."
            endPoint="Tracker score 7/105 at six-week post-engagement follow-up — approximately 90% reduction."
            functionalOutcome="Work boundaries established. Agency in practical and financial life areas restored. Close relationships reopened."
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
                The client arrived with a long trauma history that had not resolved under
                prior therapeutic work, including extensive EMDR. Symptoms covered all four
                complex PTSD clusters: intrusive material, avoidance, negative changes in
                thinking and mood, and physical or emotional reactivity.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Over approximately two months of engagement plus six weeks of self-directed
                practice, the tracker moved from 72/105 to 7/105. Reduction continued
                after engagement closed, without further sessions.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Agency returned alongside the score drop, not after it: work boundaries
                established, financial matters addressed, close relationships reopened,
                a personal practice begun.
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
                A senior professional in an international technology role. Long trauma
                history. Prior therapeutic work — including extensive EMDR — had addressed
                meaning but not resolved the underlying activation. Sleep was poor. Avoidance
                of a close family member was active and initially unrecognised.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Coexisting burnout from sustained performance demands. Agency had reduced
                across practical areas: financial decisions avoided, close relationships
                withdrawn from, professional development suspended.
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
              The working interpretation was that prior insight-based work had reached the
              level of meaning — where the events came from, what they produced — without
              clearing the underlying activation still attached to the material. The
              burnout appeared to be a functional consequence of that sustained activation
              pattern, not a separate condition.
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
                <p className="text-base font-medium text-ink mb-2">Stabilization and reduction of activation load</p>
                <p className="text-base text-ink-light leading-relaxed">
                  Initial work focused on reducing the immediate stress load — acute
                  reactivity, surface-level activation, sleep disruption. The primary
                  self-applied technique was introduced and used daily from the first
                  session. Old material began surfacing during practice and was cleared
                  as it appeared.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Reduction of accumulated emotional and trauma load</p>
                <p className="text-base text-ink-light leading-relaxed">
                  Systematic clearing across life domains: workplace material, the full
                  history of high-pressure presentations beginning from school, family
                  relationships including the avoidance item, and the longstanding
                  negative self-assessment, which was specifically addressed.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Structural recovery and restoration of agency</p>
                <p className="text-base text-ink-light leading-relaxed">
                  As the activation load reduced, the client began taking practical actions
                  that had not previously been taken. These emerged as the pattern cleared —
                  not as assigned tasks. The practical action record is the most direct
                  functional indicator in this case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKED PROGRESS */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Tracked progress</h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              21-item complex PTSD symptom tracker, 0–5 per item, total possible score 105.
              Self-reported by the client at four time points.
            </p>

            <div className="table-card overflow-x-auto max-w-lg mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="table-card-head border-b border-border">
                    <th className="text-left py-4 px-5 text-xs uppercase tracking-widest text-muted-light font-normal">Timepoint</th>
                    <th className="text-right py-4 px-5 text-xs uppercase tracking-widest text-muted-light font-normal">Score / 105</th>
                    <th className="text-right py-4 px-5 text-xs uppercase tracking-widest text-muted-light font-normal">Change from baseline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tp: "Baseline", score: "72", change: "—" },
                    { tp: "~1 month", score: "54", change: "−25%" },
                    { tp: "Endpoint (~2 months)", score: "23", change: "−68%" },
                    { tp: "6-week follow-up", score: "7", change: "~−90%" },
                  ].map((row) => (
                    <tr key={row.tp} className="border-b border-border-light last:border-b-0">
                      <td className="py-5 px-5 text-base font-medium text-ink">{row.tp}</td>
                      <td className="py-5 px-5 text-right font-medium text-ink-light tabular-nums">{row.score}</td>
                      <td className="py-5 px-5 text-right font-medium text-accent tabular-nums">{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-light leading-relaxed italic">
              The 23 → 7 reduction occurred after the engagement closed. No sessions took
              place during the six-week follow-up window. Additional item-level detail is
              retained in the supporting record.
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
                Sleep improved. A previously avoided family relationship was reopened.
                Work boundaries were established. Financial matters that had been avoided
                were addressed. A personal practice was begun.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                These changes occurred in parallel with the tracker reduction, not after it.
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
                This case suggests that prior insight-based work may reduce meaning-level
                distress without clearing the underlying activation pattern. The tracker
                reduction and functional changes occurred together — and continued after
                the practitioner was no longer involved.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The post-engagement reduction — from 23 to 7, with no further sessions —
                is the most methodologically informative data point. It does not prove a
                mechanism; it records an outcome.
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
                "Client-maintained tracker, not a clinically administered instrument. Scores are self-reported.",
                "Single case. Results are not representative of all clients or presenting situations.",
                "Prior insight-based therapy was real and likely contributed to the regulated baseline. This case is not a comparison study against any prior modality.",
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
