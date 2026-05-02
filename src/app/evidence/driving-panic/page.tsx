import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CaseSummary from "@/components/blocks/CaseSummary";

export const metadata: Metadata = {
  title: "Driving Panic and Public Pressure Overload | Evidence",
  description:
    "An anonymized practitioner case. Self-rated anxiety tracker reduced from 79 to 4 over 90 days. Driving capacity gradually restored, including 15-, 100-, and 200-mile drives.",
};

export default function DrivingPanicCase() {
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
              Driving Panic and Public Pressure Overload
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              An anonymized practitioner case in which a client who could not drive more
              than roughly five miles beyond the city limits reduced a self-maintained
              anxiety tracker from 79 to 4 over 90 days, and gradually regained driving
              capacity including 15-, 100-, and 200-mile drives.
            </p>
            <p className="text-sm text-deep-muted/70 leading-relaxed max-w-2xl">
              Client-maintained tracker. Anonymized practitioner record. Not a controlled
              study.
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
                Could not drive more than roughly five miles beyond the city limits.
                Panic while driving after an acute driving panic episode.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — by 90 days</p>
              <p className="text-base text-ink-light leading-relaxed">
                Drives of approximately 15, 100, and 200 miles completed. Driving panic
                pattern did not reappear in the same way during the tracked period.
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
            evidenceType="Client-maintained tracker. Anonymized practitioner record."
            startingPoint="Tracker score 79/125."
            endPoint="Tracker score 4/125 at 90 days — approximately 95% reduction."
            functionalOutcome="Driving range expanded from roughly five miles beyond the city limits to 15-, 100-, and eventually 200-mile drives."
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
                After a severe panic episode on the road, the client was unable to drive
                more than roughly five miles beyond the city limits. The visible problem
                was a driving panic pattern.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The wider context was a nervous system already carrying sustained overload
                from a high-responsibility role. The working interpretation was that
                the system was already in a high-activation state before the road episode,
                and the road event may have been a threshold crossing rather than an
                originating cause.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Early in the engagement, the public-pressure and leadership overload
                reduced substantially — a turning point after which the driving-specific
                pattern work became more tractable. Over 90 days, the self-rated tracker
                moved from 79/125 to 40/125 at 60 days, and to 4/125 at 90 days. Driving
                capacity returned through staged real-world testing.
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
                The client experienced panic symptoms while driving following a severe road
                episode. He was unable to drive more than roughly five miles beyond the
                city limits at the start of the engagement.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Alongside this, he was carrying sustained overload from a major
                high-responsibility role — external evaluation pressure, sustained
                accountability load, and continuous public-facing responsibility.
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
              The working interpretation was that the driving panic was not an isolated
              event. The system appeared already primed by sustained overload before the
              road episode occurred. In this reading, the road event was a threshold
              crossing rather than an originating cause — and addressing only the driving
              material, without reducing the wider overload pattern, would have left the
              underlying activation state largely intact.
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
                <p className="text-base font-medium text-ink mb-2">Stabilization under sustained overload</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The initial focus was on reducing the active overload state — public-pressure
                  activation, chronic load, and overwhelm. A reduction in the wider overload
                  became apparent within the first month and coincided with a turning point
                  in the case.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Reduction of the driving and load pattern</p>
                <p className="text-base text-ink-light leading-relaxed">
                  Once the wider overload had reduced, the driving-specific material was
                  addressed: the original panic episode, anticipatory activation, and the
                  external-evaluation pattern connected to the system's elevated baseline.
                  These were worked as a single connected pattern rather than isolated
                  symptoms.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Staged return to functional driving</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The change was tested through real-world driving rather than relying on
                  in-session report alone. The result is grounded in observed functional
                  capacity, not self-reported internal state.
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
              25-item self-rated anxiety tracker, 0–5 per item, total possible score 125.
              Self-reported by the client.
            </p>

            <div className="table-card overflow-x-auto max-w-lg mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="table-card-head border-b border-border">
                    <th className="text-left py-4 px-5 text-xs uppercase tracking-widest text-muted-light font-normal">Timepoint</th>
                    <th className="text-right py-4 px-5 text-xs uppercase tracking-widest text-muted-light font-normal">Score / 125</th>
                    <th className="text-right py-4 px-5 text-xs uppercase tracking-widest text-muted-light font-normal">Change from initial</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tp: "Initial", score: "79", change: "—" },
                    { tp: "60 days", score: "40", change: "−49%" },
                    { tp: "90 days", score: "4", change: "−95%" },
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
              Additional item-level detail is retained in the supporting record.
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
                The role-related overload reduced in the early engagement — a change that
                preceded resolution of the driving-specific pattern.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Driving capacity returned through staged real-world testing: first to
                smaller nearby towns, then to larger cities, expanding to approximately
                15, 100, and eventually 200-mile drives. The driving panic pattern did
                not reappear in the same way during the 90-day tracked period.
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
                This case suggests that the driving panic was connected to a broader
                overload and role-pressure pattern, not only to the driving event itself.
                When the wider load reduced, the driving-specific work became more
                tractable, and the change could be confirmed through real-world driving
                rather than score reduction alone.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Functional testing through actual driving at increasing distances provides
                a more direct measure of change than score reduction alone. In this case,
                the two were consistent.
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
                "Not a controlled study. There was no control group and no comparison condition.",
                "Not peer-reviewed.",
                "Not a substitute for medical or psychiatric care for panic symptoms or any other condition.",
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
