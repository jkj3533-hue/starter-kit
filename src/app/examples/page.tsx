import {
  Boxes,
  Code,
  Database,
  FileText,
  LayoutDashboard,
  Settings,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "예제" };

type ExampleItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tags: string[];
};

// 예제 목록: 항목을 추가하면 카드가 자동으로 늘어납니다.
const exampleItems: ExampleItem[] = [
  {
    icon: Boxes,
    title: "컴포넌트 쇼케이스",
    description: "shadcn/ui 컴포넌트의 실제 동작을 확인해 보세요.",
    href: "/examples/components",
    tags: ["UI", "인터랙티브"],
  },
  {
    icon: FileText,
    title: "폼 예제",
    description: "React Hook Form과 Zod로 만든 입력 검증 폼입니다.",
    href: "/examples/form",
    tags: ["검증", "폼"],
  },
  {
    icon: LayoutDashboard,
    title: "레이아웃 예제",
    description: "반응형 레이아웃 패턴과 화면 구간(breakpoint)을 확인합니다.",
    href: "/examples/layouts",
    tags: ["반응형", "레이아웃"],
  },
  {
    icon: Code,
    title: "usehooks-ts 예제",
    description: "자주 쓰는 React 훅을 라이브러리로 간단히 사용합니다.",
    href: "/examples/hooks",
    tags: ["훅", "유틸리티"],
  },
  {
    icon: Database,
    title: "데이터 페칭",
    description: "로딩, 성공, 오류 상태를 나눠서 처리하는 예제입니다.",
    href: "/examples/data",
    tags: ["비동기", "에러 처리"],
  },
  {
    icon: Settings,
    title: "설정 가이드",
    description: "성능, 보안, SEO를 위해 알아두면 좋은 Next.js 설정입니다.",
    href: "/examples/config",
    tags: ["최적화", "SEO"],
  },
  {
    icon: Store,
    title: "스토어 예제",
    description: "Zustand로 만든 전역 상태 관리 카운터입니다.",
    href: "/examples/store",
    tags: ["Zustand", "상태 관리"],
  },
];

export default function ExamplesPage() {
  return (
    <>
      <ExamplePageHeader
        title="예제 모음"
        description="실제로 동작하는 예제로 스타터 킷의 기능을 살펴보세요."
      />

      {/* 화면이 좁으면 1열, 넓어지면 2~3열로 자동 변경 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exampleItems.map((item) => (
          <Card key={item.href} className="flex flex-col">
            <CardHeader>
              <item.icon className="mb-2 size-6" />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={item.href} className={buttonVariants()}>
                예제 보기
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
