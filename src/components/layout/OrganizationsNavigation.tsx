import SectionNavigation from "@/components/layout/SectionNavigation";

const items = [
  { label: "For organizations", href: "/for-organizations" },
  { label: "Field application", href: "/evidence/ukraine-2022" },
  { label: "Discuss the situation", href: "/institutional-inquiry" },
] as const;

export default function OrganizationsNavigation() {
  return <SectionNavigation items={items} label="Organizational work" />;
}
