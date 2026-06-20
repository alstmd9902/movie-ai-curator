# 폴더 구조

> 현재 src 구조와 목표 폴더 구조, 파일 배치 기준, 데이터 흐름을 정리한 구조 문서.

## 현재 상태

```
src/
  App.tsx
  main.tsx
  index.css
```

## 목표 구조

```
src/
  components/       # 공용 컴포넌트
    ui/             # shadcn 자동 생성 (수정 금지)
  pages/            # 페이지 단위 컴포넌트
  hooks/            # 커스텀 훅 (useXxx.ts)
  services/         # 외부 API 호출 모듈
    tmdb.ts
    supabase.ts
    ai.ts
  stores/           # Zustand 스토어 (useXxxStore.ts)
  lib/
    utils.ts        # cn() 등 유틸
  types/            # 전역 TypeScript 타입
```

경로 별칭: `@` → `./src`

```ts
import { Button } from '@/components/ui/button'
import { useMovies } from '@/hooks/useMovies'
```

## 파일 배치 기준

| 위치 | 기준 |
|------|------|
| `src/pages/` | 라우트 1개 = 파일 1개. 레이아웃과 훅 조합만 |
| `src/components/` | 2개 이상 페이지에서 쓰는 공통 UI |
| `src/components/ui/` | shadcn/ui 자동 생성 (직접 수정 금지) |
| `src/hooks/` | TanStack Query 래퍼 훅 |
| `src/services/` | 외부 API 호출 (순수 함수, UI 의존 없음) |
| `src/stores/` | Zustand 전역 상태 |
| `src/types/` | 전역 TypeScript 타입 |
| `src/lib/utils.ts` | cn() 등 공통 유틸 |

## 데이터 흐름

```
Page (src/pages/)
  → Hook (src/hooks/)           # TanStack Query 래퍼
    → Service (src/services/)   # 순수 API 호출 함수
      → TMDB / Supabase / AI 서버 엔드포인트

Page
  → Zustand Store (src/stores/) # UI 상태, 인증 상태
```

의존 방향: `pages → components`, `hooks → services` (역방향 금지)
