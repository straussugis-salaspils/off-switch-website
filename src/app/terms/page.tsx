import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use and Payment",
  description: "Terms for using the Off-Switch Method website and arranging a paid programme.",
  path: "/terms",
});

const email = "ugis@nti.lv";
const headingClass = "font-serif text-2xl font-normal text-ink";
const linkClass = "text-accent underline underline-offset-4 hover:text-accent-dim";

export default function TermsPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-7 lg:px-10">
        <p className="eyebrow-page">Legal information</p>
        <h1 className="font-serif text-[2rem] font-normal leading-[1.08] tracking-display text-ink sm:text-5xl lg:text-6xl">Terms of Use and Payment</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 13 August 2026.</p>

        <div className="mt-10 space-y-9 text-base leading-7 text-ink-light">
          <section><h2 className={headingClass}>1. Operator</h2><p className="mt-3">This website is operated by Resulta Consulting FZ-LLC, FDBC0803, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates, Tax Reg. No. 105211901100001.</p></section>
          <section><h2 className={headingClass}>2. Website and offers</h2><p className="mt-3">The website contains articles and information about the Off-Switch Method, private 1:1 and group work, and organisational formats. The duration, price, dates and delivery arrangements appear on the relevant format page or are confirmed before payment.</p><p className="mt-3">Website material is informational and educational. It does not replace medical, psychotherapeutic, legal, financial or other specialist support where that support is needed.</p></section>
          <section><h2 className={headingClass}>3. Enquiries and participation</h2><p className="mt-3">Submitting a form, booking a conversation or sending a message begins an enquiry; it does not by itself create a contract. Before work begins, the parties agree the relevant format, essential terms, price and payment arrangements.</p></section>
          <section><h2 className={headingClass}>4. Payment</h2><p className="mt-3">The current price, currency, payment schedule and available payment method are shown on the relevant format page or confirmed in an individual offer before payment. A place is not reserved merely by sending an enquiry unless this is expressly agreed. Any applicable taxes or invoicing arrangements will be stated where relevant.</p></section>
          <section><h2 className={headingClass}>5. Access, dates and changes</h2><p className="mt-3">Access details, meeting dates and practical instructions are supplied through the agreed contact channel. Reasonable changes to timing, platform, sequence or delivery may be made when needed. If a material change affects participation, the available options will be explained to the participant.</p></section>
          <section><h2 className={headingClass}>6. Cancellation, transfer and refunds</h2><p className="mt-3">Cancellation, transfer, missed-session and refund terms depend on the selected format and must be confirmed before payment. Any individual agreement or checkout-specific terms take precedence for that purchase. Mandatory consumer rights under applicable law remain unaffected. Questions can be sent to <a className={linkClass} href={`mailto:${email}`}>{email}</a>.</p></section>
          <section><h2 className={headingClass}>7. Participation and results</h2><p className="mt-3">Participants remain responsible for their decisions, attendance, use of the material and practice between meetings. Outcomes depend on the starting situation, suitability of the format, participation in the process and application between meetings. No particular personal, medical, professional or financial result is guaranteed.</p></section>
          <section><h2 className={headingClass}>8. Materials and acceptable use</h2><p className="mt-3">Text, images, recordings and programme materials are provided for personal use within the agreed format. They may not be copied, recorded, distributed, published, taught or used commercially without written permission, except where applicable law expressly permits it. Participants must also respect the privacy and confidential information of other participants.</p></section>
          <section><h2 className={headingClass}>9. Contact and complaints</h2><p className="mt-3">For questions about participation, payment, cancellation or these terms, contact <a className={linkClass} href={`mailto:${email}`}>{email}</a>. Please include enough information to identify the relevant enquiry or purchase. Personal data is addressed in the <Link className={linkClass} href="/privacy-policy">Privacy Policy</Link>.</p></section>
          <section><h2 className={headingClass}>10. Changes to these terms</h2><p className="mt-3">These terms may be updated when the website, formats, payment arrangements, providers or applicable requirements change. The terms applying to an existing paid engagement are those agreed for that engagement unless a later change is expressly accepted or required by law.</p></section>
        </div>
      </div>
    </article>
  );
}
