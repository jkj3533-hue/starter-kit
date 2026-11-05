import type { Metadata } from "next";

import { Counter } from "@/components/examples/counter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "스토어 예제" };

export default function StoreExamplePage() {
  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>Zustand 카운터</CardTitle>
        <CardDescription>
          전역 상태 관리 예제입니다. 다른 페이지로 이동했다 와도 값이 유지됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Counter />
      </CardContent>
    </Card>
  );
}
