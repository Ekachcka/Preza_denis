@AGENTS.md

# Preza_denis

Single-page portfolio (Next.js App Router, TypeScript, Tailwind v4) built from Figma. Project overview, Figma info, decisions, tokens and module index: `docs/README.md`.

## Never assume — ask

Do not invent anything visible to the user (texts, links, behaviour, animations, responsive layout, typo fixes, extra elements) that is not in Figma, `docs/` or the user's words. Collect gaps and ask the user in one AskUserQuestion batch before code. Details: skill `ask-dont-assume`.

## Docs first (lightweight SDD)

No code before docs. Each module lives in `docs/modules/NN-name/` (templates in `docs/modules/_template/`):
- `analysis.md` — written and finished before any code for the module.
- `implementation.md` — written after the code, describing what was actually built. Language-agnostic: behaviour and business logic as seen by the visitor (data, interactions, responsive rules, constraints), no code or framework details in the body. File paths go only in the final `Файлы` section, as a navigation aid.

Docs are written in Russian.

## Workflow for every module, section, or update

Run the project agents from `.claude/agents/` yourself, without asking the user:

1. `analyzer` — produces the module analysis; write it to `docs/modules/NN-name/analysis.md`, set the module status to `анализ` in `docs/README.md`.
2. Implement strictly per the analysis; if the plan has to change, update `analysis.md` first.
3. `tester-writer` — write or update tests for what changed.
4. `test-runner` — run typecheck, lint, unit (and e2e when UI changed). Fix failures and rerun until green.
5. `reviewer` and `adversarial-reviewer` — in parallel on the diff. Fix confirmed findings, then rerun `test-runner`.
6. Write `docs/modules/NN-name/implementation.md`; update `docs/README.md`: module status, risks, a dated line in the log.

Small updates to an existing module: update its `analysis.md` (what changes and why) before the code and append to its `implementation.md` after.

Report to the user only the final result: what was done, test status, and any findings left unfixed with the reason.
