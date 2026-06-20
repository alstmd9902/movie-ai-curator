# 기술 스택

> 현재 설치된 라이브러리, 예정 연동, 환경 변수, 외부 API 서비스 기준을 정리한 기술 문서.

## 현재 설치된 스택

| 분류 | 라이브러리 |
|------|-----------|
| Framework | React 19 + Vite + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` 플러그인 방식) |
| UI 컴포넌트 | shadcn/ui (style: base-nova, `@base-ui/react` 기반) |
| 서버 상태 | TanStack Query v5 |
| 클라이언트 상태 | Zustand v5 |
| HTTP | Axios |
| 아이콘 | Lucide React |
| 모니터링 | Sentry |
| 패키지 매니저 | pnpm |

## 연동 예정 (미설치)

| 분류 | 후보 |
|------|------|
| 인증/DB | Supabase |
| 영화 데이터 | TMDB API |
| AI | 서버 경유 OpenAI SDK 또는 Vercel AI SDK |

현재 `package.json`에 설치된 의존성을 기준으로 작업한다.
문서에 적힌 예정 스택이 아직 설치되어 있지 않다면, 작업 전에 실제 필요 여부를 확인한다.

## 외부 API 서비스 (목표 구조 — 현재 파일 미존재)

| 파일 | API | 역할 |
|------|-----|------|
| `src/services/tmdb.ts` | TMDB | 영화 검색, 상세, 인기 목록 |
| `src/services/supabase.ts` | Supabase | 인증 + 위시리스트/관람기록/즐겨찾기 |
| `src/services/ai.ts` | OpenAI (서버 경유) | AI 추천, 채팅 요청 → Supabase Edge Function 호출 |

각 외부 서비스는 별도 Axios 인스턴스를 유지한다. 단일 인스턴스 공유 금지.

## 주요 커맨드

```bash
pnpm dev        # 개발 서버
pnpm build      # 프로덕션 빌드
pnpm lint       # ESLint
pnpm preview    # 빌드 결과 미리보기
pnpm install --frozen-lockfile  # lockfile 기준 재현 설치 검증
```

## 의존성 관리

기본 설치와 검증은 `pnpm install --frozen-lockfile`을 사용한다.
이 명령은 새 버전을 설치하지 않고, `package.json`과 `pnpm-lock.yaml`이 일치하는지 확인하며 lockfile에 기록된 버전 그대로 설치한다.

AI 도구(Codex, Claude Code 등)는 임의로 패키지를 추가하거나 업데이트하지 않는다.
패키지 추가/업데이트가 필요해 보이면 먼저 아래 내용을 확인해 사용자에게 보고하고, 승인 후 진행한다.

| 확인 항목 | 기준 |
|-----------|------|
| 현재 버전 | `package.json`, `pnpm-lock.yaml` 기준 |
| 최신 버전 | npm registry 또는 공식 문서 기준 |
| 변경 내용 | 공식 changelog, release note, migration guide 기준 |
| 영향 범위 | breaking change, 생성 코드 변경, 설정 변경, peer dependency 변화 |
| 필요 여부 | 현재 문제 해결에 필요한지, 지금 업데이트하지 않아도 되는지 판단 |

승인 전에는 `pnpm add`, `pnpm update`, `pnpm dlx <package>@latest`를 실행하지 않는다.
승인 후 패키지 변경이 발생하면 `package.json`과 `pnpm-lock.yaml` 변경을 함께 커밋한다.

## 환경 변수

`.env` 파일에 작성한다. Vite에서 클라이언트에 노출되는 변수는 `VITE_` 접두사가 필수다.

```
VITE_SENTRY_DSN=
VITE_TMDB_API_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

실제 키 값은 문서, 코드, 커밋에 절대 남기지 않는다.

> ⚠️ **OpenAI API 키는 클라이언트에 두면 안 된다.**
> `VITE_` 접두사 변수는 브라우저에 그대로 노출된다.
> OpenAI 호출은 반드시 Supabase Edge Function 또는 별도 서버리스 API를 통해 서버에서만 실행한다.
> 클라이언트는 Supabase 엔드포인트에 요청 → 서버가 OpenAI 호출 → 응답 반환하는 구조로 설계한다.
