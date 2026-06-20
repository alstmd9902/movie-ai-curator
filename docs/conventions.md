# 코드 컨벤션

> 컴포넌트 작성, 상태 관리, 네이밍, 스타일링 기준을 정리한 구현 규칙 문서.

## 컴포넌트

- 함수형 컴포넌트 + `export default`
- props 타입은 컴포넌트 파일 내 `interface Props`로 정의
- shadcn 컴포넌트 추가: `pnpm dlx shadcn@latest add <component>`
- 특정 페이지에서만 쓰는 컴포넌트는 해당 페이지 파일 내에 유지 (조기 추출 금지)

## 스타일

- Tailwind 클래스 우선, 커스텀 CSS 최소화
- 조건부 클래스는 `cn()` 사용 (`@/lib/utils`)
- Tailwind v4: `tailwind.config.js` 없음, `src/index.css`에서 설정

## 서버 상태 — TanStack Query

- API 호출은 `src/services/`에 순수 함수로 분리 (UI 의존 없음)
- `useQuery` / `useMutation` 훅은 `src/hooks/`에 래핑해서 재사용
- 컴포넌트에서 직접 `useQuery` 작성 금지

### Query Key 컨벤션

```ts
['movies', 'popular']          // 목록
['movies', 'search', keyword]  // 검색
['movies', movieId]            // 상세
```

## 클라이언트 상태 — Zustand

- 서버와 무관한 전역 상태만 관리 (UI 상태, 인증 상태 등)
- 파일명: `useXxxStore.ts`
- 서버에서 받아온 데이터(영화 목록, 상세)는 Zustand 금지 → TanStack Query cache 사용

### TanStack Query vs Zustand 판단 기준

| 상태 종류 | 도구 |
|-----------|------|
| 영화 목록, 상세, 검색 결과 | TanStack Query |
| 로그인 여부, 유저 정보 | Zustand |
| 모달 열림/닫힘, 토스트 | Zustand |
| 위시리스트, 관람 기록 | TanStack Query (Supabase에서 fetch) |

## 네이밍

| 종류 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `MovieCard.tsx` |
| 훅 | camelCase, use 접두사 | `useMovies.ts` |
| 스토어 | camelCase, useXxxStore | `useAuthStore.ts` |
| 서비스 함수 | camelCase | `fetchPopularMovies` |
| 타입/인터페이스 | PascalCase | `Movie`, `WatchedMovie` |
