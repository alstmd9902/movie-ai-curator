# 페이지 구성

> 목표 라우트, 페이지 파일, Supabase 테이블 후보를 정리한 화면/데이터 설계 문서.

아래 구성은 목표 화면 구조다. 현재 코드에 없는 라우트는 구현 예정으로 본다.

| 경로 | 컴포넌트 파일 | 설명 |
|------|--------------|------|
| `/` | `pages/MainPage.tsx` | 히어로, 인기 영화 |
| `/search` | `pages/SearchPage.tsx` | 영화 검색 + 필터 |
| `/movies/:id` | `pages/MovieDetailPage.tsx` | 영화 상세 + AI 분석 |
| `/ai` | `pages/AiChatPage.tsx` | AI 영화 큐레이터 채팅 |
| `/observatory` | `pages/ObservatoryPage.tsx` | 위시리스트/관람기록/즐겨찾기 (로그인 필요) |

라우트 설정 파일 후보: `src/routes/index.tsx` (라우팅 라이브러리 미결 — `docs/decision-log.md` 참조)

# Supabase 테이블 설계 후보

아래 테이블은 목표 데이터 구조다. 실제 Supabase 연동 전에는 스키마 확정이 필요하다.

| 테이블 | 설명 |
|--------|------|
| `users` | 회원 정보 (Supabase Auth 연동) |
| `wishlist_movies` | 보고 싶은 영화 |
| `watched_movies` | 관람 완료 (평점, 메모, 날짜 포함) |
| `favorite_movies` | 즐겨찾기 |
| `chat_history` | AI 채팅 기록 |
| `recommendation_history` | AI 추천 기록 |
