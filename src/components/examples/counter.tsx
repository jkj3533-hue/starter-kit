"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/stores/counter-store";

export function Counter() {
  // 필요한 값만 골라서 꺼내면, 그 값이 바뀔 때만 다시 그려집니다.
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-5xl font-bold tabular-nums">{count}</p>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" onClick={decrement} aria-label="감소">
          <Minus className="size-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={reset} aria-label="초기화">
          <RotateCcw className="size-4" />
        </Button>
        <Button size="icon" onClick={increment} aria-label="증가">
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}
