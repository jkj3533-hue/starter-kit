import type { Metadata } from "next";

import { DataFetchingDemo } from "@/components/examples/data-fetching-demo";
import { ExamplePageHeader } from "@/components/examples/example-page-header";

export const metadata: Metadata = { title: "데이터 페칭 예제" };

export default function DataExamplePage() {
  return (
    <>
      <ExamplePageHeader
        title="데이터 페칭 예제"
        description="로딩, 성공, 오류 상태를 나눠서 처리하는 방법을 확인하세요."
      />
      <DataFetchingDemo />
    </>
  );
}
