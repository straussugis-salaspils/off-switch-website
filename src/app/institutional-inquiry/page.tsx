import type { Metadata } from "next";
import InquiryForm from "@/components/blocks/InquiryForm";

export const metadata: Metadata = {
  title: "Institutional Inquiry",
  description:
    "For organizations, institutions, and professionals exploring a formal conversation about the Off-Switch Method.",
};

export default function InstitutionalInquiry() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 grain">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Institutional Inquiry
            </h1>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              This form is for organizations, institutions, and professionals exploring a
              formal conversation about the Off-Switch Method — whether for program
              delivery, research partnership, or professional collaboration.
            </p>
            <p className="text-base text-deep-muted leading-relaxed">
              Describe your context briefly. A first conversation follows if there is a
              clear fit.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-10 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-4">
              What happens next
            </h2>
            <p className="text-base text-muted leading-relaxed mb-3">
              You will receive a response within two business days. If the inquiry is a
              plausible fit, a conversation will be scheduled. If it is not, you will be
              told clearly, and where possible, pointed toward what would be more
              appropriate.
            </p>
            <p className="text-sm text-muted-light">
              There is no sales process attached to this inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* EMAIL FALLBACK */}
      <section className="py-10 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm text-muted leading-relaxed">
              Organizations or professionals who prefer direct contact:{" "}
              <span className="text-ink-light">
                [institutional email — to be confirmed before launch]
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
