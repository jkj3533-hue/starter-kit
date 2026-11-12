import type { Metadata } from "next";

import { ComponentShowcase } from "@/components/examples/component-showcase";
import { ExamplePageHeader } from "@/components/examples/example-page-header";

export const metadata: Metadata = { title: "컴포넌트 쇼케이스" };

export default function ComponentsExamplePage() {
  return (
    <>
      <ExamplePageHeader
        title="컴포넌트 쇼케이스"
        description="shadcn/ui 컴포넌트들의 실제 동작을 확인해 보세요."
      />
      <ComponentShowcase />
    </>
  );
}
