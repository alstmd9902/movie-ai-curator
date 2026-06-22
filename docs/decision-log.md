# 기술 결정 로그

> 주요 기술 선택과 미결 사항을 기록해 나중에 결정 이유를 추적하기 위한 문서.

주요 기술 선택의 이유를 기록한다.
결정이 번복될 경우 기존 항목에 취소선 + 새 항목 추가.

---

## 패키지 매니저: pnpm

- **결정일**: 프로젝트 초기
- **선택**: npm → pnpm 전환
- **이유**: 디스크 사용량 절감(심볼릭 링크 기반), 설치 속도, monorepo 대비

---

## UI 라이브러리: shadcn/ui (base-nova)

- **결정일**: 프로젝트 초기
- **선택**: shadcn/ui, style base-nova (`@base-ui/react` 기반)
- **이유**: 코드 소유권 유지(컴포넌트를 직접 소유), Tailwind v4와 호환, 커스터마이징 자유도 높음

---

## 스타일: Tailwind CSS v4

- **결정일**: 프로젝트 초기
- **선택**: Tailwind v4 (`@tailwindcss/vite` 플러그인)
- **이유**: config 파일 불필요, CSS-first 설정(`@theme`), Vite 플러그인 방식으로 간결

---

## 라우팅: React Router

- **결정일**: 2026-06-22
- **선택**: React Router v8 (`react-router`)
- **이유**: React Router 최신 문서 기준으로 DOM API를 `react-router` 패키지에서 제공한다. `createBrowserRouter` + `RouterProvider` 구조를 사용해 라우트 객체를 React 렌더 트리 밖에서 한 번 만들고, 향후 route별 `loader`, `action`, `errorElement` 확장이 가능하게 한다.

---

## 미결 사항 (결정 시 이 목록에서 위로 이동)

| 항목 | 후보 | 비고 |
|------|------|------|
| AI 연동 | Supabase Edge Function에서 OpenAI SDK 직접 호출 vs Vercel AI SDK | 클라이언트 직접 OpenAI 호출 금지. 스트리밍 필요 여부에 따라 결정 |
| Supabase 도입 시점 | UI 프로토타입 이후 vs 초기 바로 연동 | |
