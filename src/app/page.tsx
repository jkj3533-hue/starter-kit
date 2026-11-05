import { Layers, Moon, Palette, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

// 홈에 보여줄 기능 소개 카드 목록
const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description: "최신 App Router와 Turbopack으로 빠르게 개발합니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "설정 파일(tailwind.config) 없이 CSS만으로 테마를 관리합니다.",
  },
  {
    icon: Layers,
    title: "shadcn/ui",
    description: "복사해서 내 코드로 쓰는 컴포넌트로 자유롭게 수정할 수 있습니다.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "시스템 설정을 따르고, 버튼으로 직접 전환할 수도 있습니다.",
  },
  {
    icon: ShieldCheck,
    title: "폼 검증",
    description: "React Hook Form과 Zod로 안전한 입력 검증을 제공합니다.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center gap-4 py-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-xl text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/examples/form"
            className={buttonVariants({ size: "lg" })}
          >
            폼 예제 보기
          </Link>
          <Link
            href="/examples/store"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            스토어 예제 보기
          </Link>
        </div>
      </section>

      {/* 화면이 좁으면 1열, 넓어지면 2~3열로 자동 변경 */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 size-6" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
