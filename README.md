# Next.js 스타터 킷

웹 개발을 빠르게 시작할 수 있는 스타터 킷입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (`tailwind.config` 파일 없음, `src/app/globals.css`에서 설정)
- shadcn/ui + lucide-react
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
    examples/       폼 예제, 스토어 예제
  components/
    ui/             shadcn/ui 컴포넌트 (CLI로 추가)
    layout/         헤더, 푸터, 모바일 메뉴
    examples/       예제 전용 컴포넌트
  config/site.ts    사이트 이름과 메뉴 설정
  lib/              유틸 함수(cn), Zod 스키마(validations/)
  stores/           Zustand 스토어
```

## 자주 하는 작업

- **메뉴 추가**: `src/config/site.ts`의 `navItems`에 항목을 추가합니다.
- **shadcn 컴포넌트 추가**: `npx shadcn@latest add dialog` 처럼 실행합니다.
- **새 페이지 추가**: `src/app/원하는경로/page.tsx` 파일을 만듭니다.
- **아이콘 사용**: `import { Heart } from "lucide-react"`

## 참고

- 이 프로젝트의 shadcn 스타일은 Base UI 기반입니다. 트리거 요소를 바꿀 때 `asChild` 대신 `render` 속성을 사용합니다.
- Next.js 16에서는 `error.tsx`에서 `reset` 대신 `retry`를 사용합니다.
- 클래스 이름을 합치는 `cn` 함수는 shadcn 공식 가이드대로 `cn` 패키지를 사용합니다. (`src/lib/utils.ts`에서 다시 내보냄)
- 폼은 shadcn 공식 방식인 `Controller` + `Field` + `FieldError` 조합으로 만들었습니다. (`src/components/examples/contact-form.tsx` 참고)
- Cache Components는 입문 편의를 위해 꺼 두었습니다. 사용하려면 `next.config.ts`에 `cacheComponents: true`를 추가하세요.
