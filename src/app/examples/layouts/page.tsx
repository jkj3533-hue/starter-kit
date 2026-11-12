import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { LayoutDemo } from "@/components/examples/layout-demo";

export const metadata: Metadata = { title: "레이아웃 예제" };

export default function LayoutsExamplePage() {
  return (
    <>
      <ExamplePageHeader
        title="레이아웃 예제"
        description="다양한 레이아웃 패턴과 반응형 디자인 구현 방법을 확인하세요."
      />
      <LayoutDemo />
    </>
  );
}
