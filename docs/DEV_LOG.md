# Development Log 📑

## Day 1

### Completed

- Project setup
- Folder structure
- App Router

### Challenges

- Fixed NPM Vulnerabilities
- Fixed Git Hub Repo Integration issues

### Learned

- Improved my understanding of the folder structure and initial configuration of a Next.js application.
- Learned About Integrating Claude Code in VS Code, generating Claude.md and Basic Slash Commands.
- Learned how to publish a project repository to my personal GitHub account.

## Day 2

### Completed

- Finalized initial 30 days Roadmap for releasing MVP
- Finalized logging documentation for implmentation

### Challenges

- Breaking MVP into small daily and weekly goals

### Learned

- Improved my understanding of shipping minimum viable product allowing to focus on important components
- Learned about Conversation Management in Claude and tips for understanding and selecting models based on tasks for effective token usage

## Day 3

### Completed

- Finalized the initial visual theme and color palette for MojiNook.
- Implemented reusable global design styles (typography, background, animations).
- Added the first SVG mascot asset to the application.

### Challenges

- Resolved CSS issues in globals.css.
- Debugged SVG asset integration and image rendering in Next.js.

### Learned

- Understanding and refactoring AI-generated code.
- Understood what belongs inside globals.css and how to separate design concerns (typography, backgrounds, animations, accessibility).
- Learned to debug image integration issues, including incorrect paths, scaling, and transparent backgrounds.

## Day 4

### Completed

- Built the initial application layout skeleton for MojiNook.
- Created rough layouts for all core application pages.
- Learned to implement and use the reusable component.

### Challenges

- Resolved layout and CSS consistency issues across pages.
- Refactored AI-generated (Claude) code to improve readability and maintainability.
- Debugged page related issues with claude code generated code.

### Learned

- Better understanding of page layout composition in Next.js.
- Learned how to structure reusable React components.
- Improved confidence in debugging and refactoring AI-generated code.

## Day 5

### Completed

- Diagnosed and fixed Tailwind v4 syntax breaking theme colors across components.
- Wired up navigation: Link-based routing for home and learn pages
- Set up centralized `lib/routes.ts` for route constants instead of hardcoded path strings.
- Refactored kana data model from two parallel hiragana/katakana lists into a single unified `ROWS` dataset (shared structure, toggle reads different fields).
- Built and polished the `/learn` page row cards: hover/active/focus states, right-aligned reveal arrow, button-like affordance with help of claude code.

### Challenges

- Root-caused invisible button styling to a Tailwind v3→v4 breaking change in arbitrary-value CSS variable syntax.
- Untangled flexbox layout so the hover arrow anchors to the card's right edge instead of trailing after content.
- Caught a data inconsistency (mixed romaji format) before it could cause quiz-matching bugs later.

### Learned

- Tailwind v4's CSS variable shorthand (`bg-(--var)`) differs from v3.4's and old syntax fails silently instead of erroring — worth checking version-specific docs before assuming familiar syntax still applies.
- Route groups in Next.js App Router are invisible to the URL, useful for organizing without affecting paths.
- Value of separating concerns in data models early (e.g. splitting a pronunciation hint from the canonical answer key) to avoid rework once quiz logic depends on that data.
- `group-hover` requires an explicit `group` class on the ancestor — a common gotcha with Tailwind's state variants.

### To-Dos

- Setting up unit tests for project
- Set up Prettier + Tailwind class-sorting plugin for consistent formatting going forward.

## Day 6

### Completed

- Set up Vitest + React Testing Library with tests mirroring the source tree structure.
- Added report history: each run archives a timestamped snapshot to `test/report-history/`, auto-pruned to the last 3 runs via `scripts/prune-reports.js`.
- Documented the entire testing workflow in CLAUDE.md, including a known accessible-name gotcha in RTL queries.

### Challenges

- Wired `test/setup.ts` to call `cleanup()` after each test, preventing DOM leakage between test runs.
- `npx vite preview --outDir test/report` failed on vitest's HTML reporter output — it expects a proper Vite build manifest, not a plain static report.
- Built a static HTML report workflow: `test:report:view` runs tests, fixed port which serves the report on a fixed port (4173) to avoid colliding with `next dev` on 3000, requiring an explicit fixed port to avoid ambiguity between the two local servers.
- Caught a defect where learn page's link/button's accessible `name` in RTL includes all its text content for row name created. (Needs to re-think on hiragana and katakana page routing)

### Learned

- Learned on setting up and writing tests for project using Vitest + React Testing Library.
- Vitest's HTML reporter output isn't a Vite build artifact — tools like `vite preview` that expect a manifest can fail on it even when the folder path is correct; a plain static server (`serve`) is the more reliable fit.
- Repeated multi-step workflows (run → archive → prune → serve) are worth wrapping as npm scripts + a slash command rather than re-explaining steps each session — cheaper on tokens and removes the chance of skipping a step.

### To-Dos

- Setting up unit tests for project: Done
- Set up Prettier + Tailwind class-sorting plugin for consistent formatting going forward.
- Rethink on routing structure for hiragana and katakana

## Day 7

### Completed

- Added writing pad prototpe with help of claude (yet to understand workflow and code behind writing pad component)
- Rebuilt the layout to match a reference mock: a two-panel row (sample reference panel + drawing canvas, later swapped left/right), using `mascot/welcome-nekochan.svg` as a placeholder sample image via `next/image`.

### Challenges

- Converted the writing-pad prototype (`components/pad/WritingPad.ts` + `handwriting/page.tsx`) from broken/truncated JS into a single typed client component, `WritingPad.tsx`.

### Learned

- Tried building the entire writing pad component entirely by claude without manual modification of code.

### To-Dos

- Set up Prettier + Tailwind class-sorting plugin for consistent formatting going forward.
- Rethink on routing structure for hiragana and katakana
- Debug integration issues and understand code behind writing pad.

## Day 8

### Completed

- Refactored `WritingPad.tsx` — pulled the canvas drawing logic into a `useDrawingCanvas.ts` hook, and split the nav header and controls footer into `KanaNavigator.tsx` and `PadControls.tsx`. Component's a lot leaner now, each piece testable on its own
- Reused the existing `InkButton` component (wrapped in `Link`) for the "Back to learn page" action instead of a one-off styled anchor, matching the pattern already used on the welcome page.

### Challenges

- Indentifying the components the way to decouple them from large file

### Learned

- Had Claude Code help me untangle `WritingPad.tsx` — decoupled it into a drawing hook plus separate nav/control components. Cleaner to test and way less overwhelming to look at.

### To-Dos

- Set up Prettier + Tailwind class-sorting plugin for consistent formatting going forward.: Done
- Rethink on routing structure for hiragana and katakana
- Debug integration issues and understand code behind writing pad.

## Day 9

### Completed

- Finalized on keeping strokes reference and writing pad as 2 separate components
- Added claude hooks for formatting for post implementation
- Added a new theme color (`--color-testsuiro`, #034630) to the `:root` palette in `globals.css`.

### Challenges

- During deciding design for handwriting page faced challenge to think and build the page

### Learned

- Learned to build the project's `PostToolUse` hook (`.claude/hooks/format-on-edit.sh`) runs Prettier automatically after every Claude-made edit — it's a plain shell script, not a model call, so it runs async and costs no LLM tokens; only hook output that gets surfaced back into the conversation would add to token usage, and this hook returns none.

- Learned basics on skills and plugins features of claude code. 

### To-Dos

- Rethink on routing structure for hiragana and katakana
- Debug integration issues and understand code behind writing pad.
- Audit remaining components for other `--color-aizome` usages that may need to move to `--color-testsuiro` for palette consistency.

## Day 10

### Completed

- Built the first mnemonic card prototype for `/learn/hiragana` from a hand-sketched reference mock: `components/learn/KanaMnemonicCard.tsx`, wired to `lib/kanaData.ts` (no hardcoded per-letter content).
- Card layout: aizome romaji badge (top-left), mascot placeholder image (`welcome-nekochan.svg` via `next/image`) as the stand-in for a future hand-drawn mnemonic illustration, and a kin-colored mnemonic strip with a washi letter tile plus `Mnemonic:` / `Say:` text — `Say:` falls back from `pron` to `r` when no pronunciation hint exists.
- Rebuilt `app/(public)/learn/hiragana/page.tsx` to drive the card off row/item state with working Prev/Next navigation and per-row dot indicators (replacing the old static placeholder markup).
- Iterated on card sizing twice on request: first from full-height stretch to content-sized, then locked to a fixed `aspect-5/7` portrait rectangle so it reads as a card rather than a filled panel.

### Challenges

- Initial card used `flex-1` and stretched to fill the page's remaining vertical space — had to strip that and switch the parent to `justify-center` before a fixed aspect ratio would actually take effect.
- No headless browser tool (chromium-cli/Playwright) available in this environment to screenshot-verify the layout — fell back to curling the rendered HTML for expected content/status code instead of a real visual check.

### Learned

- Learned more building ui components and their sizing to build prototype.

### To-Dos

- Rethink on routing structure for hiragana and katakana
- Debug integration issues and understand code behind writing pad.
- Audit remaining components for other `--color-aizome` usages that may need to move to `--color-testsuiro` for palette consistency.
- Set up a screenshot-capable run skill (chromium-cli/Playwright) so future UI changes can be visually verified instead of HTML-only checks.
- Replace the mascot placeholder image in `KanaMnemonicCard` with real per-letter mnemonic illustrations once art is ready.

## Day 11

### Completed

- Resolved the Day 9/10 to-do to rethink hiragana/katakana routing: moved `app/(public)/learn/hiragana/page.tsx` to a single dynamic route, `app/(public)/kana/[type]/[row]/page.tsx`, covering both scripts instead of one hardcoded hiragana page.
- Page now reads `type` (`hiragana`/`katakana`) and `row` (e.g. `a`, `ka`) from the URL via `useParams`, seeding which row/item to open on; invalid `type` or `row` values call `notFound()`.
- Replaced the dead HIRAGANA/KATAKANA `Link`-based toggle (KATAKANA pointed at a route that never had a page) with real local-state toggle buttons matching the tab pattern already used in `app/(public)/learn/page.tsx` — switching script no longer navigates, it just re-renders `KanaMnemonicCard` with the other script.
- Updated `lib/routes.ts`: `learnRow(kana, row)` now points to `/kana/${kana}/${row}`; removed the unused static `hiragana`/`katakana` route entries now that the dynamic route covers both.

### Challenges

- Moving files under `app/` left stale entries in `.next`'s generated type-validator (`.next/types/validator.ts`) pointing at the old file path, which made `tsc --noEmit` fail even though the source was correct — fixed by clearing `.next` so Next regenerates it.

### Learned

- In the App Router, dynamic segments in a `"use client"` page are read with the `useParams` hook rather than an awaited `params` prop (that pattern is for Server Components) — confirmed against the bundled `node_modules/next/dist/docs` since this project's Next version differs from training data per `AGENTS.md`.
- Seeding local component state from route params once (`useState(() => ...)`) keeps the existing Prev/Next browsing behavior fully client-side, while still letting the URL determine the starting row/script — no need to keep the URL in sync on every Prev/Next click.

### To-Dos

- Rethink on routing structure for hiragana and katakana - Done
- Decide whether the now-orphaned `app/(public)/learn/katakana/page.tsx` placeholder should be deleted or repurposed, since `/kana/katakana/[row]` supersedes it and nothing links to `/learn/katakana`.
- Debug integration issues and understand code behind writing pad.
- Audit remaining components for other `--color-aizome` usages that may need to move to `--color-testsuiro` for palette consistency.
- Set up a screenshot-capable run skill (chromium-cli/Playwright) so future UI changes can be visually verified instead of HTML-only checks.
- Replace the mascot placeholder image in `KanaMnemonicCard` with real per-letter mnemonic illustrations once art is ready.

## 🚩 Milestones

### Week 1

- Project scaffolded: Next.js App Router structure, GitHub repo, 30-day MVP roadmap, and daily logging workflow in place.
- Visual foundation established: color palette, typography, global design styles, and first mascot SVG asset.
- Core app skeleton built: layout and rough pages for all main routes, using reusable, centrally-routed (`lib/routes.ts`) components.
- `/learn` page shipped with polished row cards (hover/active/focus states) and a unified `ROWS` kana data model replacing duplicated hiragana/katakana lists.
- Tailwind v4 CSS-variable syntax gotcha diagnosed and documented, fixing invisible button styling.
- Test infrastructure added: Vitest + React Testing Library, mirrored test tree, static HTML report with history/pruning, all documented in CLAUDE.md.
- Writing pad prototype built (two-panel layout: reference image + drawing canvas) as first pass toward handwriting practice, though internals still need to be understood.


### Week 2

### Week 3

### Week 4
