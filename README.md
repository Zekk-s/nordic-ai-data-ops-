# Nordic AI Data Ops

Single-page site for a service offer around multilingual AI quality, localisation, and interpretation for cross-border teams. Vite, React, and TypeScript. The copy defaults to Norwegian. English is the fallback.

`src/App.tsx` is the page: hero, trust bar, three service cards, a wording slider (English in, Norwegian out), a static dashboard, and a credentials block. A language toggle sits in the corner. A Three.js particle field sits behind the page.

The email button and the footer address use mailto:zeki@multilingual.no. The site link is https://multilingual.no. The wording slider and the dashboard are labeled demos. They do not read live data.

## Stack

Imported by the app:

- Vite
- React, TypeScript
- Tailwind CSS 4, through `@tailwindcss/vite`
- `motion` (`motion/react`)
- Three.js, `@react-three/fiber`, `@react-three/drei`
- Recharts
- i18next, react-i18next
- lucide-react

Also in `package.json`, with no import in `src/`: `@google/genai`, `framer-motion`, `express`, `dotenv`, `tsx`. `vite.config.ts` still defines `process.env.GEMINI_API_KEY` from `.env`.

## Run

Node.js, then:

```bash
npm install
npm run dev
```

Dev server: http://localhost:3000 (host `0.0.0.0`).

`.env.example` is the template. `.env` is gitignored. `package-lock.json` locks the install.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve that build
- `npm run lint` — `tsc --noEmit`
- `npm run clean` — delete `dist/`

`npm run lint` is the TypeScript check. The repo has no ESLint config and no test runner.
