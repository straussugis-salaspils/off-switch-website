import type { ReactNode } from "react";

import IssueArticleIndex from "@/components/library/IssueArticleIndex";

export default function MethodLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <IssueArticleIndex hub="/the-method" />
    </>
  );
}
