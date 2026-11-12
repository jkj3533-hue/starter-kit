"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import {
  useBoolean,
  useDebounceValue,
  useInterval,
  useLocalStorage,
  useMediaQuery,
  useToggle,
} from "usehooks-ts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 서버 화면과 브라우저 화면이 달라 생기는 오류를 막기 위해, 브라우저에서 처음 그릴 때까지 기본값을 씁니다.
const clientOnlyOptions = { initializeWithValue: false };

export function HooksDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <MediaQueryCard />
      <LocalStorageCard />
      <DebounceCard />
      <ToggleCard />
      <TimerCard />
    </div>
  );
}

// 1) useMediaQuery: 화면 크기가 조건에 맞는지 알려줍니다.
function MediaQueryCard() {
  const isMobile = useMediaQuery("(max-width: 768px)", clientOnlyOptions);
  const isTablet = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)",
    clientOnlyOptions,
  );
  const isDesktop = useMediaQuery("(min-width: 1025px)", clientOnlyOptions);

  const rows = [
    { label: "모바일 (768px 이하)", icon: Smartphone, isActive: isMobile },
    { label: "태블릿 (769px ~ 1024px)", icon: Tablet, isActive: isTablet },
    { label: "데스크톱 (1025px 이상)", icon: Monitor, isActive: isDesktop },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>useMediaQuery</CardTitle>
        <CardDescription>
          브라우저 창 크기를 감지합니다. 창 크기를 바꿔 보세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2 text-sm">
            <Badge variant={row.isActive ? "default" : "outline"}>
              <row.icon />
              {row.label}
            </Badge>
            <span className="text-muted-foreground">
              {row.isActive ? "활성" : "비활성"}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// 2) useLocalStorage: 값이 브라우저에 저장되어 새로고침해도 남아 있습니다.
function LocalStorageCard() {
  const [name, setName] = useLocalStorage("starter-demo-name", "", clientOnlyOptions);

  return (
    <Card>
      <CardHeader>
        <CardTitle>useLocalStorage</CardTitle>
        <CardDescription>
          입력한 값이 자동으로 저장됩니다. 새로고침해도 유지돼요.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Label htmlFor="local-storage-name">이름</Label>
        <Input
          id="local-storage-name"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          저장된 값: {name === "" ? "(없음)" : name}
        </p>
      </CardContent>
    </Card>
  );
}

// 3) useDebounceValue: 입력이 멈춘 뒤 일정 시간이 지나야 값이 바뀝니다. (검색 요청 횟수를 줄일 때 유용)
function DebounceCard() {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useDebounceValue("", 500);

  const handleChange = (value: string) => {
    setKeyword(value);
    setDebouncedKeyword(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>useDebounceValue</CardTitle>
        <CardDescription>
          입력을 멈추고 0.5초가 지나야 아래 값이 바뀝니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Label htmlFor="debounce-keyword">검색어</Label>
        <Input
          id="debounce-keyword"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(event) => handleChange(event.target.value)}
        />
        <p className="text-sm">실시간 값: {keyword}</p>
        <p className="text-sm">디바운스된 값: {debouncedKeyword}</p>
      </CardContent>
    </Card>
  );
}

// 4) useToggle: true/false 상태를 쉽게 바꿉니다.
function ToggleCard() {
  const [isOn, toggle, setIsOn] = useToggle(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>useToggle</CardTitle>
        <CardDescription>켜짐/꺼짐 상태를 간단히 관리합니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Button onClick={toggle}>토글 ({isOn ? "ON" : "OFF"})</Button>
          <Button variant="outline" onClick={() => setIsOn(true)}>
            ON
          </Button>
          <Button variant="outline" onClick={() => setIsOn(false)}>
            OFF
          </Button>
        </div>
        <p className="text-sm">
          현재 상태: <strong>{isOn ? "활성화됨" : "비활성화됨"}</strong>
        </p>
      </CardContent>
    </Card>
  );
}

// 5) useInterval + useBoolean: 일정 간격으로 함수를 실행하는 타이머
function TimerCard() {
  const [seconds, setSeconds] = useState(0);
  const { value: isRunning, toggle: toggleRunning } = useBoolean(false);

  // delay에 null을 주면 멈추고, 1000을 주면 1초마다 실행됩니다.
  useInterval(() => setSeconds((prev) => prev + 1), isRunning ? 1000 : null);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>타이머 예제</CardTitle>
        <CardDescription>useInterval과 useBoolean을 함께 사용합니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <p className="text-5xl font-bold tabular-nums">
          {minutes}:{rest}
        </p>
        <div className="flex gap-2">
          <Button onClick={toggleRunning}>{isRunning ? "일시정지" : "시작"}</Button>
          <Button
            variant="outline"
            onClick={() => {
              setSeconds(0);
            }}
          >
            초기화
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
