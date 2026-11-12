"use client";

import { CircleAlert, Info } from "lucide-react";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";

type ShowcaseSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

// 컴포넌트 한 종류를 카드 한 장으로 보여주는 공통 틀
function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
    </Card>
  );
}

export function ComponentShowcase() {
  // 진행률 바 예제에서 쓰는 값 (0~100)
  const [progress, setProgress] = useState(60);

  return (
    <div className="flex flex-col gap-6">
      <ShowcaseSection
        title="버튼 (Button)"
        description="다양한 스타일과 크기의 버튼입니다."
      >
        <div className="flex flex-wrap gap-2">
          <Button>기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">아웃라인</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="destructive">삭제</Button>
          <Button variant="link">링크</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">작은 버튼</Button>
          <Button>기본 버튼</Button>
          <Button size="lg">큰 버튼</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button disabled>비활성</Button>
          <Button
            variant="outline"
            onClick={() => toast.success("토스트 알림이 표시되었습니다.")}
          >
            토스트 보기
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="입력 필드 (Input)"
        description="사용자 입력을 받는 다양한 형태의 입력 필드입니다."
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="showcase-email">이메일</Label>
          <Input id="showcase-email" type="email" placeholder="name@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="showcase-password">비밀번호</Label>
          <Input
            id="showcase-password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="showcase-search">검색</Label>
          <Input id="showcase-search" type="search" placeholder="검색어를 입력하세요" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="배지 (Badge)"
        description="상태나 분류를 짧게 표시합니다."
      >
        <div className="flex flex-wrap gap-2">
          <Badge>기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="outline">아웃라인</Badge>
          <Badge variant="destructive">경고</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="알림 (Alert)"
        description="화면 안에 고정으로 보이는 안내 메시지입니다."
      >
        <Alert>
          <Info />
          <AlertTitle>안내</AlertTitle>
          <AlertDescription>일반적인 정보를 알려줄 때 사용합니다.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <CircleAlert />
          <AlertTitle>오류</AlertTitle>
          <AlertDescription>문제가 생겼을 때 사용합니다.</AlertDescription>
        </Alert>
      </ShowcaseSection>

      <ShowcaseSection
        title="선택 컨트롤"
        description="Select, Checkbox, RadioGroup, Switch입니다."
      >
        <div className="flex flex-col gap-2">
          <Label>역할</Label>
          <Select>
            <SelectTrigger className="w-full sm:w-64">
              <SelectValue placeholder="역할을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">개발자</SelectItem>
              <SelectItem value="designer">디자이너</SelectItem>
              <SelectItem value="manager">매니저</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="showcase-terms" />
          <Label htmlFor="showcase-terms">이용 약관에 동의합니다</Label>
        </div>

        <RadioGroup defaultValue="monthly">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <Label htmlFor="plan-monthly">월간 결제</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <Label htmlFor="plan-yearly">연간 결제</Label>
          </div>
        </RadioGroup>

        <div className="flex items-center gap-2">
          <Switch id="showcase-notify" />
          <Label htmlFor="showcase-notify">알림 받기</Label>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="진행 상태와 로딩"
        description="Progress, Skeleton, Avatar입니다."
      >
        <div className="flex flex-col gap-2">
          <Progress value={progress} />
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setProgress((prev) => Math.max(0, prev - 10))}
            >
              -10
            </Button>
            <span className="text-sm tabular-nums">{progress}%</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setProgress((prev) => Math.min(100, prev + 10))}
            >
              +10
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        <div className="flex gap-2">
          <Avatar>
            <AvatarFallback>김</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>이</AvatarFallback>
          </Avatar>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="대화상자 (Dialog)"
        description="화면 위에 떠서 사용자의 확인을 받는 창입니다."
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-fit">
              대화상자 열기
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>정말 진행할까요?</DialogTitle>
              <DialogDescription>
                이 작업은 예제이므로 실제로 변경되는 내용은 없습니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">취소</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={() => toast.success("확인했습니다.")}>확인</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>
    </div>
  );
}
