import Button from "@/components/ui/Button";

const TALLY_INQUIRY_URL = "https://tally.so/r/441ZOd";

export default function InquiryForm() {
  return (
    <div className="border border-border bg-white p-8 lg:p-10">
      <p className="mb-4 font-serif text-2xl font-normal text-ink">Open the inquiry form</p>
      <p className="mb-8 text-base leading-relaxed text-muted">
        Organizational enquiries are collected through a secure external form. Your answers are processed outside this website after you submit them.
      </p>
      <Button href={TALLY_INQUIRY_URL} variant="primary" size="md">
        Continue to the inquiry form
      </Button>
    </div>
  );
}
