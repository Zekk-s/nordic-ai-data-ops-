# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page marketing/landing site for "Nordic AI Data Ops" — a multilingual AI quality, localization, and RLHF consulting identity based in Trondheim, Norway. It is a static, client-rendered React app (no backend, no routing): `App.tsx` stacks one full-bleed section component per fold of the page.

The README is written in Norwegian; this file is the canonical English reference.

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

- **i18n:** `src/i18n.ts` holds all translation strings inline (no per-locale files). Two languages: `no` (Norwegian, the default `lng`) and `en` (fallback). Components consume copy via `useTranslation()`/`t('hero.headline')`; `LanguageSwitcher` toggles between the two. When adding user-facing text, add the key under **both** `no` and `en` in `i18n.ts` rather than hardcoding strings. Note: `DataOpsHub.tsx` intentionally hardcodes its dashboard content in English and is the one section not wired to i18n.

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
