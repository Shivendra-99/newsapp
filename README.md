# News World

A React news reader with category browsing, an editorial-magazine layout, and dark mode. Built with **Vite + React 18**, styled with **Tailwind CSS v4**, and powered by the [Currents API](https://currentsapi.services) for live headlines.

## Features

- Browse headlines by category: Business, Entertainment, General, Health, Science, Sports, Technology
- Featured hero story + "Latest News" grid, both fetched live per category/country
- Light/dark mode — follows your system preference by default, with a manual toggle that's remembered across visits
- Responsive layout with a mobile nav menu
- Loading skeletons and an empty state if a category returns no results

## Tech stack

- [Vite](https://vitejs.dev) + React 18
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`, no separate config file)
- [react-router-dom](https://reactrouter.com) v6
- [Currents API](https://currentsapi.services) for news data
- [Phosphor Icons](https://phosphoricons.com) (`@phosphor-icons/react`)
- [Vitest](https://vitest.dev) + Testing Library for tests
