# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page landing site for a service offer around multilingual AI quality, localisation, and interpretation for cross-border teams. The page copy places the work in Trondheim. It is a static, client-rendered React app (no backend, no routing): `App.tsx` stacks one full-bleed section component per fold of the page.

On-page strings mention RLHF, certifications, and dashboard figures. Those are static copy in the components. The repo does not implement evaluation pipelines, compliance checks, or file downloads.

README.md is the short English project note. This file is working instructions for Claude Code.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server on http://localhost:3000 (host 0.0.0.0)
npm run build      # production build via Vite -> dist/
npm run preview    # serve the built bundle locally
npm run lint       # type-check only: tsc --noEmit
npm run clean      # rm -rf dist
```

There is **no test runner and no ESLint** configured. `npm run lint` is purely the TypeScript compiler in no-emit mode — run it to validate changes. Tailwind v4 is wired through the Vite plugin, so there is no separate `postcss`/`tailwind.config` build step.

## Architecture

- **Entry:** `src/main.tsx` mounts `<App>` in StrictMode. `src/App.tsx` is the whole page — it renders the section components in fixed order (`Hero`, `TrustBar`, `Services`, `NordicAIAlignment`, `DataOpsHub`, `Credentials`) plus a global `LanguageSwitcher` and a lazy-loaded `NeuralBackground`. To add a section, create a component in `src/components/` and slot it into `App.tsx`.

- **3D background:** `NeuralBackground.tsx` is a `react-three-fiber` Canvas (particle field + connection lines) rendered behind everything (`fixed inset-0 -z-10`). It is `React.lazy`-loaded and wrapped in `Suspense` with a solid-navy fallback — keep it lazy to avoid blocking first paint with the Three.js bundle.

- **i18n:** `src/i18n.ts` holds all translation strings inline (no per-locale files). Two languages: `no` (Norwegian, the default `lng`) and `en` (fallback). Components consume copy via `useTranslation()`/`t('hero.headline')`; `LanguageSwitcher` toggles between the two. When adding user-facing text in a wired section, add the key under **both** `no` and `en` in `i18n.ts` rather than hardcoding strings. `DataOpsHub.tsx` hardcodes its dashboard in English. `NordicAIAlignment.tsx` hardcodes the playground copy and does not call `t()`.

- **Animation:** Use `motion/react` (the `motion` package) for component animations — this is what existing components import. `framer-motion` is also installed but `motion/react` is the convention here; don't mix the two in new code.

- **Charts/icons:** `recharts` for the radar chart in `DataOpsHub`, `lucide-react` for all icons.

## Styling conventions

Tailwind CSS v4 with a custom theme defined in `src/index.css` via `@theme`. Use the design tokens rather than raw hex:

- Colors: `nordic-navy` (`#0A1128`, page bg), `ice-white` (text), `stone-gray` (muted text), `aurora-cyan` (`#00E5FF`, accent).
- Fonts: `font-sans` = Inter, `font-mono` = Roboto Mono (loaded via Google Fonts `@import`).
- Reusable component classes (also in `index.css`): `.glass-card` (frosted panel), `.clinical-text` (uppercase mono label), `.magnetic-button`.
- Merge conditional classes with the `cn()` helper from `src/lib/utils.ts` (clsx + tailwind-merge).

Import within `src/` using relative paths (`../lib/utils`). The `@` alias maps to the **repo root** (see `vite.config.ts` / `tsconfig.json`), not `src/`.

## Environment & gotchas

- `vite.config.ts` injects `process.env.GEMINI_API_KEY` and reads `DISABLE_HMR`. The config notes HMR/file-watching is deliberately disabled in the AI Studio environment to prevent flicker during agent edits — do not re-enable it there.
- `.env` is git-ignored; copy `.env.example` to `.env` for local secrets. `GEMINI_API_KEY` is referenced by the build but **no current source file actually calls the Gemini API** — likewise `express`, `dotenv`, and `tsx` are listed as dependencies but unused (no server entrypoint exists). Treat the app as a purely static frontend unless/until that integration is built.
- CodeQL (`.github/workflows/codeql-analysis.yml`) runs on pushes to `main` and on PRs.
