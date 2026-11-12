import {
  BadgeCheck,
  Code,
  Database,
  Palette,
  Puzzle,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// 기능 카드 목록: 이 프로젝트에 실제로 들어 있는 것만 적었습니다.
const features: Feature[] = [
  {
    icon: Zap,
    title: "빠른 성능",
    description: "Next.js 16과 Turbopack으로 빠른 개발 서버와 빌드를 제공합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안정성",
    description: "TypeScript로 실행하기 전에 실수를 미리 잡아 줍니다.",
  },
  {
    icon: Palette,
    title: "아름다운 디자인",
    description: "shadcn/ui와 Tailwind CSS v4로 일관된 디자인을 쉽게 만듭니다.",
  },
  {
    icon: Code,
    title: "개발자 경험",
    description: "ESLint와 @/ 경로 별칭으로 쾌적하게 개발할 수 있습니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description: "모바일 메뉴와 usehooks-ts 훅으로 모든 화면 크기에 대응합니다.",
  },
  {
    icon: Search,
    title: "SEO 기본 설정",
    description: "Metadata API로 제목 형식과 설명을 한 곳에서 관리합니다.",
  },
  {
    icon: Puzzle,
    title: "확장 가능한 구조",
    description: "역할별 폴더 구조와 재사용 컴포넌트로 기능을 쉽게 더합니다.",
  },
  {
    icon: BadgeCheck,
    title: "기본 페이지 제공",
    description: "404, 에러, 로딩 화면이 처음부터 준비되어 있습니다.",
  },
  {
    icon: Database,
    title: "상태 관리와 폼",
    description: "Zustand, React Hook Form, Zod 사용 예제가 들어 있습니다.",
  },
];

// 주요 기능 소개: 배경색을 살짝 달리해서 앞뒤 섹션과 구분합니다.
export function Features() {
  return (
    <section id="features" className="scroll-mt-14 bg-muted/40 py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
          <p className="text-muted-foreground">
            바로 개발을 시작할 수 있도록 필요한 것들을 미리 준비했습니다.
          </p>
        </div>

        {/* 화면이 좁으면 1열, 넓어지면 2~3열로 자동 변경 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 size-6" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
