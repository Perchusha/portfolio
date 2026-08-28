# Portfolio

Live: https://perchusha.github.io/portfolio/

Minimal, dark-mode portfolio built with React, TypeScript, and Vite. Includes multilingual content, a mobile floating nav, and a contact form powered by Formspree.

## Features

- React + TypeScript + Vite
- Tailwind CSS styling
- 4 languages with quick switcher
- Scroll-aware navigation
- CV download + view links
- Contact form via Formspree

## Getting started

Install dependencies:

```bash
yarn
```

Create `.env`:

```bash
cp .env.example .env
```

Run dev server:

```bash
yarn dev
```

## Formspree setup

Set your Formspree endpoint in `.env`:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
```

## Build

```bash
yarn build
```

## Format

```bash
yarn format
```

## Lint

```bash
yarn lint
```

## Project structure

```
src/
  components/   # UI blocks
  constants/    # content and config
  types/        # shared types
```

## Notes

- Update `src/constants/translations.ts` to edit content.
- CV file lives in `public/Anton Perch CV.pdf`.
- Favicon is `public/portfolio.ico`.
