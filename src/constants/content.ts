import type { Content } from '../types/Content'

export const content: Content = {
  hero: {
    role: 'Senior Software Engineer',
    location: 'Warsaw, Poland · Remote',
    status: 'Nothing is impossible',
  },
  about: {
    title: 'About Me',
    body: 'Senior Software Engineer with 9 years designing and shipping production web, desktop and real-time systems in TypeScript, React, Next.js and Node.js/NestJS. Owns systems end-to-end, from architecture and technology selection to delivery: led the migration of an LLM-backed product from serverless Firebase to NestJS, cutting response times from 10-15s to ~3s, and designed its AI pipeline on Anthropic and OpenAI models with prompt versioning, structured outputs and streaming. Built a custom MCP server that automates the delivery pipeline for the whole team, from Jira ticket to CI run. Shipped and supports a commercial Steam game solo, including P2P networking on the raw Steamworks SDK. As tech lead, drove the product roadmap directly with the client, mentored engineers and rebuilt the team after turnover. Strong on web fundamentals: accessible (WCAG 2.1 AA, RGAA), server-rendered, well-tested UIs with secure authentication (OAuth 2.0, OpenID Connect).',
  },
  sections: {
    experienceTitle: 'Work Experience',
    skillsTitle: 'Technical Skills',
    projectsTitle: 'Independent Products',
    personalTitle: 'Personal',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    interestsTitle: 'Professional Interests',
    hobbiesTitle: 'Hobbies',
    projectLinkLabel: 'View project',
  },
  skillGroups: {
    languages: 'Languages & Frameworks',
    web: 'Web & APIs',
    security: 'Security',
    testing: 'Testing & Tooling',
    data: 'Data',
    architecture: 'Architecture & Practices',
    ai: 'AI & Agentic Engineering',
    also: 'Also worked with',
  },
  duration: {
    year: 'yr',
    month: 'mo',
  },
  ui: {
    print: 'Print CV',
    downloadPdf: 'Download PDF',
    toggleTheme: 'Toggle theme',
    copyEmail: 'Copy email',
    copied: 'Copied!',
  },
  projects: [
    {
      name: 'Relax Scramble: Endless Word Puzzle',
      type: 'Electron + React + Steamworks',
      description:
        'Endless word puzzle for Steam, shipped solo from concept to release and beyond.',
      highlights: [
        'Real-time 2-player co-op over raw Steamworks P2P, no third-party netcode',
        '8-language dictionary engine with a solvable-board guarantee; 450+ tests',
        'Cloud saves, achievements, Steam Deck support; four post-launch updates',
      ],
      status: 'Live on Steam',
      link: 'https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/',
    },
    {
      name: 'Stash Loot Stack',
      type: 'Next.js + Supabase',
      description: 'Collectibles tracker for TCGs, CS2 skins, LEGO, Funko and more.',
      highlights: [
        'Value, P&L, ROI and allocation dashboards; Steam import for CS2',
        'Automated price sync via the CSFloat API and scheduled cron jobs',
        'Stripe paid tier with email price alerts; Sentry and PostHog',
      ],
      status: 'Live on the web',
      link: 'https://stashlootstack.com/',
    },
    {
      name: 'Last Ones Down',
      type: 'Electron + React + Steamworks',
      description: 'Online social survival game in the spirit of "Bunker" for 2–16 players.',
      highlights: [
        'Serverless: lobbies, P2P sync and voice chat over Steamworks',
        'Host-authoritative engine, host migration, 1,000+ tests',
        '3D bunker in Three.js; 100 catastrophes, 120 professions, EN/RU',
      ],
      status: 'In playtesting',
    },
  ],
  experience: [
    {
      id: 'itsharkz',
      role: 'Senior Frontend Developer',
      period: 'Oct 2024 - Present',
      company: 'ITSharkz, Warsaw (Remote)',
      bullets: [
        'Built a custom MCP server that automates the delivery pipeline for the whole team end-to-end, from Jira ticket creation to Jenkins test runs, orchestrating Git, Jira, Slack and Confluence integrations into a single workflow.',
        'Develop and maintain SSR web components for Qobuz.com (hi-res music streaming) across all regional domains using Symfony (Twig) and TypeScript (Stimulus), prototyped and integration-tested in Storybook before release.',
        'Design and build complex frontend modules for Swizy (B2B events/discounts platform) in Next.js, React and GraphQL within a large modular monolith of interdependent subsystems, including a Google Maps event explorer built from scratch with GraphQL-driven data and marker clustering, translating Figma designs into production components.',
        'Integrate AI coding agents (Claude Code, Codex) into daily development: MCP servers for GitHub, Jira, Figma and Storybook, custom Claude Skills, and CLAUDE.md/AGENTS.md project instructions that enforce team conventions.',
        'Implement accessible, mobile-first, responsive UI aligned with the design system, RGAA (French government accessibility) and WCAG 2.1 AA standards.',
        'Review PRs, mentor a colleague and contribute to architectural decisions on new feature integrations; collaborate with backend teams on API design and data contracts.',
      ],
    },
    {
      id: 'dashbouquet',
      role: 'Senior Software Engineer',
      period: 'Sep 2021 - Aug 2024',
      company: 'Dashbouquet Development, Warsaw (Remote)',
      bullets: [
        'Delivered full-stack web and desktop applications (React, Next.js, Node.js, NestJS, PostgreSQL, Electron) across multiple product-driven client projects, owning technology selection, infrastructure setup and database design.',
        'Promoted to Tech Lead on an AI dating-assistant app: led a team of 2, drove the feature roadmap directly with the client, owned technical decisions and code review, mentored developers, participated in hiring and rebuilt the team after turnover.',
        'Led backend migration from serverless Firebase to a NestJS server, cutting LLM response times from 10-15s to ~3s and improving stability; architected the AI pipeline (image understanding via Anthropic Claude, message generation via OpenAI) with prompt versioning, structured outputs, and streaming responses.',
        'Designed AI-powered features across multiple projects using OpenAI and Anthropic models, including prompt engineering, model/prompt configuration and observability (Braintrust), and OCR research (Tesseract, vision models).',
        'Built real-time computer-vision advertising systems using WebSockets, integrating camera streams and human-detection neural networks into interactive Electron + React applications.',
        'Implemented authentication and authorization across client projects: OAuth 2.0 / OpenID Connect social sign-in (Twitter/X, Discord and others), JWT and session-based auth, and role-based access control.',
      ],
    },
    {
      id: 'xbsoftware',
      role: 'Software Engineer',
      period: 'Jul 2019 - Aug 2021',
      company: 'XB Software, Minsk (Office)',
      bullets: [
        'Developed a framework-agnostic JavaScript widget library (DHTMLX Suite) compatible with React, Angular, Vue, Svelte, and legacy environments, including a custom reactive rendering mechanism built on the JavaScript event loop and microtask queue.',
        'Built extensible component architecture using class-based patterns with controlled rendering cycles, performance optimization, and cross-browser support (including legacy IE8+) via Babel and polyfills.',
        'Covered components with unit and e2e tests (Jest, Mocha/Chai, Cypress); integrated widgets into diverse client environments with demo apps and usage documentation.',
        'Mentored 2 junior developers and contributed to internal knowledge sharing.',
      ],
    },
    {
      id: 'travel',
      role: 'Junior Full Stack Engineer',
      period: 'Aug 2017 - Jul 2019',
      company: 'Travel Agency, Minsk (Office)',
      bullets: [
        'Designed and built a full-stack CRM system from scratch for booking management and sales workflow automation, including role-based access control and real-time activity tracking (PHP, JavaScript, WebSockets).',
        'Worked directly with the business owner to gather requirements and align development with operational needs.',
      ],
    },
  ],
  education: {
    degree: 'Master of Engineering in IT & Ergonomics',
    school: 'Belarusian State University of Informatics and Radioelectronics',
    period: '2014 - 2020',
  },
  languages: ['English (C1)', 'Russian (native)', 'Polish (B1)'],
  interests: ['Frontend Engineering', 'Automation', 'Game Development'],
  hobbies: [
    { label: 'Hi-tech', icon: 'cpu' },
    { label: 'Video games', icon: 'gamepad' },
    { label: 'Collecting', icon: 'gem' },
    { label: 'Swimming', icon: 'waves' },
  ],
}
