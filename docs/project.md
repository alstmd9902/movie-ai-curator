# 프로젝트

> 제품 목표, MVP 범위, 페이지, 데이터 후보를 한 곳에서 관리한다.

## 한 줄 정의

AI와 대화하며 나만의 영화 취향을 발견하고 기록하는 영화 큐레이션 서비스.

## 핵심 경험

1. AI가 추천 이유를 이해하기 쉬운 말로 설명한다.
2. 사용자가 AI와 대화하면서 자기 취향을 발견한다.
3. 검색 → 상세 → AI 채팅이 하나의 흐름으로 이어진다.

## MVP 범위

| 기능 | 설명 |
|------|------|
| 영화 검색 | TMDB API 기반 검색 + 필터 |
| 영화 상세 | 정보, 출연진, AI 분석 |
| AI 채팅 | 취향 기반 추천 + 이유 설명 |
| 위시리스트 | 보고 싶은 영화 저장 |
| 관람 기록 | 본 영화 + 평점/메모 |
| 개봉 알림 | 위시리스트에 저장한 개봉예정작 알림 |

## 현재 구현 라우트

| 경로 | 컴포넌트 파일 | 설명 |
|------|--------------|------|
| `/` | `src/pages/MainPage.tsx` | 메인 페이지 |

## 목표 라우트

| 경로 | 컴포넌트 파일 | 설명 |
|------|--------------|------|
| `/` | `src/pages/MainPage.tsx` | 히어로, 인기 영화 |
| `/search` | `src/pages/SearchPage.tsx` | 영화 검색 + 필터 |
| `/movies/:id` | `src/pages/MovieDetailPage.tsx` | 영화 상세 + AI 분석 |
| `/ai` | `src/pages/AiChatPage.tsx` | AI 영화 큐레이터 채팅 |
| `/observatory` | `src/pages/ObservatoryPage.tsx` | 위시리스트/관람기록/알림 |

라우터 설정 파일: `src/routes/router.tsx`
공통 레이아웃 파일: `src/components/layouts/RootLayout.tsx`

## Supabase 테이블 후보

실제 Supabase 연동 전 스키마 확정이 필요하다.

| 테이블 | 설명 |
|--------|------|
| `users` | 회원 정보 (Supabase Auth 연동) |
| `wishlist_movies` | 보고 싶은 영화. TMDB 영화 ID, 제목, 포스터, 개봉일, 개봉 상태 저장 |
| `watched_movies` | 관람 완료 (평점, 메모, 날짜 포함) |
| `release_notifications` | 위시리스트에 저장한 개봉예정작의 알림 기록 |
| `notification_preferences` | 사용자별 알림 설정 |
| `chat_history` | AI 채팅 기록 |
| `recommendation_history` | AI 추천 기록 |

## 개봉 알림 후보

MVP에서는 브라우저 푸시보다 앱 내부 알림을 우선한다.

1. 사용자가 개봉예정작을 위시리스트에 저장한다.
2. `wishlist_movies`에 TMDB 영화 ID와 개봉일을 저장한다.
3. Supabase 예약 작업이 하루 1회 위시리스트의 개봉일을 확인한다.
4. 개봉 임박 또는 개봉 당일 조건이면 `release_notifications`에 알림을 생성한다.
5. 앱은 `release_notifications`를 조회해 헤더/마이페이지에서 알림을 보여준다.

브라우저 푸시 알림은 서비스 워커와 푸시 구독 저장이 필요하므로 P1로 분리한다.
