# Next.js 스타터 킷

웹 개발을 빠르게 시작할 수 있는 스타터 킷입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (`tailwind.config` 파일 없음, `src/app/globals.css`에서 설정)
- shadcn/ui (Radix 기반, Nova 스타일) + lucide-react
- usehooks-ts (자주 쓰는 React 훅)
- next-themes (다크 모드)
- Zustand (상태 관리)
- React Hook Form + Zod (폼과 검증)

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열어 확인합니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | 코드 검사 |

## 폴더 구조

```
src/
  app/              페이지와 라우트 (layout, page, error, not-found, loading)
    examples/       예제 목록, 컴포넌트, 폼, 레이아웃, 훅, 데이터 페칭, 설정, 스토어
  components/
    ui/             shadcn/ui 컴포넌트 (CLI로 추가)
    layout/         헤더, 푸터, Container
    navigation/     데스크톱 메뉴, 모바일 메뉴
    sections/       홈 페이지 섹션 (Hero, Features, CTA)
    providers/      테마 프로바이더
    examples/       예제 전용 컴포넌트
  config/site.ts    사이트 이름과 메뉴 설정
  lib/              유틸 함수(cn), Zod 스키마(validations/), 예제용 가짜 API
  stores/           Zustand 스토어
```

| 경로 | 설명 |
| --- | --- |
| `/` | 홈 (Hero, 주요 기능, CTA) |
| `/examples` | 예제 목록 |
| `/examples/components` | shadcn/ui 컴포넌트 쇼케이스 |
| `/examples/form` | React Hook Form + Zod 폼 |
| `/examples/layouts` | 반응형 레이아웃 패턴 |
| `/examples/hooks` | usehooks-ts 훅 예제 |
| `/examples/data` | 로딩/성공/오류 상태 처리 |
| `/examples/config` | 성능·보안·SEO 설정 가이드 |
| `/examples/store` | Zustand 전역 상태 |

## 자주 하는 작업

- **메뉴 추가**: `src/config/site.ts`의 `navItems`에 항목을 추가합니다.
- **shadcn 컴포넌트 추가**: `npx shadcn@latest add dialog` 처럼 실행합니다.
- **새 페이지 추가**: `src/app/원하는경로/page.tsx` 파일을 만듭니다.
- **아이콘 사용**: `import { Heart } from "lucide-react"`

## 참고

- 이 프로젝트의 shadcn 스타일은 Radix 기반(`radix-nova`)입니다. 트리거 요소를 바꿀 때 `asChild`를 사용합니다.
- Playwright MCP는 `.mcp.json`에 설정되어 있어, Claude Code에서 브라우저를 직접 조작해 오류를 확인할 수 있습니다. `/mcp`로 연결 상태를 확인하세요.
- Next.js 16에서는 `error.tsx`에서 `reset` 대신 `retry`를 사용합니다.
- 클래스 이름을 합치는 `cn` 함수는 shadcn 공식 가이드대로 `cn` 패키지를 사용합니다. (`src/lib/utils.ts`에서 다시 내보냄)
- 폼은 shadcn 공식 방식인 `Controller` + `Field` + `FieldError` 조합으로 만들었습니다. (`src/components/examples/contact-form.tsx` 참고)
- Cache Components는 입문 편의를 위해 꺼 두었습니다. 사용하려면 `next.config.ts`에 `cacheComponents: true`를 추가하세요.
