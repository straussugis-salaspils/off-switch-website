import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "For organizations where emotional load becomes operational risk. Relevant when sustained stress, trauma exposure, burnout risk, or post-crisis overload begins affecting judgment, recovery, retention, and performance.",
};

const workplaceUseCases = [
  {
    title: "Burnout-risk employees in high-pressure roles",
    situation: "Still functioning — but already losing capacity. Sleep deteriorates, emotional control weakens, concentration drops.",
    relevantFor: "IT, trading, finance, consulting, sales, customer support, logistics, healthcare administration.",
    format: "HR-referred 1:1 work, small recovery cohorts, or a burnout-prevention program.",
    closing: "The last point before burnout becomes absence, resignation, or breakdown.",
  },
  {
    title: "Executive and senior-leader overload",
    situation: "Signs are often quiet: poor sleep, inability to switch off, reactivity, narrowed thinking, no room left inside.",
    relevantFor: "CEOs, founders, country managers, senior executives, board-level leaders, and key decision-makers under prolonged responsibility.",
    format: "Confidential 1:1 commissioned engagement.",
    closing: "Used when leadership capacity is still intact — but no longer reliable.",
  },
  {
    title: "Post-crisis organizational recovery",
    situation: "The crisis is over externally — but still active internally.",
    relevantFor: "Organizations after layoffs, restructuring, workplace incidents, scandal, leadership crisis, merger pressure, or another major operational shock.",
    format: "Leadership recovery work, team cohorts, or an organization-specific recovery program.",
    closing: "Stop the crisis from continuing inside the organization after it has ended externally.",
  },
];

const exposureUseCases = [
  {
    title: "Frontline, medical, and emergency-response teams",
    situation: "Exposure is not occasional. It is built into the job.",
    relevantFor: "Hospitals, emergency medicine, ambulance, firefighters, police, prison staff, social workers, child protection, crisis-line and victim-support workers.",
    format: "Small cohorts, structured decompression programs, or practitioner-supported internal delivery.",
    closing: "Recovery support for repeated exposure load before it becomes shutdown or attrition.",
  },
  {
    title: "Humanitarian, refugee, and war-related programs",
    situation: "Large-scale crisis creates emotional load at population level. War, displacement, and prolonged insecurity require more than ad hoc support.",
    relevantFor: "NGOs, foundations, cities, diaspora organizations, refugee-support programs, humanitarian institutions, and donor-funded initiatives.",
    format: "Online cohort delivery, large-scale field deployment, local practitioner training, or train-the-trainer.",
    closing: "The Ukraine 2022 program is the closest existing model for structured delivery at scale.",
  },
  {
    title: "Defense, security, and confidential trauma roles",
    situation: "People may carry events they cannot fully disclose, describe, or discuss publicly.",
    relevantFor: "Military personnel, veterans, intelligence and security services, police tactical units, border guards, private security, diplomatic security staff.",
    format: "Confidential individual work, closed cohorts, or trained internal practitioners.",
    closing: "Structured work without requiring detailed narration of operationally sensitive content.",
  },
];

export default function ForOrganizations() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-14 lg:pt-28 lg:pb-20 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-4">
              For Organizations
            </h1>
            <p className="text-xl lg:text-2xl font-serif font-light text-deep-text/80 leading-snug mb-3">
              For organizations where emotional load becomes operational risk.
            </p>
            <p className="text-base text-deep-muted/80 leading-relaxed mb-5">
              When people are still performing — but capacity is already declining.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-xl mb-4">
              Often it does not look dramatic. A person keeps doing the role, while sleep,
              recovery, judgment, and emotional steadiness become less reliable.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-xl mb-4">
              Relevant when sustained stress, trauma exposure, burnout risk, or
              post-crisis overload begins affecting judgment, recovery, retention, and
              performance.
            </p>
            <p className="text-base text-deep-text leading-relaxed max-w-xl">
              Already applied at 7,000-participant scale under field conditions.
            </p>
          </div>

          {/* Route cards */}
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[
              { route: "Individual work", who: "Catch capacity loss before it becomes visible.", what: "Confidential 1:1 engagement." },
              { route: "Group cohorts", who: "Contain overload before it spreads across teams.", what: "Structured finite program." },
              { route: "Internal training", who: "Build internal capability to handle ongoing load.", what: "Train practitioners or support teams." },
            ].map((card) => (
              <div
                key={card.route}
                className="border border-deep-border bg-deep-surface p-5"
              >
                <div className="h-0.5 bg-transparent mb-4 -mx-5 -mt-5" />
                <p className="text-xs uppercase tracking-widest text-muted-light mb-2">{card.route}</p>
                <p className="text-sm text-deep-text font-semibold leading-snug mb-1">{card.who}</p>
                <p className="text-xs text-deep-muted">{card.what}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-deep-muted/50 leading-relaxed max-w-2xl">
            Not a replacement for medical, psychiatric, emergency, or crisis care.
          </p>
        </div>
      </section>

      {/* DIAGNOSTIC TABLE */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-3">
              When private stress becomes organizational risk
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              Stress becomes an organizational issue when it stops being only a private
              experience and starts showing up in the organization&rsquo;s ability to
              function.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ["Sleep deteriorates", "Recovery capacity drops."],
                ["Emotional reactivity increases", "Conflict and decision quality worsen."],
                ["People withdraw or shut down", "Teams lose usable capacity."],
                ["Stress becomes chronic", "Sick leave and retention risk rise."],
                ["Leaders cannot switch off", "Strategic judgment narrows."],
                ['The crisis is "over" externally', "People remain activated internally."],
              ].map(([signal, consequence]) => (
                <div key={signal} className="border border-border bg-white p-6">
                  <p className="text-[10px] uppercase tracking-widest text-muted-light mb-2">
                    Private signal
                  </p>
                  <p className="text-base font-medium text-ink leading-snug mb-5">
                    {signal}
                  </p>
                  <div className="border-t border-border-light pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-light mb-2">
                      Organizational consequence
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {consequence}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-border mt-8 pt-6">
              <p className="text-base lg:text-lg text-ink font-semibold leading-relaxed">
                At that point, this is no longer a wellbeing issue. It is an operational
                capacity problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORIENTATION STRIP */}
      <section className="py-8 lg:py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl border-t-2 border-accent/40 pt-6 pb-5">
            <p className="text-xs uppercase tracking-widest text-accent mb-5">
              This page is for organizations dealing with:
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {["Burnout risk", "Executive overload", "Repeated exposure roles", "Humanitarian crisis response", "Confidential trauma contexts", "Post-crisis recovery"].map((item) => (
                <span key={item} className="text-base font-medium text-ink">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHERE ORGANIZATIONS USE THIS WORK */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-3">
            Where organizations use this work
          </h2>
          <p className="text-base text-muted leading-relaxed mb-12 max-w-2xl">
            Six situations where the method has been applied or where its structure is
            directly relevant.
          </p>

          {/* Group 1 */}
          <div className="mb-14">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-light mb-2">Workplace capacity</p>
              <div className="h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {workplaceUseCases.map((card) => (
                <div key={card.title} className="flex flex-col border border-border bg-white">
                  <div className="h-0.5 bg-transparent" />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-light text-ink leading-snug mb-5">{card.title}</h3>
                    <div className="space-y-4 flex-1 text-sm">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">Situation</p>
                        <p className="text-ink-light leading-relaxed">{card.situation}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">Relevant for</p>
                        <p className="text-muted leading-relaxed">{card.relevantFor}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">Format</p>
                        <p className="text-muted leading-relaxed">{card.format}</p>
                      </div>
                    </div>
                    <p className="text-sm text-ink font-semibold mt-5 pt-4 border-t border-border">{card.closing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-light mb-2">Exposure and trauma contexts</p>
              <div className="h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {exposureUseCases.map((card) => (
                <div key={card.title} className="flex flex-col border border-border bg-white">
                  <div className="h-0.5 bg-transparent" />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-light text-ink leading-snug mb-5">{card.title}</h3>
                    <div className="space-y-4 flex-1 text-sm">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">Situation</p>
                        <p className="text-ink-light leading-relaxed">{card.situation}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">Relevant for</p>
                        <p className="text-muted leading-relaxed">{card.relevantFor}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">Format</p>
                        <p className="text-muted leading-relaxed">{card.format}</p>
                      </div>
                    </div>
                    <p className="text-sm text-ink font-semibold mt-5 pt-4 border-t border-border">{card.closing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-light leading-relaxed mt-8 italic">
            Not a substitute for medical, psychiatric, emergency, or crisis care.
          </p>
        </div>
      </section>

      {/* WHAT CHANGES WHEN DELIVERED */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            What changes
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
            What changes when this is delivered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {[
              {
                title: "Recovery capacity",
                body: "In completed engagements, sleep, baseline emotional load, and recovery between demands typically improve before any external situation changes.",
              },
              {
                title: "Decision quality and reactivity",
                body: "Reactivity drops, narrowed thinking widens, and decision quality recovers as the underlying activation reduces.",
              },
              {
                title: "Function under sustained pressure",
                body: "Where pressure does not let up, the internal baseline can still come down. The Ukraine field application is the largest example.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col border border-border bg-white">
                <div className="h-0.5 bg-transparent" />
                <div className="p-6">
                  <p className="text-sm font-medium text-ink mb-2">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY FORMATS */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
            How the work can be delivered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-5">
            {[
              { format: "Individual commissioned work", bestFor: "Executives, key personnel, or employees at risk", structure: "Confidential 1:1 engagement." },
              { format: "Small cohort programs", bestFor: "Teams with shared stress, burnout, or exposure patterns", structure: "Finite structured program." },
              { format: "Large-scale field deployment", bestFor: "Humanitarian, refugee, or population-level contexts", structure: "Cohort delivery adapted to scale." },
              { format: "Practitioner or internal-team training", bestFor: "Organizations needing internal delivery capacity", structure: "Train internal delivery capacity." },
            ].map((row) => (
              <div key={row.format} className="flex flex-col border border-border bg-white">
                <div className="h-0.5 bg-transparent" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-light text-ink leading-snug mb-5">
                    {row.format}
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">
                        Best for
                      </p>
                      <p className="text-ink-light leading-relaxed">{row.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1.5">
                        Structure
                      </p>
                      <p className="text-muted leading-relaxed">{row.structure}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted leading-relaxed max-w-2xl">
            The right format depends on population size, risk level, context, and whether
            the organization needs direct delivery or internal capability.
          </p>
        </div>
      </section>

      {/* UKRAINE PROOF PANEL */}
      <section className="py-14 lg:py-16 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm text-deep-muted/70 leading-relaxed mb-8 italic">
              This has already been applied at scale under real-world conditions.
            </p>

            <p className="text-xs uppercase tracking-widest text-accent-dim mb-3">Field evidence</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-deep-text mb-4 tracking-display">
              Applied at scale: Ukraine 2022
            </h2>
            <p className="text-base text-deep-muted leading-relaxed mb-8">
              In 2022, the Off-Switch Method was delivered online as a free six-month
              program for Ukrainians experiencing war-related trauma symptoms.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pb-8 border-b border-deep-border">
              {[
                { value: "7,000+", label: "participants enrolled" },
                { value: "6", label: "cohort groups" },
                { value: "42–60%", label: "PTSD symptom reduction" },
                { value: "20", label: "clinicians trained" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-4xl lg:text-5xl font-light text-accent-dim tracking-display mb-0.5 whitespace-nowrap">{m.value}</p>
                  <p className="text-xs text-deep-muted leading-snug">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 max-w-2xl">
              <p className="text-base text-deep-muted leading-relaxed">
                7,000+ participants across six cohorts. 80% inside Ukraine during active
                hostilities. PTSD symptom scores reduced by 42–60% by program completion,
                measured on a 105-point scale. Reductions held at one-month follow-up.
              </p>
              <p className="text-base text-deep-muted leading-relaxed">
                Twenty Ukrainian therapists, psychologists, and medical doctors joined
                the delivery team after experiencing the method themselves.
              </p>
            </div>

            <p className="text-xs text-deep-muted/60 leading-relaxed mb-8 italic">
              Field evidence — not a controlled clinical trial. No control group. Results
              reflect completing participants only.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/evidence/ukraine-2022" variant="ghost-light" size="sm">Ukraine field application →</Button>
              <Button href="/evidence" variant="ghost-light" size="sm">Evidence →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ORGANIZATIONS CONSIDER THIS */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <p className="text-sm text-muted leading-relaxed mb-6 italic max-w-2xl">
            In practice, organizations use this in very specific situations.
          </p>

          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
            Why organizations consider this
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              { label: "Before performance loss turns into absence", body: "A route before stress becomes sick leave, resignation, or collapse.", strong: true },
              { label: "When key people are still performing — but already degrading", body: "Private work for roles where capacity matters to the organization.", strong: false },
              { label: "When exposure is built into the role", body: "Recovery support for repeated crisis exposure.", strong: false },
              { label: "When this is no longer an individual problem", body: "Cohort delivery adapted to teams or larger populations.", strong: false },
              { label: "When people cannot say what actually happened", body: "Useful where sensitive traumatic content should not be narrated in detail.", strong: false },
              { label: "When progress must be measurable", body: "Progress can be tracked with structured self-rated scales where appropriate.", strong: false },
            ].map((item) => (
              <div key={item.label} className="flex flex-col border border-border bg-white">
                <div className="h-0.5 bg-transparent" />
                <div className="p-5">
                  <p className={`text-sm mb-2 ${item.strong ? "font-semibold text-ink" : "font-medium text-ink"}`}>{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD INQUIRE */}
      <section className="py-12 lg:py-14 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">
              Who should inquire
            </h2>
            <p className="text-xs uppercase tracking-widest text-muted-light mb-5">
              This page is most relevant for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {[
                "HR directors",
                "People & Culture leaders",
                "Occupational health teams",
                "L&D directors",
                "Executive teams",
                "Humanitarian program directors",
                "NGO and foundation leaders",
                "Medical institution leaders",
                "Defense or security wellbeing officers",
                "Clinical or practitioner teams interested in referral or collaboration",
              ].map((role) => (
                <p key={role} className="text-base text-ink-light">{role}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent-dim mb-4">Next step</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-deep-text mb-4 tracking-display">
              Start an organizational assessment
            </h2>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              The first step is a short assessment of your situation: what is happening,
              who is affected, what has already been tried, and what may actually work. This is a fit assessment, not a proposal.
            </p>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              What this conversation produces: a clear read on whether the situation
              fits the method, what kind of engagement would be relevant, and what it
              would involve. No commitment is required from the conversation.
            </p>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              You do not need to bring a perfect brief. It is enough to describe what is
              happening with people, where the load is affecting work, and what the
              organization has already tried.
            </p>
            <p className="text-sm text-deep-muted/80 leading-relaxed mb-3">
              Possible inquiry types:
            </p>
            <div className="mb-10 space-y-2">
              {[
                "Recover employees before burnout becomes absence or loss",
                "Restore executive capacity under sustained pressure",
                "Support frontline or high-exposure teams",
                "Structure humanitarian or refugee program delivery",
                "Work within confidential trauma contexts",
                "Train practitioners or internal support teams",
                "Discuss a specific organizational case",
              ].map((item) => (
                <p key={item} className="text-sm text-deep-muted/70 leading-relaxed">— {item}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://tally.so/r/441ZOd" variant="primary" size="lg">
                Begin an organizational inquiry
              </Button>
              <Button href="/evidence" variant="ghost-light" size="lg">
                See the Evidence →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
