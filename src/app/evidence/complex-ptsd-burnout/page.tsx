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
              Complex PTSD and burnout: changes in work, sleep and family life
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Work boundaries were established. Financial matters that had been avoided
              were addressed. A previously avoided family relationship reopened. These
              were things the client began doing as the emotional load reduced, not
              tasks assigned in a session.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Over approximately 14 weeks, the client&rsquo;s self-rated symptom tracker
              fell from 72/105 to 7/105. That included about two months of meetings,
              followed by six weeks of independent practice with no further sessions.
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
                resolved the core pattern. Financial decisions were avoided,
                relationships withdrawn from and professional development put on hold.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — by six-week follow-up</p>
              <p className="text-base text-ink-light leading-relaxed">
                Tracker score 7/105. Work boundaries established, financial matters
                addressed and close relationships reopened.
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
            functionalOutcome="Work boundaries established. Previously avoided financial matters addressed. A close family relationship reopened."
          />
        </div>
      </section>

      {/* SITUATION */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Understanding the history had not stopped the reaction</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                A senior professional in an international technology role arrived with
                a long trauma history and burnout from sustained performance demands.
                Earlier therapeutic work, including extensive EMDR, had helped make
                sense of the history. The reactions attached to it remained.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Sleep was poor. Financial decisions were being avoided, close
                relationships withdrawn from and professional development suspended.
                Avoidance of one close family member was present but initially
                unrecognised.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Symptoms covered the four clusters recorded in the case: intrusive
                material, avoidance, negative changes in thinking and mood, and
                physical or emotional reactivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING INTERPRETATION */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Why the work focused on the reactions that remained</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                My working interpretation was that the client understood where the
                events came from and what they had meant, but still reacted to them.
                Burnout appeared to be a consequence of that continuing emotional
                load rather than a separate problem.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                That does not make the earlier work irrelevant. It had helped the
                client understand the pattern and likely contributed to the stability
                from which this work began. This is not a comparison study of methods.
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
                <p className="text-base font-medium text-ink mb-2">Starting with the immediate strain</p>
                <p className="text-base text-ink-light leading-relaxed">
                  Initial work addressed the immediate stress, strong reactions and
                  disrupted sleep. The primary
                  self-applied technique was introduced and used daily from the first
                  session. Old material began surfacing during practice and was cleared
                  as it appeared.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Following the pattern through personal history</p>
                <p className="text-base text-ink-light leading-relaxed">
                  We worked systematically through workplace experiences, the history
                  of high-pressure presentations going back to school, and family
                  relationships, including the avoided relationship. The client&rsquo;s
                  longstanding negative view of themselves was also addressed directly.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Addressing work boundaries and practical decisions</p>
                <p className="text-base text-ink-light leading-relaxed">
                  As the emotional load reduced, the client began taking actions that
                  had previously been avoided. The changes in work, money and
                  relationships happened alongside the falling tracker score, not
                  after all the emotional work was finished.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKED PROGRESS */}
      <section className="py-14 lg:py-16 bg-surface">
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
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">What changed outside the sessions</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Sleep improved. A previously avoided family relationship was reopened.
                Work boundaries were established. Financial matters that had been avoided
                were addressed. A personal practice was begun.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Independent practice continued after the meetings ended. During those
                six weeks, the score fell from 23 to 7. The client did not need further
                sessions for that additional reduction to occur.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                That continuing change is an important part of this record. It is an
                observed outcome, not proof of a mechanism or a prediction for another
                person.
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
