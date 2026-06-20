# Movie AI Curator

> Claude Code가 이 저장소에서 작업할 때 가장 먼저 읽는 진입점 문서.

AI와 대화하며 나만의 영화 취향을 발견하고 기록하는 영화 큐레이션 서비스. (개인 사이드 프로젝트, 솔로)

## 현재 상태

초기 Vite 앱 수준. 실제 구현 파일은 `src/App.tsx`, `src/main.tsx`, `src/index.css`만 존재.
항상 실제 코드를 기준으로 판단한다. 문서에 목표 구조가 있어도 미구현이면 없는 것으로 본다.

## 작업 방식

@docs/WORKING_STYLE.md

## 절대 금지

- `.env` 파일 생성/수정/출력, API 키 하드코딩
- `src/components/ui` 내부 코드 임의 수정
- 요청 범위를 벗어난 디자인 전면 개편
- 미요청 데이터베이스 파괴적 마이그레이션
- 기능 추가와 리팩터링 동시 진행

## 커맨드

```bash
pnpm dev     # 개발 서버
pnpm build   # 빌드
pnpm lint    # ESLint
```

## 참고 문서 (필요할 때만 읽기)

| 파일 | 내용 |
|------|------|
| `docs/project-overview.md` | 무엇을 왜 만드는지, MVP 범위 |
| `docs/stack.md` | 기술 스택 + 환경변수 목록 |
| `docs/structure.md` | 폴더 구조 + 데이터 흐름 |
| `docs/conventions.md` | 코드 컨벤션 + 상태관리 기준 |
| `docs/pages.md` | 라우트 + Supabase 테이블 |
| `docs/design-system.md` | Tailwind v4 + shadcn 규칙 |
| `docs/progress.md` | 구현 현황 + 미결 사항 |
| `docs/decision-log.md` | 기술 선택 이유 |
| `docs/GIT_WORKFLOW.md` | 브랜치 전략 + 커밋 컨벤션 + PR 흐름 |
| `docs/AI_TOOLS.md` | AI 도구 Plan Mode 설계 이해 |
| `docs/WORKING_STYLE.md` | AI 작업 방식 공통 지침 |
