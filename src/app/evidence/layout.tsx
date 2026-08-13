import type { ReactNode } from "react";

import SectionNavigation from "@/components/layout/SectionNavigation";

const items = [
  { label: "Overview", href: "/evidence" },
  { label: "Driving panic", href: "/evidence/driving-panic" },
  { label: "After stroke", href: "/evidence/anxiety-after-stroke" },
  { label: "PTSD and burnout", href: "/evidence/complex-ptsd-burnout" },
  { label: "Senior leader", href: "/evidence/institutional-leader" },
  { label: "Ukraine programme", href: "/evidence/ukraine-2022" },
] as const;

export default function EvidenceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SectionNavigation items={items} label="Evidence and cases" />
      {children}
    </>
  );
}
