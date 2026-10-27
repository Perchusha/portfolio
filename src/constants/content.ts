import type { Content } from '../types/Content'

export const content: Content = {
  hero: {
    role: 'Senior Software Engineer',
    focus: 'Frontend & Full-Stack',
    location: 'Warsaw, Poland · Remote',
    status: 'Nothing is impossible',
  },
  about: {
    title: 'About Me',
    body: 'Senior Software Engineer with 9 years shipping production web, desktop and real-time applications in TypeScript, React, Next.js and Node.js/NestJS. Strong in frontend architecture, accessibility (WCAG 2.1 AA, RGAA), performance and testing, with hands-on full-stack and applied AI experience. Works in Agile product teams, taking features from idea to release and contributing to product growth. Former tech lead and mentor; solo-builds and ships commercial Steam games.',
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
    core: 'Core stack',
    frontend: 'Frontend',
    backend: 'Backend & APIs',
    testing: 'Testing & DevOps',
    security: 'Security',
    ai: 'AI & Agentic',
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
      name: 'Last Ones Down',
      type: 'Electron + React + Three.js',
      description: 'Online social-survival game for up to 16 players.',
      highlights: [
        'Serverless, host-authoritative P2P over Steam Lobbies; a deterministic engine lets a match continue when the host leaves',
        'Push-to-talk voice chat from scratch: Opus encoding via WebCodecs over the P2P layer',
        'Vitest, headless full-match smoke tests and visual regression; built with an agentic Claude Code pipeline',
      ],
      status: 'In development · Steam page',
      link: 'https://store.steampowered.com/app/5253810',
    },
    {
      name: 'Relax Scramble',
      type: 'Electron + React 19 + Redux Toolkit + Vite',
      description: 'Word puzzle game with online co-op.',
      highlights: [
        'Shipped and run solo: cloud saves, achievements, rich presence, 8 languages',
        'Real-time 2-player co-op directly on Steamworks P2P, with crash-safe reward grants',
        'Jest and Testing Library coverage; four post-launch updates driven by player feedback',
      ],
      status: 'Released on Steam',
      link: 'https://store.steampowered.com/app/3764920/Relax_Scramble_Endless_Word_Puzzle/',
    },
    {
      name: 'Stash Loot Stack',
      type: 'Next.js + Supabase + Stripe + Vercel',
      description: 'Collectibles portfolio tracker SaaS.',
      highlights: [
        'Scheduled price sync (CSFloat API, TCG feeds) into value, P/L and ROI dashboards',
        'Steam inventory import; Stripe paid tier with email price alerts (Resend)',
        'Built and launched solo, monitored with Sentry and PostHog',
      ],
      status: 'Live on the web',
      link: 'https://stashlootstack.com/',
    },
  ],
  experience: [
    {
      id: 'itsharkz',
      role: 'Senior Frontend Developer',
      period: 'Aug 2024 - Present',
      company: 'ITSharkz, Warsaw (Remote)',
      summary:
        'Frontend for two products in Agile teams: Swizy (B2B events SaaS) and the Qobuz.com redesign (hi-res music streaming)',
      bullets: [
        'Build product features for **Swizy, a B2B events and discounts SaaS**, in Next.js, React, TypeScript and GraphQL within a large monorepo of interdependent modules, including a Google Maps event explorer built from scratch with marker clustering.',
        'Built the component library for the **Qobuz.com redesign from scratch** following Atomic Design: SSR components on Symfony Twig templates with TypeScript Stimulus controllers, each covered by Storybook stories, integration and accessibility tests.',
        'Integrate the new design across all Qobuz regional domains: layouts for new pages, responsive behavior and RGAA / WCAG 2.1 AA compliance, while fixing long-standing critical issues in legacy code.',
        "Built a **custom MCP server automating the team's delivery pipeline** from Jira ticket to Jenkins test run (Git, Jira, Slack, Confluence), later **evolved into an organization plugin on the company's internal marketplace**; set up Claude Code and Codex for daily development with MCP servers (GitHub, Jira, Figma, Storybook), custom skills and CLAUDE.md/AGENTS.md conventions.",
        'Work in a fully Agile product team: take features from refinement and Figma designs to release, clarify requirements with product and design, contribute to product growth, shape API contracts with backend teams and review PRs.',
      ],
    },
    {
      id: 'dashbouquet',
      role: 'Senior Software Engineer',
      period: 'Sep 2021 - Aug 2024',
      company: 'Dashbouquet Development, Warsaw (Remote)',
      summary:
        'Full-stack on 7 client products: AI assistants, interactive adtech, Web3 and telemedicine',
      bullets: [
        '**Wing AI** (AI dating assistant, iOS/Android): led the migration from serverless Firebase to NestJS, **cutting response times from 10-15s to ~3s**; architected the AI pipeline (Claude Haiku for image understanding, structured JSON handoff to GPT) with streaming, prompt versioning and Braintrust observability.',
        'Promoted to **Tech Lead** after 3 months: led 2 mobile developers, planned and reviewed their work, and drove roadmap decisions with the client and an external designer.',
        '**Outernets AI** (adtech startup, interactive digital signage), lead developer: an Electron app on Apple Silicon Macs analyzes a live camera feed (people detection, demographics, engagement) and streams it over WebSocket to remotely deployed React ad apps, 3-4 new ones a month.',
        'Built its client dashboard (app deployment, online status, logging, funnel and audience analytics) and rebuilt the team after turnover, hiring a backend and 2 frontend developers and mentoring them through ramp-up.',
        "**Ithaca Protocol** (crypto airdrop platform): built the social integrations module linking X, Discord, Telegram and Instagram accounts via each platform's OAuth/API flows, with a quest system for airdrop bonuses; React UI and Node.js backend.",
        "**Telemedicine:** React, TypeScript and GraphQL UI for Health Espresso's provider communication platform; later BetterYou's investor-demo MVP with voice navigation (speech-to-text fed to GPT, flow in XState), including its architecture and tooling.",
        '**AI tools and R&D:** an OpenAI + HubSpot email assistant for sales teams with Braintrust prompt management (Archive); image-to-PPTX feasibility research with Tesseract OCR and vision models (ProSights).',
      ],
    },
    {
      id: 'xbsoftware',
      role: 'Software Engineer',
      period: 'Jul 2019 - Aug 2021',
      company: 'XB Software, Minsk (Office)',
      summary:
        'DHTMLX Suite team: a commercial, framework-agnostic JavaScript UI component library',
      bullets: [
        'Built UI widgets compatible with React, Angular, Vue, Svelte and legacy environments, integrating them into client apps with demo projects and usage docs.',
        "Co-developed the library's **reactive virtual DOM in vanilla JavaScript**: class-based components with lifecycle hooks and inheritance for fine-grained control over component mutations, with render scheduling on the event loop and microtask queue.",
        'Optimized rendering performance and cross-browser support down to IE8 (Babel, polyfills), covered components with unit and e2e tests (Jest, Mocha/Chai, Cypress) and mentored 2 junior developers.',
      ],
    },
    {
      id: 'travel',
      role: 'Junior Full-Stack Engineer',
      period: 'Aug 2017 - Jul 2019',
      company: 'Travel Agency, Minsk (Office)',
      summary: 'In-house full-stack development of internal business tools for a travel agency',
      bullets: [
        'Built a CRM from scratch for booking management and sales automation (JavaScript, PHP, WebSockets) with role-based access and real-time activity tracking, gathering requirements directly with the business owner.',
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
