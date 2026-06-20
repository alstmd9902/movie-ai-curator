# 디자인 시스템

> Tailwind CSS v4, shadcn/ui, 토큰, 폰트, 컴포넌트 사용 규칙을 정리한 UI 기준 문서.

## 기본 원칙

- Tailwind CSS v4 클래스 우선, 커스텀 CSS 최소화
- shadcn/ui 컴포넌트 기반 (`src/components/ui/` — 직접 수정 금지)
- 조건부 클래스는 `cn()` 사용 (`@/lib/utils`)

## Tailwind v4 설정

`tailwind.config.js` 없음. 모든 설정은 `src/index.css`의 `@theme inline` 블록에서 관리.

```css
/* src/index.css 구조 */
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@fontsource/pretendard";   /* Pretendard 폰트 */

@custom-variant dark (&:is(.dark *));

:root { /* CSS 변수 정의 */ }
.dark { /* 다크 모드 오버라이드 */ }

@theme inline {
  --font-sans: 'Pretendard', sans-serif;  /* 기본 폰트 */
  --font-heading: var(--font-sans);
  /* shadcn 토큰을 Tailwind 토큰으로 매핑 */
}
```

## 폰트

- **기본 폰트**: Pretendard (`@fontsource/pretendard` 설치됨)
- `@theme inline`에서 `--font-sans: 'Pretendard', sans-serif`로 설정
- 추가 폰트가 필요하면 `@fontsource/<name>` 설치 후 `@theme inline`에 등록

## 컬러 토큰

`src/index.css`에 두 종류의 CSS 변수가 공존하고 있다.

### shadcn 시맨틱 토큰 (Tailwind 클래스로 사용)
`--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--radius` 등

```tsx
// 올바른 사용 (Tailwind 클래스)
<div className="bg-background text-foreground border-border" />
```

### 템플릿 커스텀 변수 (직접 CSS에서만 사용)
`--text`, `--text-h`, `--bg`, `--border`, `--code-bg`, `--accent`, `--shadow` 등
현재 Vite 기본 템플릿에서 남은 변수들. 향후 shadcn 토큰으로 통합 예정.

### 다크 모드
- `.dark` 클래스 기반 (`@custom-variant dark (&:is(.dark *))`)
- `prefers-color-scheme: dark` 미디어쿼리도 일부 적용 중 (템플릿 잔재)
- 브랜드 컬러 확정 시 `src/index.css` `:root` 및 `.dark` 블록에 추가

## shadcn/ui

- style: `base-nova` (`@base-ui/react` 기반)
- 컴포넌트 추가: `pnpm exec shadcn add <component>`
- 생성 위치: `src/components/ui/`
- 생성된 파일 임의 수정 금지. 변경이 필요하면 shadcn 재설치 또는 래핑.
- `pnpm exec shadcn`은 `package.json`과 `pnpm-lock.yaml`에 고정된 shadcn CLI 버전을 사용한다.
- `pnpm dlx shadcn@latest ...`는 최신 CLI가 꼭 필요한 경우에만 사용하고, 사용 전 공식 changelog/release note를 확인해 변경점을 보고한 뒤 승인받는다.

## 컴포넌트 규칙

- shadcn에 없는 공통 UI는 `src/components/`에 직접 작성
- 특정 페이지에서만 쓰는 컴포넌트는 해당 페이지 파일 내 유지 (조기 추출 금지)
- 스타일 변형이 필요한 경우 shadcn 컴포넌트를 래핑해서 사용
