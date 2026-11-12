import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

// 화면 가운데에 내용을 모아 주는 공통 상자: 최대 너비와 좌우 여백을 한 곳에서 관리합니다.
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-4", className)} {...props} />
  );
}
