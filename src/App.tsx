import { useCallback, useEffect, useState } from 'react'
import ExperienceItem from './components/ExperienceItem'
import Header from './components/Header'
import Icon from './components/Icon'
import ProjectCard from './components/ProjectCard'
import Section from './components/Section'
import Toolbar from './components/Toolbar'
import { content as t } from './constants/content'
import { skillGroups } from './constants/skills'

const printCv = () => window.print()

const subheading =
  'mb-3 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white'

const pill =
  'rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'

function App() {
  // index.html sets the class before first paint, so this never flashes.
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggleTheme = useCallback(() => {
    setIsDark((current) => {
      const next = !current
      document.documentElement.classList.toggle('dark', next)
      try {
        window.localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
      } catch {
        // Storage can be blocked; the theme just won't be remembered.
      }
      return next
    })
  }, [])

  // "Save as PDF" uses the document title as the file name.
  useEffect(() => {
    const original = document.title
    const before = () => (document.title = 'Anton Perch CV')
    const after = () => (document.title = original)
    window.addEventListener('beforeprint', before)
    window.addEventListener('afterprint', after)
    return () => {
      window.removeEventListener('beforeprint', before)
      window.removeEventListener('afterprint', after)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return
      const actions: Record<string, () => void> = { p: printCv, t: toggleTheme }
      const action = actions[event.key.toLowerCase()]
      if (action) {
        event.preventDefault()
        action()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggleTheme])

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 md:py-8 print:max-w-none print:p-0">
      <div className="mb-10 md:mb-12 print:mb-4">
        <Header
          t={t}
          actions={<Toolbar t={t} isDark={isDark} onThemeToggle={toggleTheme} onPrint={printCv} />}
        />
      </div>

      <Section title={t.about.title}>
        <p className="text-zinc-800 dark:text-zinc-300">{t.about.body}</p>
      </Section>

      <Section title={t.sections.experienceTitle}>
        {t.experience.map((job) => (
          <ExperienceItem key={job.id} job={job} units={t.duration} />
        ))}
      </Section>

      <Section title={t.sections.projectsTitle}>
        <div className="projects grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              linkLabel={t.sections.projectLinkLabel}
            />
          ))}
        </div>
      </Section>

      <Section title={t.sections.skillsTitle}>
        <div className="skills grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id} className="skill-group">
              <h3 className="skill-title mb-3 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
                <Icon name={group.icon} className="h-5 w-5 text-accent" />
                <span>{t.skillGroups[group.id]}</span>
              </h3>
              <div className="skill-list flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 transition hover:bg-accent-soft hover:text-accent dark:bg-zinc-900 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.sections.personalTitle}>
        <div className="personal grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 print:grid-cols-2 print:gap-y-3">
          <div>
            <h3 className={subheading}>
              <Icon name="graduationCap" className="h-5 w-5 text-accent print:hidden" />
              {t.sections.educationTitle}
            </h3>
            <p className="font-medium text-zinc-800 dark:text-zinc-200">{t.education.degree}</p>
            <p className="text-zinc-700 dark:text-zinc-400">{t.education.school}</p>
            <p className="font-mono text-sm text-zinc-600">{t.education.period}</p>
          </div>
          <div>
            <h3 className={subheading}>
              <Icon name="languages" className="h-5 w-5 text-accent print:hidden" />
              {t.sections.languagesTitle}
            </h3>
            <div className="print-inline flex flex-wrap gap-2">
              {t.languages.map((item) => (
                <span key={item} className={pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className={subheading}>
              <Icon name="target" className="h-5 w-5 text-accent print:hidden" />
              {t.sections.interestsTitle}
            </h3>
            <div className="print-inline flex flex-wrap gap-2">
              {t.interests.map((item) => (
                <span key={item} className={pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className={subheading}>
              <Icon name="heart" className="h-5 w-5 text-accent print:hidden" />
              {t.sections.hobbiesTitle}
            </h3>
            <div className="print-inline grid grid-cols-2 gap-3">
              {t.hobbies.map((hobby) => (
                <div
                  key={hobby.label}
                  className="flex items-center gap-3 rounded-xl bg-zinc-100 p-2 pr-3 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-accent dark:bg-zinc-800 print:hidden">
                    <Icon name={hobby.icon} className="h-[18px] w-[18px]" />
                  </span>
                  {hobby.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App
