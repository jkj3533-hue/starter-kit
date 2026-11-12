import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { HooksDemo } from "@/components/examples/hooks-demo";

export const metadata: Metadata = { title: "usehooks-ts 예제" };

export default function HooksExamplePage() {
  return (
    <>
      <ExamplePageHeader
        title="usehooks-ts 예제"
        description="실용적인 React 훅들의 다양한 사용 예제입니다."
      />
      <HooksDemo />
    </>
  );
}
