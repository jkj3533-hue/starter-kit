"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

// 라이트/다크 모드를 전환하는 버튼
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="테마 전환"
    >
      {/* CSS(dark:)로 아이콘을 바꾸면 서버/클라이언트 불일치(hydration) 오류가 생기지 않습니다 */}
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </Button>
  );
}
