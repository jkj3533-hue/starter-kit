import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";

// 홈 페이지: 섹션 컴포넌트를 위에서 아래로 쌓기만 합니다.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
}
