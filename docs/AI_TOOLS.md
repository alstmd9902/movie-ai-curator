# AI 코딩 도구 — Plan Mode 설계 이해

> Claude Code와 Codex의 계획/승인 모드를 이해하고, 이 프로젝트의 AI 작업 방식에 반영하기 위한 참고 문서.

## 공통 문제: 승인 피로

```
너무 많이 물어봄 → 승인 피로 → 사용자가 안 읽고 OK
너무 안 물어봄 → 돌이킬 수 없는 실수 발생
```

Anthropic 엔지니어링 블로그에 따르면 사용자는 권한 프롬프트의 **93%를 승인**했고,
프롬프트를 많이 볼수록 덜 주의 깊게 읽었다.

두 도구 모두 이 문제를 **액션의 위험도·가역성에 따라 승인 여부를 다르게** 하는 방식으로 해결했다.

---

## Claude Code — Plan Mode

**사용법**: `Shift+Tab`으로 토글 또는 "계획만 먼저 세워줘"로 요청

**동작**:
- 파일을 읽고 무엇을 바꿀지 계획을 제안만 함
- 승인 전까지 파일을 일절 건드리지 않음
- 승인하면 실행, 수정하거나 거절 가능

**설계 의도**: 자잘한 액션마다 물어보는 대신, "이 방향으로 가도 되냐"를 한 번만 물어보는 것.

---

## Codex CLI — Approval Mode

3단계 신뢰 레벨로 설계. 세션 중 `/permissions`로 전환 가능.

| 모드 | 동작 |
|------|------|
| **read-only** | 파일 읽고 계획 제안만. 수정/실행은 승인 후 (Claude Plan Mode와 동일) |
| **auto** (기본값) | 작업 디렉토리 내 편집·명령은 자유. 네트워크·외부 경로는 승인 요청 |
| **full-access** | 머신 전체 + 네트워크. 아무것도 안 물어봄 |

**설계 의도**: 항상 transcript를 남기고 git으로 rollback 가능하다는 전제 하에 자율성을 줌.

---

## 위험도 기준 (공통 원칙)

| 액션 | 처리 |
|------|------|
| 파일 읽기, 검색 | 자동 실행 |
| 파일 수정 | 계획 보여주고 한 번만 확인 |
| 외부 API 호출, 네트워크, 삭제 | 반드시 확인 |

---

## 참고 문서

- [Claude Code Interactive Mode](https://docs.anthropic.com/en/docs/claude-code/interactive-mode)
- [Anthropic 엔지니어링 — auto mode 설계 (93% 승인율 데이터)](https://www.anthropic.com/engineering/claude-code-auto-mode)
- [Anthropic — sandboxing 설계](https://www.anthropic.com/engineering/claude-code-sandboxing)
- [Codex CLI — Agent approvals & security](https://developers.openai.com/codex/agent-approvals-security)
- [Codex CLI Features](https://developers.openai.com/codex/cli/features)
