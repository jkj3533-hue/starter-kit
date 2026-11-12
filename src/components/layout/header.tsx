import { Rocket } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/navigation/main-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";

// 상단 고정 헤더: 로고, 데스크톱 메뉴, 테마 전환 버튼
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center gap-2">
        <MobileNav />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="size-5" />
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <MainNav />

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
