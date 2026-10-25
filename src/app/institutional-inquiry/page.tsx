import type { Metadata } from "next";
import InquiryForm from "@/components/blocks/InquiryForm";
import OrganizationsNavigation from "@/components/layout/OrganizationsNavigation";

export const metadata: Metadata = {
  title: "Institutional Inquiry",
  description:
    "For organizations, institutions, and professionals exploring a formal conversation about the Off-Switch Method.",
};

export default function InstitutionalInquiry() {
  return (
    <>
      <OrganizationsNavigation />
      {/* HERO */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 grain">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Institutional Inquiry
            </h1>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              Tell us what you are considering: work with people in your organisation,
              a wider programme, a research partnership or professional collaboration.
            </p>
            <p className="text-base text-deep-muted leading-relaxed">
              A brief description of the situation is enough to start. We will look at
              whether the method is relevant and whether a conversation would be useful.
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
              You will receive a response within two business days. If there is a
              relevant way to work together, we will arrange a conversation. If not,
              we will tell you clearly and, where possible, suggest a more appropriate
              direction.
            </p>
            <p className="text-sm text-muted-light">
              The first exchange is about your situation and what the work could
              involve. Sending an enquiry does not commit your organisation to a programme.
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

    </>
  );
}
