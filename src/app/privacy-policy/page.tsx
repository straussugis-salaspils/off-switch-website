import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "How the Off-Switch Method website handles contact, service and technical data.",
  path: "/privacy-policy",
});

const email = "ugis@nti.lv";
const headingClass = "font-serif text-2xl font-normal text-ink";
const linkClass = "text-accent underline underline-offset-4 hover:text-accent-dim";

export default function PrivacyPolicyPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-7 lg:px-10">
        <p className="eyebrow-page">Legal information</p>
        <h1 className="font-serif text-[2rem] font-normal leading-[1.08] tracking-display text-ink sm:text-5xl lg:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 13 August 2026.</p>

        <div className="mt-10 space-y-9 text-base leading-7 text-ink-light">
          <section><h2 className={headingClass}>1. Data controller</h2><p className="mt-3">This website is operated by Resulta Consulting FZ-LLC, FDBC0803, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates, Tax Reg. No. 105211901100001. Questions about personal data can be sent to <a className={linkClass} href={`mailto:${email}`}>{email}</a>.</p></section>
          <section><h2 className={headingClass}>2. Data we may process</h2><ul className="mt-3 list-disc space-y-2 pl-5"><li>contact details you provide, including your name, email, telephone number or Telegram handle;</li><li>the format you are interested in and the information included in your enquiry;</li><li>information needed to arrange participation, payment and delivery of a service;</li><li>technical information needed for the operation and security of the website.</li></ul><p className="mt-3">The website does not receive or store complete payment-card details. Please do not submit unnecessary medical information or information about other people.</p></section>
          <section><h2 className={headingClass}>3. How data reaches us</h2><p className="mt-3">Data reaches us when you submit an enquiry, open and complete an external form, book a conversation, send an email or message, enter into an agreement, or use the website. External services may provide the information needed to complete the action you chose.</p></section>
          <section><h2 className={headingClass}>4. Why data is used</h2><p className="mt-3">Data may be used to answer an enquiry, assess whether a format is suitable, agree and administer participation, arrange payment, deliver the selected service, maintain communication requested by you, improve website navigation, prevent misuse, and meet contractual or legal obligations.</p></section>
          <section><h2 className={headingClass}>5. Legal bases</h2><p className="mt-3">Depending on the situation, processing may be necessary to take steps at your request before entering a contract, perform a contract, comply with a legal obligation, pursue a legitimate interest such as security or service administration, or act on consent. Consent may be withdrawn for future processing at any time.</p></section>
          <section><h2 className={headingClass}>6. Services and recipients</h2><p className="mt-3">The website may use Vercel for hosting and technical delivery, Tally for enquiry forms, Calendly for booking, Google Analytics when you consent, and email or messaging services when you choose those channels. Payment providers receive the information required to process a payment. Each provider handles data for its own function under its applicable terms.</p></section>
          <section><h2 className={headingClass}>7. International transfers</h2><p className="mt-3">The operator and some service providers may process data outside your country or the European Economic Area. Where applicable law requires safeguards for an international transfer, the relevant provider or controller is expected to use an available lawful mechanism.</p></section>
          <section><h2 className={headingClass}>8. Retention</h2><p className="mt-3">Data is kept only for as long as reasonably needed for the enquiry, service, contract, accounting, dispute-resolution, security or applicable legal requirement. Different records may therefore have different retention periods. Data that is no longer required is deleted or anonymised where reasonably practicable.</p></section>
          <section><h2 className={headingClass}>9. Your rights</h2><p className="mt-3">Subject to applicable law, you may request access, correction, deletion, restriction or portability, object to processing, or withdraw consent. You may also have the right to complain to a competent data-protection authority. Contact <a className={linkClass} href={`mailto:${email}`}>{email}</a> to make a request.</p></section>
          <section><h2 className={headingClass}>10. Cookies and analytics</h2><p className="mt-3">Essential browser storage remembers your privacy choice and supports security. Google Analytics is loaded only after you allow optional analytics and only when a measurement identifier is configured for the English website. You can change your choice through Cookie settings in the footer. No Yandex analytics is used on the English site.</p></section>
          <section><h2 className={headingClass}>11. Security and children’s data</h2><p className="mt-3">Reasonable technical and organizational measures are used to protect information, but no online transmission or storage system can be guaranteed completely secure. The website and paid formats are not directed to children, and children should not submit personal data without the involvement of a parent or legal guardian where required.</p></section>
          <section><h2 className={headingClass}>12. Updates</h2><p className="mt-3">This policy may be updated when the website, services, providers or legal requirements change. The current version and its revision date will appear on this page.</p><p className="mt-3">Related document: <Link className={linkClass} href="/terms">Terms of use and payment</Link>.</p></section>
        </div>
      </div>
    </article>
  );
}
