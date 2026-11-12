"use client";

import { useMediaQuery } from "usehooks-ts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 보여줄 칸의 번호 목록
const boxes = [1, 2, 3, 4];

// 색칠된 칸 하나: 레이아웃이 어떻게 배치되는지 눈으로 보기 위한 용도
function DemoBox({ label }: { label: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-md border bg-muted text-sm font-medium">
      {label}
    </div>
  );
}

// 지금 화면 폭이 Tailwind의 어느 구간(breakpoint)에 해당하는지 계산합니다.
function useBreakpointName(): string {
  const isXl = useMediaQuery("(min-width: 1280px)", { initializeWithValue: false });
  const isLg = useMediaQuery("(min-width: 1024px)", { initializeWithValue: false });
  const isMd = useMediaQuery("(min-width: 768px)", { initializeWithValue: false });
  const isSm = useMediaQuery("(min-width: 640px)", { initializeWithValue: false });

  if (isXl) return "xl (1280px 이상)";
  if (isLg) return "lg (1024px 이상)";
  if (isMd) return "md (768px 이상)";
  if (isSm) return "sm (640px 이상)";
  return "기본 (640px 미만)";
}

export function LayoutDemo() {
  const breakpointName = useBreakpointName();

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>현재 화면 구간</CardTitle>
          <CardDescription>
            브라우저 창 폭을 줄이거나 늘려 보세요. 아래 예제의 배치가 함께 바뀝니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge>{breakpointName}</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>반응형 그리드</CardTitle>
          <CardDescription>
            1열 → 2열(sm) → 4열(lg)로 늘어납니다. (grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {boxes.map((box) => (
              <DemoBox key={box} label={`칸 ${box}`} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>사이드바 레이아웃</CardTitle>
          <CardDescription>
            좁은 화면에서는 위아래로 쌓이고, md 이상에서는 좌우로 나뉩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-[12rem_1fr]">
            <div className="flex h-32 items-center justify-center rounded-md border bg-muted text-sm font-medium">
              사이드바
            </div>
            <div className="flex h-32 items-center justify-center rounded-md border text-sm font-medium">
              메인 콘텐츠
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>방향 전환 (flex)</CardTitle>
          <CardDescription>
            좁은 화면에서는 세로, sm 이상에서는 가로로 배치됩니다. (flex-col
            sm:flex-row)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row">
            {boxes.slice(0, 3).map((box) => (
              <div key={box} className="flex-1">
                <DemoBox label={`항목 ${box}`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
