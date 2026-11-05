"use client"; // 에러 바운더리는 반드시 클라이언트 컴포넌트여야 합니다.

import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    // TODO: 에러 모니터링 서비스(예: Sentry)로 전송하는 코드를 여기에 추가하세요.
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <TriangleAlert className="size-10 text-destructive" />
      <h2 className="text-xl font-semibold">문제가 발생했습니다</h2>
      <p className="text-sm text-muted-foreground">
        잠시 후 다시 시도해 주세요.
      </p>
      <Button onClick={() => retry()}>다시 시도</Button>
    </div>
  );
}
