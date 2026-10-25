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
              Driving panic: beyond the five-mile limit
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              After a severe panic episode on the road, this client could drive no more
              than roughly five miles beyond the city limits. Over 90 days, he completed
              journeys of approximately 15, 100 and 200 miles.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              The work did not begin with longer drives. First came the pressure he was
              carrying in the rest of his life; then the driving-specific work and a
              gradual return to the road. His self-rated anxiety tracker fell from 79/125
              to 4/125 during the same period.
            </p>
            <p className="text-sm text-deep-muted/70 leading-relaxed max-w-2xl">
              One anonymized practitioner case, with a client-maintained tracker.
              Not a controlled study; the record covers a 90-day period.
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
                After the severe road episode, panic prevented him from driving more
                than roughly five miles beyond the city limits.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">After — by 90 days</p>
              <p className="text-base text-ink-light leading-relaxed">
                He completed drives of approximately 15, 100 and 200 miles. The driving
                panic pattern did not reappear in the same way during the tracked period.
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

      {/* SITUATION */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">The pressure was not only on the road</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                Driving panic was the problem he brought to the work. Alongside it was
                sustained overload from a major, high-responsibility role: being evaluated
                by others, carrying ongoing accountability and remaining publicly responsible
                for what happened.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The question was whether the road episode had created the whole problem,
                or whether it had happened when he was already carrying too much.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING INTERPRETATION */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">Why we looked beyond the driving episode</h2>
            <p className="text-base text-ink-light leading-relaxed">
              The working interpretation was that he had already been in a prolonged state
              of overload. The road episode may have pushed that state past its limit,
              rather than started it. On that reading, working only with the driving fear
              would leave the wider pressure response in place.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE WORK ADDRESSED */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">How the work unfolded</h2>
            <div className="space-y-7">
              <div>
                <p className="text-base font-medium text-ink mb-2">First, reduce the wider overload</p>
                <p className="text-base text-ink-light leading-relaxed">
                  We began with the chronic pressure, overwhelm and reactions connected to
                  his public-facing role. Within the first month, that wider load had
                  noticeably reduced. This was the turning point after which the
                  driving-specific work became more manageable.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Then, work with the driving panic</p>
                <p className="text-base text-ink-light leading-relaxed">
                  The next work addressed the original road episode, the anxiety that
                  began in anticipation of driving, and the pressure of being judged by
                  others. These were approached as a connected pattern, rather than
                  treating each symptom as a separate problem.
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-ink mb-2">Check the change on the road</p>
                <p className="text-base text-ink-light leading-relaxed">
                  Feeling calmer in a session was not the final test. He returned to
                  driving in stages, making actual journeys at increasing distances.
                  What he could do on the road was checked alongside how he rated his
                  symptoms.
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
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">From nearby towns to longer journeys</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The return began with smaller nearby towns, then larger cities. The
                completed journeys grew to approximately 15, 100 and eventually 200 miles.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The driving panic pattern did not reappear in the same way during the
                90-day tracked period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS CASE SUGGESTS */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">What the anxiety scores and completed journeys show</h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The tracker and the journeys tell different parts of the same story.
                One records his own ratings of anxiety; the other records a return to
                something he had been unable to do.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                In this case, lower symptom scores went together with a wider driving
                range. The wider pressure eased first; the driving-specific work
                became more manageable afterwards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS AND HONESTY */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">What this record can and cannot establish</h2>
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
