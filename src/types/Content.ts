import type { IconName } from '../components/Icon'

export type JobId = 'itsharkz' | 'dashbouquet' | 'xbsoftware' | 'travel'

export type SkillGroupId =
  | 'languages'
  | 'web'
  | 'security'
  | 'testing'
  | 'data'
  | 'architecture'
  | 'ai'
  | 'also'

export type Hero = {
  role: string
  location: string
  status: string
}

export type About = {
  title: string
  body: string
}

export type Sections = {
  experienceTitle: string
  skillsTitle: string
  projectsTitle: string
  personalTitle: string
  educationTitle: string
  languagesTitle: string
  interestsTitle: string
  hobbiesTitle: string
  projectLinkLabel: string
}

export type DurationUnits = {
  year: string
  month: string
}

export type Ui = {
  print: string
  downloadPdf: string
  toggleTheme: string
  copyEmail: string
  copied: string
}

export type Project = {
  name: string
  type: string
  description: string
  highlights: string[]
  status: string
  link?: string
}

export type Experience = {
  id: JobId
  role: string
  period: string
  company: string
  bullets: string[]
}

export type Education = {
  degree: string
  school: string
  period: string
}

export type Hobby = {
  label: string
  icon: IconName
}

export type Content = {
  hero: Hero
  about: About
  sections: Sections
  skillGroups: Record<SkillGroupId, string>
  duration: DurationUnits
  ui: Ui
  projects: Project[]
  experience: Experience[]
  education: Education
  languages: string[]
  interests: string[]
  hobbies: Hobby[]
}
