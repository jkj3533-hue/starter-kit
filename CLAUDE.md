# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 안내서입니다.

## 명령어

```bash
npm run dev        # 개발 서버 (http://localhost:3000)
npm run build      # 프로덕션 빌드
npm run start      # 빌드 결과 실행
npm run lint       # ESLint 검사
npm run lint:fix   # ESLint 자동 수정
npx shadcn@latest add <컴포넌트>   # shadcn/ui 컴포넌트 추가 (src/components/ui/에 생성)
```

테스트 러너는 설정되어 있지 않습니다.

## 중요: 이 Next.js는 학습 데이터와 다르다

Next.js 16.4 + React 19 + Zod 4 + Tailwind v4 조합입니다. 코드를 쓰기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽으세요 (`AGENTS.md` 참고). 이미 이 프로젝트에서 확인된 차이점:

- `error.tsx`의 props는 `reset`이 아니라 **`retry`** 입니다.
- 페이지/레이아웃 props 타입은 전역 헬퍼를 사용합니다 (예: `LayoutProps<"/">`). 별도 import 불필요.
- Zod 4: `z.email()`을 사용합니다 (`z.string().email()` 아님).
- Tailwind v4: `tailwind.config` 파일이 없고 모든 설정이 `src/app/globals.css`에 있습니다 (`@theme inline`, `@custom-variant dark`).
- shadcn 스타일은 `base-nova`(Base UI 기반)입니다. 트리거 요소를 바꿀 때 `asChild`가 아니라 **`render` 속성**을 사용합니다.
- `cn` 함수는 `cn` npm 패키지를 쓰며, 항상 `@/lib/utils`에서 import 합니다 (`clsx`/`tailwind-merge` 직접 사용 아님).
- Cache Components는 의도적으로 꺼져 있습니다 (`next.config.ts`).

## 아키텍처

`src/` 아래 App Router 프론트엔드 스타터이며 백엔드/API 레이어는 없습니다. 경로 별칭은 `@/*` → `src/*`.

- `src/app/layout.tsx`: 루트 레이아웃. `ThemeProvider`(next-themes, `class` 방식 다크 모드) → `Header` / `<main>`(max-w-5xl) / `Footer` / `Toaster`(sonner) 순으로 감쌉니다. `<html>`에 `suppressHydrationWarning`이 필요한 이유는 next-themes가 `dark` 클래스를 붙이기 때문입니다.
- `src/config/site.ts`: 사이트 이름/설명과 `navItems`의 단일 출처. 헤더와 `mobile-nav`가 모두 이를 읽으므로 메뉴 추가는 여기서만 합니다.
- `src/components/ui/`: shadcn 생성 컴포넌트 (직접 수정보다 CLI 재생성 우선). `layout/`은 헤더·푸터·모바일 메뉴, `examples/`는 예제 전용.
- 폼 패턴 (`components/examples/contact-form.tsx`): Zod 스키마를 `src/lib/validations/`에 두고 `z.infer`로 타입을 만든 뒤, React Hook Form의 `zodResolver` + `Controller` + shadcn `Field`/`FieldError` 조합으로 연결합니다.
- 상태관리 패턴 (`src/stores/counter-store.ts`): Zustand 스토어 하나에 상태와 변경 함수를 함께 정의합니다.
- 서버 컴포넌트가 기본이며, 훅/브라우저 API를 쓰는 파일만 `"use client"`를 붙입니다 (예: `theme-provider.tsx`, `error.tsx`).

## 프로젝트 규칙 (전역 CLAUDE.md에서 이어짐)

- 응답, 코드 주석(비즈니스 로직 위주), 커밋 메시지, 문서는 한국어. 변수/함수명은 영어.
- `any` 금지, 2칸 들여쓰기, 반응형 필수, 에러 핸들링 필수.
- 스택: Tailwind CSS, shadcn/ui, Zustand, React Hook Form + Zod.
