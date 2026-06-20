# Git 워크플로우

> 브랜치 전략, 커밋 메시지, PR 흐름을 정리해 배포 가능한 main 브랜치를 안정적으로 유지하기 위한 문서.

## 브랜치 전략

```
main       ← 배포 가능한 안정 브랜치. 직접 커밋 금지.
feat/*     ← 기능 단위 작업 브랜치.
fix/*      ← 버그 수정 브랜치.
docs/*     ← 문서 작업 브랜치.
chore/*    ← 설정, 패키지, 환경 작업 브랜치.
style/*    ← UI/스타일 작업 브랜치 (로직 변경 없음).
refactor/* ← 리팩터링 브랜치 (기능 변경 없음).
```

현재는 개인 사이드 프로젝트이므로 `dev` 브랜치를 두지 않는다.
작업 브랜치에서 PR을 만들고, 검증 후 `main`에 머지하면 production 배포가 진행되는 흐름을 기본으로 한다.

> 나중에 실제 사용자 대상 배포 전 검증 환경이 필요해지면 `dev` 또는 `staging` 브랜치를 추가한다.
> 예: `feat/* → dev/staging → staging 배포 확인 → main → production 배포`

## 브랜치 네이밍

```
타입/작업-설명 (영어 소문자, 하이픈 구분)
```

| 타입 | 예시 |
|------|------|
| `feat/` | `feat/movie-search`, `feat/ai-chat` |
| `fix/` | `fix/search-empty-state`, `fix/auth-redirect` |
| `docs/` | `docs/setup-project-docs`, `docs/add-api-guide` |
| `chore/` | `chore/add-react-router`, `chore/update-env-example` |
| `style/` | `style/main-page-layout`, `style/search-input` |
| `refactor/` | `refactor/tmdb-service`, `refactor/auth-store` |

## 커밋 메시지

**형식**: `타입: 한국어 설명`

- 타입은 영어 소문자
- 설명은 한국어
- 마침표 없음
- 현재형으로 작성 ("추가했다" ❌ → "추가" ✅)

```
feat: 영화 검색 페이지 구현
fix: 검색 결과 없을 때 빈 화면 처리
docs: GIT_WORKFLOW 문서 추가
chore: React Router 패키지 설치
refactor: tmdb 서비스 레이어 분리
style: 검색 인풋 Tailwind 클래스 정리
```

### 타입 정의

| 타입 | 사용 시점 |
|------|----------|
| `feat` | 새 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서만 변경 |
| `chore` | 패키지 설치, 설정 변경, 빌드 관련 |
| `refactor` | 기능 변경 없는 코드 구조 개선 |
| `style` | 포맷, 공백, 세미콜론 등 (로직 변경 없음) |
| `test` | 테스트 추가/수정 |
| `init` | 프로젝트 최초 세팅 |

## 작업 흐름

```
1. main에서 작업 브랜치 생성
   git checkout main
   git pull origin main
   git checkout -b feat/기능명

2. 작업 + 커밋
   git add <파일>
   git commit -m "feat: 작업 내용"

3. PR 생성 (작업 브랜치 → main)
   - 제목: 커밋 메시지와 동일한 형식
   - 본문: 변경 사항, 테스트 방법

4. 사용자가 PR을 직접 검수하고 main에 머지
   - main에 머지되면 production 배포 대상이 된다
   - AI 도구는 PR 생성까지만 수행하고 직접 머지하지 않는다
```

## 이슈

개인 프로젝트 초기 단계에서는 모든 작업에 이슈를 만들지 않는다.
작은 기능, 문서, 설정 변경은 PR 본문에 작업 내용을 정리한다.

AI 도구(Codex, Claude Code 등)는 아래 기준으로 이슈 생성 여부를 판단한다.

| 상황 | 이슈 생성 여부 |
|------|----------------|
| 오타, 문구, 문서 정리 | 생성하지 않음 |
| 작은 기능 1개를 한 PR에서 끝낼 수 있음 | 생성하지 않음 |
| 버그 재현 과정과 원인 추적이 필요함 | 생성 |
| 작업 범위가 커서 여러 PR로 나눠야 함 | 생성 |
| 지금 처리하지 않을 아이디어/개선사항을 기록해야 함 | 생성 |
| 외부 피드백이나 요청을 추적해야 함 | 생성 |

이슈를 만들 때는 아래 형식을 따른다.

- 제목 형식: `[타입] 작업 내용` (예: `[fix] 검색 결과 없을 때 빈 화면 처리`)
- 본문: 문제/목표, 필요한 작업, 참고 사항을 간단히 작성
- PR과 이슈 연결: PR 본문에 `closes #이슈번호`

## 금지

- `main`에 직접 push
- AI 도구가 PR을 직접 머지하는 것
- 커밋 메시지 설명을 영어로 작성하는 것 (타입 제외, 한국어 설명 권장)
- 여러 기능을 한 커밋에 묶기
