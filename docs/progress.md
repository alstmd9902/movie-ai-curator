# 진행 상황

> 현재 구현된 항목, 미구현 항목, 아직 확정되지 않은 결정을 추적하는 진행 관리 문서.

## 현재 구현

- `/` 라우트 → `src/pages/MainPage.tsx`
- `createBrowserRouter` 기반 라우터 → `src/routes/router.tsx`
- 공통 레이아웃 → `src/components/layouts/RootLayout.tsx`
- 임시 `Header`, `Footer`
- 전역 배경 `#050505`
- 문서 구조 통합 → `docs/project.md`, `docs/engineering.md`

## 미구현

- 폴더 생성 (`hooks`, `services`, `stores`, `types`, `lib`)
- 목표 페이지 파일 생성 (`SearchPage`, `MovieDetailPage`, `AiChatPage`, `ObservatoryPage`)
- 목표 라우트 연결 (`/search`, `/movies/:id`, `/ai`, `/observatory`)
- TMDB API 연동
- 영화 검색 / 상세 페이지
- AI 추천 / 채팅
- Supabase 인증 / DB 연동
- 위시리스트, 관람 기록
- 개봉예정작 알림

## 미결 사항

| 항목 | 후보 |
|------|------|
| AI 연동 방식 | Supabase Edge Function에서 OpenAI SDK 직접 호출 vs Vercel AI SDK |
| Supabase 도입 시점 | UI 프로토타입 이후 vs 초기 바로 연동 |
| 영화 데이터 캐싱 | TanStack Query 기준 설계 여부 |
| 알림 방식 | 앱 내부 알림 우선 vs 브라우저 푸시 알림 |
