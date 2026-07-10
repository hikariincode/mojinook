# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Moji Nook — a Japanese learning platform (Next.js 16 / React 19 / TypeScript / Tailwind CSS 4) teaching Hiragana and Katakana through mnemonics, handwriting practice, and quizzes. Currently early-stage: page skeletons exist but most features (data layer, handwriting canvas, quiz logic) are not yet built. See `docs/ROADMAP.md` for the planned build order and `docs/DEV_LOG.md` for day-by-day implementation notes.

## Tech Stack

- **Next.js 16.2.10** — App Router, TypeScript config (`next.config.ts`)
- **React 19.2.4** / **React DOM 19.2.4**
- **TypeScript 5** — strict mode, `@/*` path alias to repo root
- **Tailwind CSS 4** via `@tailwindcss/postcss` (no `tailwind.config`; theme customization is done with plain CSS variables in `app/globals.css`, see Architecture)
- **ESLint 9** (flat config) with `eslint-config-next`
- No state management, data-fetching, testing, or backend/storage libraries are installed yet — `docs/ROADMAP.md` calls out "Data Layer" and "Tools Research (storage, logging, unit tests, deployment)" as still to be decided.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test runner configured yet.

## Tailwind v4
- CSS vars: `bg-(--color-x)` NOT `bg-[--color-x]` (v3 syntax fails silently)
- `bg-[value]` only for literal values (`h-[2px]`), never `--vars`
- Theme colors: `globals.css` `:root`

## Routing
- Filesystem-based, no router config
- `(group)` folders are invisible in URL
- All paths via `lib/routes.ts` — never hardcode strings
- Default `<Link href>`; `router.push()` only if pre-nav logic needed

## Data
- One unified structure over parallel lists (merge, don't duplicate)
- Separate "answer key" fields from "display hint" fields
- Flag format inconsistencies across dataset entries before they spread

## Components
- Reusable UI → `components/`, one file each
- Clickable cards: hover (lift+shadow) + active (press) + focus-visible, not just border
- `group-hover:` needs `group` on ancestor
- Hover-only affordances need dimmed always-visible fallback (touch has no hover)

## Formatting
- Prettier + prettier-plugin-tailwindcss, format-on-save — don't hand-order classes

## Debug order for "styles not applying"
1. Valid syntax for TW version? 2. CSS var defined? 3. postcss config wired?