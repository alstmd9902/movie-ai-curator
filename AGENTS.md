# Movie AI Curator — AGENTS.md

> Codex / Cursor 등 AI 코딩 도구가 이 저장소에서 작업할 때 가장 먼저 읽는 진입점 문서.

AI 영화 큐레이션 서비스. React 19 + Vite + TypeScript. (개인 사이드 프로젝트, 솔로)

CLAUDE.md와 동일한 규칙을 적용한다.

## 현재 상태

초기 Vite 앱 수준. `src/App.tsx`, `src/main.tsx`, `src/index.css`만 존재.
항상 실제 코드를 기준으로 판단한다.

## 핵심 규칙

- 코드 작성 전 계획 설명 → 승인 후 코드 (`docs/WORKING_STYLE.md` 참조)
- `.env` 수정 / API 키 하드코딩 / `src/components/ui` 직접 수정 금지
- 기능 추가와 리팩터링 동시 진행 금지

## 커맨드

```bash
pnpm dev / pnpm build / pnpm lint
```

## 코드 변경 후 문서 동기화

`src/` 파일을 수정한 뒤 아래 기준으로 docs를 직접 업데이트한다.
(Claude Code는 `/sync-docs` 커맨드로 자동화. Codex는 아래 표를 수동으로 따른다.)

| 코드 변경 | 업데이트할 문서 |
|-----------|----------------|
| 새 페이지 파일 | `docs/pages.md`, `docs/progress.md` |
| 새 폴더 생성 | `docs/structure.md`, `docs/progress.md` |
| 새 패키지 설치 | `docs/stack.md` |
| 기능 완성 | `docs/progress.md` (미구현 → 완료) |
| 기능 제거 | 관련 docs 항목 삭제 |
| 라우터 등 미결 확정 | `docs/decision-log.md` |

상세 기준: `docs/WORKING_STYLE.md` ## 문서 동기화

## 참고 문서

| 파일 | 내용 |
|------|------|
| `docs/WORKING_STYLE.md` | AI 작업 방식 공통 지침 |
| `docs/project-overview.md` | 무엇을 왜 만드는지, MVP 범위 |
| `docs/stack.md` | 기술 스택 + 환경변수 |
| `docs/structure.md` | 폴더 구조 + 데이터 흐름 |
| `docs/conventions.md` | 코드 컨벤션 + 상태관리 기준 |
| `docs/pages.md` | 라우트 + Supabase 테이블 |
| `docs/design-system.md` | Tailwind v4 + shadcn 규칙 |
| `docs/progress.md` | 구현 현황 + 미결 사항 |
| `docs/decision-log.md` | 기술 선택 이유 |
| `docs/GIT_WORKFLOW.md` | 브랜치 전략 + 커밋 컨벤션 + PR 흐름 |
| `docs/AI_TOOLS.md` | AI 도구 Plan Mode 설계 이해 |
