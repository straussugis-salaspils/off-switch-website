import SectionNavigation from "@/components/layout/SectionNavigation";

const items = [
  { label: "Compare programmes", href: "/formats" },
  { label: "Private 1:1", href: "/one-to-one" },
  { label: "Group", href: "/group" },
] as const;

export default function FormatsNavigation() {
  return <SectionNavigation items={items} label="Ways to work" />;
}
