# Movie AI Curator

> 프로젝트를 처음 보는 사람이 목적, 현재 스택, 주요 문서 위치를 빠르게 파악하기 위한 루트 소개 문서.

AI와 대화하며 나만의 영화 취향을 발견하고 기록하는 영화 큐레이션 서비스.

## Project Goal

단순한 영화 검색을 넘어 AI 기반 추천 경험을 제공하는 것을 목표로 한다.

- AI가 추천 이유를 이해하기 쉬운 말로 설명한다
- 사용자가 AI와 대화하면서 자기 취향을 발견한다
- 위시리스트, 관람 기록, 즐겨찾기로 개인 영화 데이터를 쌓는다

## Tech Stack

| 분류 | 기술 |
|------|------|
| Framework | React 19 + Vite + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| 서버 상태 | TanStack Query v5 |
| 클라이언트 상태 | Zustand v5 |
| 패키지 매니저 | pnpm |

## Planned Integrations

아래 항목은 MVP 구현 과정에서 연동 예정이며, 아직 실제 코드에 구현되지 않았다.

| 분류 | 후보 |
|------|------|
| 영화 데이터 | TMDB API |
| 인증/DB | Supabase |
| AI | Supabase Edge Function에서 OpenAI SDK 직접 호출 또는 Vercel AI SDK |

## Features

- 영화 검색 및 상세 정보 조회
- AI 기반 영화 추천 + 추천 이유 설명
- AI 큐레이터 채팅
- 위시리스트 / 관람 기록 / 즐겨찾기

## Documentation

AI 코딩 도구는 작업 전에 아래 문서를 참조한다.

- `CLAUDE.md` — Claude Code 진입점
- `AGENTS.md` — Codex / Cursor 진입점
- `docs/WORKING_STYLE.md` — AI 작업 방식 공통 지침
- `docs/project-overview.md` — 프로젝트 목적과 MVP 범위
- `docs/stack.md` — 기술 스택 + 환경변수
- `docs/structure.md` — 폴더 구조 + 데이터 흐름
- `docs/conventions.md` — 코드 컨벤션
- `docs/pages.md` — 페이지 구성 + DB 테이블
- `docs/design-system.md` — 디자인 규칙
- `docs/progress.md` — 구현 현황
- `docs/decision-log.md` — 기술 선택 이유
- `docs/GIT_WORKFLOW.md` — 브랜치 전략 + 커밋 컨벤션 + PR 흐름
- `docs/AI_TOOLS.md` — AI 도구 Plan Mode 설계 이해
