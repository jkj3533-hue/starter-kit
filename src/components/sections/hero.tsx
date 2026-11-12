import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// 히어로 아래에 한 줄로 보여줄 기술 스택
const techStack = [
  { name: "Next.js 16", description: "App Router" },
  { name: "TypeScript", description: "타입 안정성" },
  { name: "Tailwind CSS", description: "유틸리티 CSS" },
  { name: "shadcn/ui", description: "컴포넌트 라이브러리" },
];

// 홈 첫 화면: 제목, 소개, 버튼, 기술 스택
export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js 16 기반 스타터 킷</Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          모던 웹 개발을 위한
          <br />
          완벽한 스타터 킷
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          {siteConfig.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/examples" className={buttonVariants({ size: "lg" })}>
            예제 보기
          </Link>
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            문서 보기
          </Link>
        </div>

        {/* 화면이 좁으면 2열, 넓으면 4열 */}
        <dl className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col gap-1">
              <dt className="text-lg font-semibold">{tech.name}</dt>
              <dd className="text-sm text-muted-foreground">
                {tech.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
