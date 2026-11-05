// 사이트 전역 설정: 이름과 메뉴를 한 곳에서 관리합니다.
export const siteConfig = {
  name: "Next.js 스타터 킷",
  description:
    "Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 빠르게 시작하는 웹 개발 스타터 킷",
  navItems: [
    { label: "홈", href: "/" },
    { label: "폼 예제", href: "/examples/form" },
    { label: "스토어 예제", href: "/examples/store" },
  ],
} as const;
