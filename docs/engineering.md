# 엔지니어링

> 스택, 폴더 구조, 코드 컨벤션, 디자인 기본 규칙을 한 곳에서 관리한다.

## 현재 스택

| 분류 | 라이브러리 |
|------|-----------|
| Framework | React 19 + Vite + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| UI | shadcn/ui (style: base-nova, `@base-ui/react`) |
| Routing | React Router v8 (`react-router`) |
| 서버 상태 | TanStack Query v5 |
| 클라이언트 상태 | Zustand v5 |
| HTTP | Axios |
| 아이콘 | Lucide React |
| 모니터링 | Sentry |
| 패키지 매니저 | pnpm |

현재 `package.json`에 설치된 의존성을 기준으로 판단한다.

## 현재 구조

```
src/
  App.tsx
  main.tsx
  index.css
  pages/
    MainPage.tsx
  components/
    ui/
      button-variants.ts
      button.tsx
      input.tsx
    layouts/
      Header.tsx
      MobileHeader.tsx
      Footer.tsx
      RootLayout.tsx
  lib/
    utils.ts
  routes/
    router.tsx
```

## 목표 구조

```
src/
  components/
    layouts/
    ui/             # shadcn 자동 생성, 직접 수정 금지
  pages/
  routes/
  hooks/
  services/
    tmdb.ts
    supabase.ts
    ai.ts
  stores/
  lib/
    utils.ts
  types/
```

## 파일 배치 기준

| 위치 | 기준 |
|------|------|
| `src/pages/` | 라우트 단위 페이지 |
| `src/components/layouts/` | 공통 레이아웃. `Outlet`은 여기서 사용 |
| `src/routes/` | React Router 라우터 객체 설정 (`createBrowserRouter`) |
| `src/components/ui/` | shadcn/ui 자동 생성. 직접 수정 금지 |
| `src/hooks/` | TanStack Query 래퍼 훅 |
| `src/services/` | 외부 API 호출 순수 함수 |
| `src/stores/` | Zustand 전역 상태 |
| `src/types/` | 전역 타입 |
| `src/lib/` | 공통 유틸 |

경로 별칭: `@` → `./src`

## 코드 컨벤션

- 함수형 컴포넌트 + `export default`
- props 타입은 컴포넌트 파일 내 `interface Props`로 정의
- 특정 페이지에서만 쓰는 컴포넌트는 해당 페이지 파일 내 유지
- 조건부 클래스는 `cn()` 사용 (`@/lib/utils`)
- API 호출은 `src/services/`에 분리
- `useQuery` / `useMutation`은 `src/hooks/`에 래핑
- 컴포넌트에서 직접 `useQuery` 작성 금지

## 상태 관리 기준

| 상태 종류 | 도구 |
|-----------|------|
| 영화 목록, 상세, 검색 결과 | TanStack Query |
| 위시리스트, 관람 기록, 알림 | TanStack Query (Supabase에서 fetch) |
| 로그인 여부, 유저 정보 | Zustand |
| 모달, 토스트 등 UI 상태 | Zustand |

Query key 예시:

```ts
['movies', 'popular']
['movies', 'search', keyword]
['movies', movieId]
```

## 디자인 기본 규칙

- Tailwind 클래스 우선, 커스텀 CSS 최소화
- Tailwind 수치는 기본 스케일을 우선한다. 임의 하드코딩 값(`h-[36px]`, `w-[280px]` 등)은 쓰지 않는다.
- 가로/세로 값이 같으면 `h-9 w-9` 대신 `size-9`처럼 `size-*`를 사용한다.
- `tailwind.config.js` 없음. Tailwind v4 설정은 `src/index.css`의 `@theme inline`에서 관리
- 기본 폰트: Pretendard (`@fontsource/pretendard`)
- 전역 배경: `#050505`
- 아직 브랜드/시맨틱 토큰은 확정하지 않는다
- 확정 전에는 `primary`, `secondary`, `accent` 같은 의미 토큰을 임의로 늘리지 않는다

## 외부 API 목표

| 파일 | 역할 |
|------|------|
| `src/services/tmdb.ts` | 영화 검색, 상세, 인기 목록 |
| `src/services/supabase.ts` | 인증 + 위시리스트/관람기록/알림 |
| `src/services/ai.ts` | AI 추천, 채팅 요청 → 서버 경유 OpenAI 호출 |

각 외부 서비스는 별도 Axios 인스턴스를 유지한다.

## 환경 변수

`.env` 파일에 작성한다. 실제 키 값은 문서, 코드, 커밋에 남기지 않는다.

```
VITE_SENTRY_DSN=
VITE_TMDB_API_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

OpenAI API 키는 클라이언트에 두지 않는다. OpenAI 호출은 Supabase Edge Function 또는 별도 서버리스 API를 통해 서버에서만 실행한다.

## 커맨드

```bash
pnpm dev
pnpm build
pnpm lint
pnpm preview
pnpm install --frozen-lockfile
```
