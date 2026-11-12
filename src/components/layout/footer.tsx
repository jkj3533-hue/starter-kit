import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

// 푸터에 보여줄 링크 묶음: 그룹을 추가하면 열이 자동으로 늘어납니다.
const footerLinkGroups = [
  {
    title: "둘러보기",
    links: [
      { label: "주요 기능", href: "/#features" },
      { label: "예제", href: "/examples" },
    ],
  },
  {
    title: "공식 문서",
    links: [
      { label: "Next.js", href: "https://nextjs.org/docs" },
      { label: "Tailwind CSS", href: "https://tailwindcss.com/docs" },
      { label: "shadcn/ui", href: "https://ui.shadcn.com/docs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              모던 웹 개발을 빠르게 시작하기 위한 스타터 킷입니다.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <p className="text-sm font-semibold">{group.title}</p>
              <ul className="flex flex-col gap-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
