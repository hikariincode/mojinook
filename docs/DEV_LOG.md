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

## 🚩 Milestones

### Week 1
### Week 2
### Week 3
### Week 4