# Movie AI Curator — AGENTS.md

> 모든 AI 코딩 도구(Claude Code / Codex / Cursor)가 이 저장소에서 작업할 때 가장 먼저 읽는 진입점 문서.

AI 영화 큐레이션 서비스. React 19 + Vite + TypeScript. (개인 사이드 프로젝트, 솔로)

## ⚠️ 세션 시작 전 필수

어떤 작업 요청을 받더라도 아래 파일을 먼저 읽는다. 읽기 전에 코드를 작성하지 않는다.

1. `docs/WORKFLOW.md` — 세션 시작 순서 + 작업 흐름
2. `docs/CHECKLIST.md` — 액션 전 체크리스트
3. `docs/progress.md` — 현재 구현 상태

---

## 현재 상태

초기 Vite 앱 수준. `src/App.tsx`, `src/main.tsx`, `src/index.css`만 존재.
항상 실제 코드를 기준으로 판단한다. 문서에 목표 구조가 있어도 미구현이면 없는 것으로 본다.

## 핵심 규칙

- 코드 작성 전 계획 설명 → 승인 후 코드 (`docs/WORKING_STYLE.md` 참조)
- `.env` 수정 / API 키 하드코딩 / `src/components/ui` 직접 수정 금지
- 기능 추가와 리팩터링 동시 진행 금지
- 요청 범위를 벗어난 디자인 전면 개편 금지
- 사용자 요청 없는 데이터베이스 파괴적 변경 금지

## 커맨드

```bash
pnpm dev     # 개발 서버
pnpm build   # 빌드
pnpm lint    # ESLint
```

## 참고 문서

`docs/AGENTS.md` 참조.
