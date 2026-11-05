import { Loader2 } from "lucide-react";

// 페이지가 준비되는 동안 자동으로 보여지는 로딩 화면
export default function Loading() {
  return (
    <div className="flex justify-center py-16">
      <Loader2 className="size-8 animate-spin text-muted-foreground" />
    </div>
  );
}
