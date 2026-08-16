# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

"News World" — a Vite + React 18 news reader (migrated from Create React App; `react-scripts` is gone). Bootstrap 5 (loaded via CDN `<link>`/`<script>` tags in [index.html](index.html), not npm) provides styling/JS components (navbar, carousel, cards). Routing is `react-router-dom` v6. The app is wired to NewsAPI (newsapi.org).

## Commands

- `npm run dev` (alias: `npm start`) — Vite dev server, http://localhost:5173
- `npm run build` — production build to `/dist` (Rollup via Vite)
- `npm run preview` — serve the production build locally
- `npm test` — run the Vitest suite once via CLI (`vitest` default is watch mode; use `npx vitest run` for a single non-watch pass)
  - Single test file: `npx vitest run App` (matches by filename)

There is no separate lint script/config in this repo (the CRA `eslintConfig` block was removed since it depended on `react-scripts`' bundled `eslint-config-react-app`).

## Architecture

Entry point is [index.html](index.html) at the repo root (not in `public/`, per Vite convention) loading `/src/index.jsx` as an ES module. Files containing JSX use the `.jsx` extension (required by Vite/esbuild, unlike CRA which allowed JSX in plain `.js`); imports remain extensionless and resolve automatically.

Routing lives entirely in [src/App.jsx](src/App.jsx): one `<Route>` per news category (business, entertainment, general, health, science, sports, technology) plus `/`. Each route renders the *same pair* of components inline — `<Middle .../> <NewsItem .../>` — parameterized by `category` (or `null` for home) and `country="in"`. There's no shared layout/route wrapper component; adding a category means adding another `<Route>` block by hand in App.jsx.

Data flow:
- [src/components/Middle.jsx](src/components/Middle.jsx) — top carousel/banner (Bootstrap `.carousel`), fetches from NewsAPI's `top-headlines/sources` endpoint in a `useEffect` and maps articles to [src/components/Banner.js](src/components/Banner.js). **Note:** this fetch currently has a NewsAPI key hardcoded directly in the URL string — this should be moved to an env var (Vite exposes `import.meta.env.VITE_*` vars from `.env`/`.env.local`, e.g. `VITE_NEWS_API_KEY`) rather than committed to source.
- [src/components/NewsItem.jsx](src/components/NewsItem.jsx) — the list of article cards below the carousel, maps fetched articles to [src/components/CardData.jsx](src/components/CardData.jsx). Its own fetch call is currently commented out, so this list renders empty.
- [src/components/Navbar.jsx](src/components/Navbar.jsx) — static nav with `<Link>`s to each category route.

Each route mounts its own `Middle`/`NewsItem` pair rather than sharing state, so category switching is done via full remount (note the `key` props in App.jsx), not client-side data refetch/caching.

Tests use Vitest + `@testing-library/react`, configured via the `test` block in [vite.config.js](vite.config.js) (`environment: 'jsdom'`, `setupFiles: './src/setupTests.js'`).
