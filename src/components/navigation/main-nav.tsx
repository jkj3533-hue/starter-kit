"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// 데스크톱(md 이상)에서만 보이는 메뉴: 현재 페이지의 메뉴는 강조해서 보여줍니다.
export function MainNav() {
  // 현재 주소(예: "/examples/hooks")를 알아야 어떤 메뉴를 강조할지 정할 수 있어서 클라이언트 컴포넌트입니다.
  const pathname = usePathname();

  return (
    <nav className="ml-6 hidden items-center gap-1 md:flex">
      {siteConfig.navItems.map((item) => {
        // 홈("/")은 정확히 일치할 때만, 나머지는 하위 주소까지 포함해서 강조합니다.
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={buttonVariants({
              variant: isActive ? "secondary" : "ghost",
              size: "sm",
            })}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
