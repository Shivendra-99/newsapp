# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

"News World" — a Vite + React 18 news reader (migrated from Create React App; `react-scripts` is gone). Styling is Tailwind CSS v4 (via `@tailwindcss/vite`, no Bootstrap); icons are `@phosphor-icons/react`. Routing is `react-router-dom` v6. The app is wired to Currents API (currentsapi.services), via its `/v1/search` endpoint.

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
- [src/api/newsApi.js](src/api/newsApi.js) — the only place that talks to Currents API. Builds `GET /v1/search?country=..&category=..` requests (`Authorization` header carries the key), maps the response's `news[]` items into a NewsAPI-shaped `{title, description, url, urlToImage, publishedAt, source: {name}}` article so downstream components don't care which provider is behind them. If a country+category combo comes back empty it retries once without the country filter.
- [src/hooks/useTopHeadlines.js](src/hooks/useTopHeadlines.js) — thin `useEffect`-based hook wrapping `fetchTopHeadlines`, returns `{articles, loading, usedCountry}`. Both fetching components below call this instead of fetching directly.
- [src/components/Middle.jsx](src/components/Middle.jsx) — hero section (one large "featured" story + up to two smaller side stories), built from [src/components/Banner.jsx](src/components/Banner.jsx) (`variant="large" | "small"`).
- [src/components/NewsItem.jsx](src/components/NewsItem.jsx) — the "Latest News" card grid below the hero, maps fetched articles to [src/components/CardData.jsx](src/components/CardData.jsx).
- [src/components/Navbar.jsx](src/components/Navbar.jsx) — sticky nav with `<NavLink>`s per category route and its own mobile-menu toggle state (no Bootstrap JS involved).

The API key is read from `import.meta.env.VITE_CURRENTS_API_KEY` (Vite exposes `import.meta.env.VITE_*` vars from `.env`/`.env.local`, gitignored — see `.env.example` for the placeholder). Never hardcode a key in source.

Each route mounts its own `Middle`/`NewsItem` pair rather than sharing state, so category switching is done via full remount (note the `key` props in App.jsx), not client-side data refetch/caching.

Tests use Vitest + `@testing-library/react`, configured via the `test` block in [vite.config.js](vite.config.js) (`environment: 'jsdom'`, `setupFiles: './src/setupTests.js'`).
