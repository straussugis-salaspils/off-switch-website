const configuredGroupInquiryUrl = process.env.NEXT_PUBLIC_GROUP_INQUIRY_URL?.trim();

/**
 * The Group page must never fall through to the private 1:1 Calendly event.
 * The dedicated English application form is the stable default. Production
 * can still replace it through one environment variable if the form changes.
 */
export const groupInquiryUrl = configuredGroupInquiryUrl || "https://tally.so/r/ODqkr7";
