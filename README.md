# Anton Perch — Senior Software Engineer

**Frontend & Full-Stack · TypeScript, React, Next.js, Node.js · Warsaw, Poland (remote)**

[![Deploy to GitHub Pages](https://github.com/Perchusha/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Perchusha/portfolio/actions/workflows/deploy.yml)

**[Open the live CV →](https://perchusha.github.io/portfolio/)** ·
[Download PDF](https://perchusha.github.io/portfolio/Anton%20Perch%20CV.pdf) ·
[LinkedIn](https://www.linkedin.com/in/anton-perch-768578113/) ·
[perch.anton@gmail.com](mailto:perch.anton@gmail.com)

This repository is the source code of my online CV. Below is a short summary for anyone passing by;
the live site has the full version with detailed experience.

## At a glance

- **Role:** Senior Software Engineer, frontend & full-stack; former tech lead and mentor
- **Experience:** building production web, desktop and real-time applications since 2017
- **Currently:** Senior Frontend Developer at [ITSharkz](https://itsharkz.com/) (since Aug 2024)
- **Core stack:** TypeScript, React, Next.js, Node.js, NestJS, GraphQL
- **Strengths:** frontend architecture, accessibility (WCAG 2.1 AA, RGAA), performance, testing,
  applied AI
- **Location:** Warsaw, Poland · remote
- **Languages:** English (C1), Polish (B1), Russian (native)
- **Education:** Master of Engineering in IT & Ergonomics, Belarusian State University of
  Informatics and Radioelectronics

## Selected highlights

- **Cut response times from 10–15 s to ~3 s** by leading the migration of an AI dating assistant
  (Wing AI) from serverless Firebase to NestJS; designed its AI pipeline with streaming, prompt
  versioning and Braintrust observability.
- **Built the component library for the Qobuz.com redesign from scratch:** Atomic Design, SSR
  components, Storybook stories, integration and accessibility tests, RGAA / WCAG 2.1 AA.
- **Automated the team's delivery pipeline with a custom MCP server** (Jira → Git → Jenkins, plus
  Slack and Confluence), later turned into an organization plugin on the company's internal
  marketplace.
- **Led and grew teams:** tech lead for 2 mobile developers on Wing AI; rebuilt the Outernets AI
  team after turnover, hiring and mentoring 3 developers.
- **Co-developed a reactive virtual DOM in vanilla JavaScript** for the commercial DHTMLX Suite UI
  library, compatible with React, Angular, Vue and Svelte.
- **Ship my own products end to end:** two Steam games and a SaaS, built and run solo (see below).

## Experience

| Period              | Role                       | Company and focus                                                                     |
| ------------------- | -------------------------- | ------------------------------------------------------------------------------------- |
| Aug 2024 – present  | Senior Frontend Developer  | **ITSharkz:** Swizy (B2B events SaaS) and the Qobuz.com redesign (hi-res streaming)   |
| Sep 2021 – Aug 2024 | Senior Software Engineer   | **Dashbouquet Development:** 7 client products in AI assistants, adtech, Web3, health |
| Jul 2019 – Aug 2021 | Software Engineer          | **XB Software:** DHTMLX Suite, a framework-agnostic JavaScript UI component library   |
| Aug 2017 – Jul 2019 | Junior Full-Stack Engineer | **Travel agency:** an in-house CRM for bookings and sales automation                  |

## Independent products

| Product                                                                                          | What it is                                                                                                              | Stack                                   | Status            |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------- |
| [Last Ones Down](https://store.steampowered.com/app/5253810)                                     | Online social-survival game for up to 16 players: serverless P2P over Steam, voice chat built from scratch on WebCodecs | Electron, React, Three.js               | In development    |
| [Relax Scramble](https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/) | Word puzzle game with online co-op, cloud saves, achievements and 8 languages                                           | Electron, React 19, Redux Toolkit, Vite | Released on Steam |
| [Stash Loot Stack](https://stashlootstack.com/)                                                  | Collectibles portfolio tracker SaaS: price sync, P/L and ROI dashboards, paid tier with price alerts                    | Next.js, Supabase, Stripe, Vercel       | Live              |

## Skills

- **Core:** TypeScript, React, Next.js, Node.js, NestJS, GraphQL
- **Frontend:** Redux, Zustand, XState, Tailwind CSS, SSR, Storybook, design systems, web
  performance, WCAG 2.1 AA, RGAA
- **Backend & APIs:** REST, OpenAPI, WebSockets, PostgreSQL, MongoDB, Supabase, Firestore
- **Testing & DevOps:** Jest, Vitest, Cypress, Testing Library, Docker, GitHub Actions, Jenkins,
  Vercel
- **Security:** OAuth 2.0, OpenID Connect, JWT, RBAC, OWASP Top 10, CSP
- **AI & agentic:** OpenAI and Anthropic APIs, structured outputs, streaming, prompt versioning,
  Braintrust, MCP servers, Claude Code, Codex
- **Also:** Electron, Three.js (WebGL), WebCodecs, Steamworks SDK, Stripe

---

## About this repository

The site is a single-page CV kept deliberately small: no UI kit, no icon library and no runtime
dependencies besides React.

- **Stack:** React 19, TypeScript (strict), Vite 7, Tailwind CSS 4, ESLint, Prettier
- **Print-ready:** a dedicated print stylesheet turns the page into a clean A4 CV, and "Save as
  PDF" names the file "Anton Perch CV.pdf". Dark styles apply on screen only, so the printout is
  always black on white.
- **Light / dark theme:** follows the system setting, is remembered per browser and is applied
  before first paint, so the page never flashes the wrong theme.
- **Dates that never go stale:** job durations and years of experience are computed from start
  and end months.
- **Typed content layer:** all text lives in typed constants, separate from the components, so
  updating the CV is a data change rather than a markup change.
- **Responsive and keyboard-friendly:** layouts for phone, desktop and paper; labelled icon
  buttons; `P` to print, `T` to toggle the theme.
- **CI/CD:** every push to `master` is type-checked, built and deployed to GitHub Pages with
  GitHub Actions.
- **Small touches:** a copy-email button, a GitHub-style status badge on the photo, and a hello
  in the DevTools console.

### Project structure

```text
src/
├── App.tsx            # page layout, theme, print and keyboard handling
├── components/        # Header, Toolbar, Section, ExperienceItem, ProjectCard, Icon
├── constants/         # CV content: text, jobs and dates, skills, contacts
├── types/Content.ts   # types for all content
├── utils/duration.ts  # job duration maths
└── index.css          # Tailwind theme, accent colours, print stylesheet
public/                # photo, favicon and the downloadable PDF CV
.github/workflows/     # GitHub Pages deployment
```

### Running locally

Requires Node.js 20.19+ (see `.nvmrc`) and Yarn.

```bash
yarn       # install dependencies
yarn dev   # start the dev server at http://localhost:3000/portfolio/
```

| Command        | What it does                                   |
| -------------- | ---------------------------------------------- |
| `yarn dev`     | Dev server with hot reload                     |
| `yarn build`   | Type-check and build for production to `dist/` |
| `yarn preview` | Serve the production build locally             |
| `yarn lint`    | Run ESLint                                     |
| `yarn format`  | Format the code with Prettier                  |

### Editing content

- Page text: `src/constants/content.ts`
- Job links and dates (for durations): `src/constants/jobs.ts`
- Skill groups: `src/constants/skills.ts`
- Contacts and social links: `src/constants/contacts.ts`
- The downloadable CV lives in `public/Anton Perch CV.pdf`

## Contact

- Email: [perch.anton@gmail.com](mailto:perch.anton@gmail.com)
- LinkedIn: [anton-perch-768578113](https://www.linkedin.com/in/anton-perch-768578113/)
- Telegram: [@perchusha](https://t.me/perchusha)
