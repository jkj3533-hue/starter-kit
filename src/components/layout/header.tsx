import { Rocket } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// 상단 고정 헤더: 로고, 데스크톱 메뉴, 테마 전환 버튼
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-4">
        <MobileNav />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="size-5" />
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        {/* 데스크톱(md 이상)에서만 보이는 메뉴 */}
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
