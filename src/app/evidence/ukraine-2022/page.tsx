import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ukraine Field Application — 2022 | Evidence",
  description:
    "The Off-Switch Method was delivered online to approximately 7,000 Ukrainians experiencing war-related trauma in 2022. PTSD symptom reduction of 42–60% across measured cohorts. Field evidence, not a controlled trial.",
};

export default function Ukraine2022() {
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
              <span>Field Application</span>
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Ukraine Field Application — 2022
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              In March 2022, the Off-Switch Method was delivered online to Ukrainians
              experiencing war-related trauma, at scale, with structured symptom tracking
              across multiple cohorts.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Twenty Ukrainian clinicians joined the delivery team after experiencing
              the program themselves.
            </p>
            <p className="text-sm text-deep-muted/70 leading-relaxed max-w-2xl">
              Field application data. Not a controlled clinical trial. Not peer-reviewed.
              Results reflect participants who completed all six sessions of the measured
              program.
            </p>
          </div>
        </div>
      </section>

      {/* FIELD SUMMARY */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-6">Field summary</p>
          <div className="max-w-3xl space-y-4">
            {/* Row 1: methodology + population */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-muted-light mb-2">
                  Evidence type
                </p>
                <p className="text-base text-ink-light leading-relaxed">
                  Field application data across multiple online cohorts. Not a randomized controlled trial.
                </p>
              </div>
              <div className="border border-border bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-muted-light mb-2">
                  Population
                </p>
                <p className="text-base text-ink-light leading-relaxed">
                  Approximately 7,000 participants enrolled. Around 80% inside Ukraine during active hostilities; around 20% refugees abroad.
                </p>
              </div>
            </div>

            {/* Row 2: delivery format + measurement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-muted-light mb-2">
                  Delivery format
                </p>
                <p className="text-base text-ink-light leading-relaxed">
                  Six live online sessions per cohort over approximately four weeks. Six successive cohorts over six months. Delivered in Russian, free of charge.
                </p>
              </div>
              <div className="border border-border bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-muted-light mb-2">
                  Measurement
                </p>
                <p className="text-base text-ink-light leading-relaxed">
                  Structured 21-item PTSD symptom scale, maximum score 105. Measured before the program, at the end of the program, and at one-month follow-up where conducted.
                </p>
              </div>
            </div>

            {/* Row 3: main outcome — strongest emphasis */}
            <div className="border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Main outcome
              </p>
              <p className="text-base text-ink leading-relaxed">
                Among completing participants in the publicly shown measured cohorts, PTSD symptom scores reduced by approximately 42–60% by the end of the program. Reductions sustained at one-month follow-up where measured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-10 lg:py-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border border-border p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "7,000+", label: "participants enrolled" },
                { value: "6", label: "cohort groups" },
                { value: "42–60%", label: "PTSD symptom reduction" },
                { value: "20", label: "clinicians joined delivery" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-3xl font-light text-ink tracking-display mb-1">
                    {m.value}
                  </p>
                  <p className="text-xs text-muted leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-light leading-relaxed mt-5 pt-4 border-t border-border-light">
              Enrollment is total across all six cohorts. Reduction figures reflect
              completing participants in the publicly shown measured cohorts only.
            </p>
          </div>
        </div>
      </section>

      {/* MEASUREMENT SUMMARY */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">
            Measurement summary
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            21-item PTSD symptom scale, maximum score 105. Completing participants only,
            across the three publicly shown measured cohorts.
          </p>
          <div className="max-w-3xl border border-border bg-white p-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <p className="text-sm font-medium text-ink mb-3">Before program</p>
              <p className="text-base text-ink-light leading-relaxed">
                Pre-program scores ranged 53.1–69.2 across the three measured cohorts.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">End of program</p>
              <p className="text-base text-ink-light leading-relaxed">
                End-of-program scores ranged 21.5–39.8, representing 42–60% reduction
                among completing participants.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-3">One-month follow-up</p>
              <p className="text-base text-ink-light leading-relaxed">
                Where measured (Groups 4 and 5), follow-up scores were lower than
                end-of-program: 34.9 and 37.2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COHORT OUTCOMES */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">
              Cohort outcomes
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Across the three measured cohorts, end-of-program reductions ranged
              42–60%. Where one-month follow-up was conducted, reductions were
              sustained or slightly improved.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              21-item PTSD symptom scale, maximum score 105. Completing participants only.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { cohort: "Group 3", pre: "53.1", end: "21.5", reduction: "60%", followUp: "—" },
                { cohort: "Group 4", pre: "62.7", end: "36.4", reduction: "42%", followUp: "34.9 (44%)" },
                { cohort: "Group 5", pre: "69.2", end: "39.8", reduction: "43%", followUp: "37.2 (48%)" },
              ].map((row) => (
                <div key={row.cohort} className="border border-border bg-white p-6 lg:p-8">
                  <p className="text-xs uppercase tracking-widest text-muted-light mb-1.5">Cohort</p>
                  <h3 className="font-serif text-xl font-light text-ink mb-6">{row.cohort}</h3>

                  <p className="text-[10px] uppercase tracking-widest text-muted-light mb-2">Reduction</p>
                  <p className="font-serif text-4xl lg:text-5xl font-light text-accent tabular-nums leading-none">
                    {row.reduction}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border-light space-y-2 text-sm text-muted leading-relaxed">
                    <p>
                      Pre-program <span className="text-ink-light tabular-nums">{row.pre}</span>{" "}
                      → End <span className="text-ink-light tabular-nums">{row.end}</span>
                    </p>
                    <p>
                      Follow-up: <span className="text-ink-light tabular-nums">{row.followUp}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WAS DELIVERED */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">
              What was delivered
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The program began in March 2022, two weeks after the full-scale invasion.
                It ran for six months across six successive cohort groups. Each cohort
                received six live online sessions over approximately four weeks, with
                recordings available between sessions and optional small-group mentoring
                from Ukrainian practitioners on the delivery team. Delivery was in Russian,
                free of charge, and funded through advertising.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Total enrollment was approximately 7,000 participants. Around 80% were
                inside Ukraine during active hostilities; around 20% were refugees abroad.
                The primary self-applied technique was taught in the first session and
                owned by participants from that point — the program was structured so that
                outcomes did not depend on ongoing access to a practitioner.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Approximately 30% of each cohort completed all six sessions. The publicly
                shown measurement data reflects this completing population — roughly
                300–500 individuals across the three measured cohorts. Participants who
                did not complete all six sessions are not reflected in the reduction
                figures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">
              What changed
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The measured change was a reduction in reported PTSD symptom scores among
                completing participants. Across the three publicly shown cohorts,
                end-of-program reductions ranged from 42% to 60%. Pre-program scores were
                high — 62.7 and 69.2 in the two cohorts where follow-up was available —
                and reductions brought scores to 36.4 and 39.8, indicating meaningful
                symptom reduction while acknowledging these were not zero.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The strongest signal in the data is what happened afterward. In Groups 4
                and 5, one-month follow-up scores were lower than end-of-program scores —
                34.9 against 36.4, and 37.2 against 39.8. The reduction was not immediately
                reversed when the structured program ended. External conditions — active
                war, bombardment, displacement — had not improved. The symptom scores had.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTITIONER UPTAKE */}
      <section className="py-14 lg:py-16 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-deep-text mb-5 tracking-display">
              Practitioner uptake
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base text-deep-muted leading-relaxed">
                As the program progressed, twenty Ukrainian therapists, psychologists, and
                medical doctors who were participating in the sessions requested training
                in the Off-Switch Method and joined the delivery team.
              </p>
              <p className="text-base text-deep-muted leading-relaxed">
                They did not arrive through recruitment. They had experienced the method
                themselves during active hostilities, observed the effect, and concluded
                they needed to learn it for their own clients. The signal here is not
                endorsement — it is that clinicians under wartime conditions chose to
                become practitioners of it. This is professional behaviour, not a
                testimonial.
              </p>
            </div>
            <div className="border-l-2 border-accent-dim pl-6 py-1">
              <blockquote className="text-base text-deep-text/80 leading-relaxed italic mb-3">
                &ldquo;I have been working with trauma for many years and currently have
                a large number of refugee clients with whom many standard methods do not
                produce results. This approach works and brings real benefit.&rdquo;
              </blockquote>
              <cite className="not-italic text-sm text-deep-muted">
                — Trauma professional working with refugees, Ukraine program
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS FIELD APPLICATION SUGGESTS */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-5">
              What this field application suggests
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The application suggests that the method can be delivered at scale,
                online, under severe real-world conditions, and produce measurable symptom
                reduction among completing participants. It also suggests that reductions
                were not immediately reversed when structured program support ended.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                It suggests that practitioners who experienced the work firsthand — under
                the same conditions as the participants — saw enough operational value to
                train in it and begin delivering it to their own clients. That is a
                different category of signal from participant self-report.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                It does not prove the method is universally effective. It does not prove
                superiority over other approaches. It does not replace controlled research.
                It shows what was observed in one structured field application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITS AND HONESTY */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">
              Limits and honesty
            </h2>
            <div className="space-y-3">
              {[
                "Field evidence, not a randomized or controlled clinical trial. Not peer-reviewed.",
                "Participants self-selected into the program. There was no control group and no comparison condition.",
                "The publicly shown reduction figures reflect completing participants — approximately 30% of each cohort's enrollment. Participants who did not complete all six sessions are not reflected in those figures.",
                "Single field application. Results are not a guarantee of similar outcomes in other populations or contexts. Results vary across individuals and conditions.",
                "Symptom measurement was self-reported using a structured 21-item scale, not a clinically administered instrument.",
                "The method did not treat the war, the bombardment, the displacement, or any external event. External conditions remained what they were.",
                "Not a substitute for medical or psychiatric care. Where clinical or psychiatric care is needed, it takes precedence.",
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
            <Button href="https://tally.so/r/441ZOd" variant="primary" size="md">Send an organizational inquiry</Button>
            <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="ghost" size="md">Book a first conversation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
