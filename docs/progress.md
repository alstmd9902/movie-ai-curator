# 진행 상황

> 현재 구현된 항목, 미구현 항목, 아직 확정되지 않은 결정을 추적하는 진행 관리 문서.

## 완료

- React + Vite + TypeScript 프로젝트 생성
- Tailwind CSS v4 설정
- shadcn/ui 설정
- 기본 문서 구조 작성

## 미구현

- 라우팅
- 폴더 구조 생성 (pages / hooks / services / stores / types)
- TMDB API 연동
- 영화 검색 / 상세 페이지
- AI 추천 / 채팅
- Supabase 인증 / DB 연동
- 위시리스트, 관람 기록, 즐겨찾기

## 미결 사항

| 항목 | 후보 |
|------|------|
| 라우팅 라이브러리 | React Router (유력) |
| AI 연동 방식 | Supabase Edge Function에서 OpenAI SDK 직접 호출 vs Vercel AI SDK |
| Supabase 도입 시점 | UI 프로토타입 이후 vs 초기 바로 연동 |
| 영화 데이터 캐싱 | TanStack Query 기준 설계 여부 |
