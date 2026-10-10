# Portfolio

Live: https://perchusha.github.io/portfolio/

Single-page CV built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Classic CV layout: about, experience, independent products, skills, personal (education, languages, interests, hobbies)
- Print-ready: the print button (or `Ctrl+P`) produces a clean A4 CV, saved as "Anton Perch CV.pdf"
- Light / dark theme (follows the system by default, remembered per browser)
- Job durations and years of experience are computed from dates, so they never go stale
- Keyboard shortcuts: `P` print, `T` theme
- Copy-email button and a little hello for anyone who opens DevTools

## Getting started

```bash
yarn
yarn dev
```

## Scripts

```bash
yarn build   # type-check and build
yarn lint
yarn format
```

## Editing content

- Page text: `src/constants/content.ts`
- Job links and dates (for durations): `src/constants/jobs.ts`
- Skill groups: `src/constants/skills.ts`
- Contacts and social links: `src/constants/contacts.ts`
- The downloadable CV lives in `public/Anton Perch CV.pdf`
