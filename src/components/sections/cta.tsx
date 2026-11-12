import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

// 페이지 맨 아래에서 시작을 유도하는 영역
export function Cta() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          지금 바로 시작하세요
        </h2>
        <p className="max-w-xl text-muted-foreground">
          복잡한 설정 없이 바로 개발을 시작할 수 있습니다.
        </p>

        <Link href="/examples" className={buttonVariants({ size: "lg" })}>
          예제 둘러보기
        </Link>

        <div className="w-full max-w-md rounded-lg border bg-muted/40 p-4 text-left">
          <p className="mb-2 text-center text-sm text-muted-foreground">
            빠른 시작
          </p>
          <pre className="overflow-x-auto rounded-md bg-background p-3 text-sm">
            <code>{"npm install\nnpm run dev"}</code>
          </pre>
        </div>
      </Container>
    </section>
  );
}
