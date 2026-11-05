import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <p className="text-6xl font-bold">404</p>
      <h2 className="text-xl font-semibold">페이지를 찾을 수 없습니다</h2>
      <Link href="/" className={buttonVariants()}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
