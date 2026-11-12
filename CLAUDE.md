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
- 페이지/레이아웃 props 타입은 전역 헬퍼를 사용합니다 (예: `LayoutProps<"/">`, `LayoutProps<"/examples">`). 별도 import 불필요. 새 경로의 타입은 `next dev`/`next build`를 실행해야 생성되므로, 그 전에는 `tsc`가 오류를 낼 수 있습니다.
- Zod 4: `z.email()`을 사용합니다 (`z.string().email()` 아님).
- Tailwind v4: `tailwind.config` 파일이 없고 모든 설정이 `src/app/globals.css`에 있습니다 (`@theme inline`, `@custom-variant dark`).
- shadcn 스타일은 `radix-nova`(Radix 기반)입니다. 트리거 요소를 바꿀 때 **`asChild`** 를 사용합니다 (Base UI의 `render` 속성이 아님). 강의(Radix + Nova)와 같은 설정이며, `shadcn init`을 다시 실행할 때는 `-b radix -p nova` 옵션을 붙여야 Base로 되돌아가지 않습니다.
- `usehooks-ts`의 `useDebounce`는 없습니다. `useDebounceValue`(`[값, 변경 함수]` 반환) 또는 `useDebounceCallback`을 사용합니다. `useMediaQuery`/`useLocalStorage`는 서버 렌더링 불일치를 막기 위해 `{ initializeWithValue: false }` 옵션을 줍니다.
- JSX 안에서 `<`, `>` 문자를 그대로 쓰면 태그로 오해해 빌드가 실패합니다. 문구로 풀어 쓰거나 `{"<"}`처럼 감쌉니다.
- `cn` 함수는 `cn` npm 패키지를 쓰며, 항상 `@/lib/utils`에서 import 합니다 (`clsx`/`tailwind-merge` 직접 사용 아님).
- Cache Components는 의도적으로 꺼져 있습니다 (`next.config.ts`).

## 아키텍처

`src/` 아래 App Router 프론트엔드 스타터이며 백엔드/API 레이어는 없습니다. 경로 별칭은 `@/*` → `src/*`.

- `src/app/layout.tsx`: 루트 레이아웃. `ThemeProvider`(next-themes, `class` 방식 다크 모드) → `Header` / `<main>` / `Footer` / `Toaster`(sonner) 순으로 감쌉니다. `<main>`은 폭을 제한하지 않으며, 각 페이지/섹션이 `Container`(max-w-5xl)로 폭을 정합니다. `<html>`에 `suppressHydrationWarning`이 필요한 이유는 next-themes가 `dark` 클래스를 붙이기 때문입니다.
- `src/config/site.ts`: 사이트 이름/설명과 `navItems`(`NavItem` 타입, 외부 링크는 `external: true`)의 단일 출처. `main-nav`와 `mobile-nav`가 모두 이를 읽으므로 메뉴 추가는 여기서만 합니다.
- `src/components/ui/`: shadcn 생성 컴포넌트 (직접 수정보다 CLI 재생성 우선). 나머지 폴더: `layout/`(헤더·푸터·Container), `navigation/`(main-nav·mobile-nav), `sections/`(홈의 Hero·Features·CTA), `providers/`(theme-provider), `examples/`(예제 전용).
- 예제 페이지는 `src/app/examples/` 아래에 있으며 `examples/layout.tsx`가 공통 폭을 잡아 줍니다. 목록은 `examples/page.tsx`의 `exampleItems` 배열에서 관리합니다. 데이터 페칭 예제의 가짜 API는 `src/lib/mock-api.ts`입니다.
- `.mcp.json`: 프로젝트용 MCP 서버 설정(Playwright). `.vscode/settings.json`: Tailwind의 `@` 문법 경고를 끄는 에디터 설정.
- 폼 패턴 (`components/examples/contact-form.tsx`): Zod 스키마를 `src/lib/validations/`에 두고 `z.infer`로 타입을 만든 뒤, React Hook Form의 `zodResolver` + `Controller` + shadcn `Field`/`FieldError` 조합으로 연결합니다.
- 상태관리 패턴 (`src/stores/counter-store.ts`): Zustand 스토어 하나에 상태와 변경 함수를 함께 정의합니다.
- 서버 컴포넌트가 기본이며, 훅/브라우저 API를 쓰는 파일만 `"use client"`를 붙입니다 (예: `providers/theme-provider.tsx`, `navigation/main-nav.tsx`, `error.tsx`).

## 프로젝트 규칙 (전역 CLAUDE.md에서 이어짐)

- 응답, 코드 주석(비즈니스 로직 위주), 커밋 메시지, 문서는 한국어. 변수/함수명은 영어.
- `any` 금지, 2칸 들여쓰기, 반응형 필수, 에러 핸들링 필수.
- 스택: Tailwind CSS, shadcn/ui, Zustand, React Hook Form + Zod.
