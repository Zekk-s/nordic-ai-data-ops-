<div align="center">
  <h1>Nordic AI Data Ops: Flerspråklig AI-Kvalitet & Lokalisering</h1>
  <p><strong>Operasjonelt feilfritt flerspråklig arbeid på tvers av AI-evaluering og språk.</strong></p>
</div>

## 📌 Prosjektoversikt

Dette prosjektet er en webapplikasjon og landingsside for et tjenestetilbud spesialisert innen **Flerspråklig AI-kvalitet, Lokalisering og Tolking** for grensekryssende team. Plattformen posisjonerer tjenester som hjelper selskaper med å levere nøyaktige og kulturelt pålitelige AI-løsninger og høytroende kommunikasjon.

## 🚀 Teknologistakk

- **Byggeverktøy:** Vite
- **Frontend Rammeverk:** React (TypeScript)
- **Avhengigheter for AI:** `@google/genai` (For integrasjon med Gemini AI)
- **Stilisering & Animasjoner:** TailwindCSS, Framer Motion, Three.js (drei/fiber for 3D elementer)
- **Datavisualisering:** Recharts
- **Ikoner:** Lucide React

## 🔒 Sikkerhet og Forholdsregler

Sikkerhet har vært høyt prioritert i dette oppsettet:
1. **Sensitiv Data:** API-nøkler og miljøvariabler (slik som `GEMINI_API_KEY`) håndteres utelukkende via lokal `.env`-fil.  
2. **Git Ignore:** Konfigurasjonen forhindrer `node_modules`, `.env`, bygge-artefakter og `.DS_Store`-filer fra å bli pushet til versjonskontroll. Kun `.env.example` inkluderes for referanse.
3. **Avhengigheter:** Låst via `package-lock.json` for å sikre repeterbare bygg uten uventede underoppdateringer av pakker.

## 💻 Kjøre lokalt

For å starte applikasjonen lokalt på din maskin:

1. Klon prosjektet og naviger til rot-mappen.
2. Sørg for at du har [Node.js](https://nodejs.org/) installert.
3. Lag en `.env` fil basert på `.env.example` og fyll inn din Gemini API nøkkel:
   ```bash
   cp .env.example .env
   ```
4. Installer prosjekt-avhengigheter:
   ```bash
   npm install
   ```
5. Kjør utviklingsserveren:
   ```bash
   npm run dev
   ```
6. Åpne `http://localhost:3000` i nettleseren for å teste appen!

## 📦 Skripts
- `npm run dev`: Starter lokal server.
- `npm run build`: Kompilerer en produksjonsklar bundle via Vite.
- `npm run preview`: Lokal forhåndsvisning for det bygde prosjektet.
- `npm run lint`: Sjekker koden for syntaksfeil med TypeScript-kompilatoren.

---
_Dette prosjektet håndteres som en moderne React/Vite stack for rask utvikling og optimal brukeropplevelse._
