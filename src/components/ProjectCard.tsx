import type { Project } from '../types/Content'
import Icon from './Icon'

type ProjectCardProps = {
  project: Project
  linkLabel: string
}

function ProjectCard({ project, linkLabel }: ProjectCardProps) {
  const statusClass =
    'inline-flex items-center gap-1 self-start rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'

  return (
    <article className="project-card flex h-full flex-col rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900">
      <h3
        className="mb-1 truncate text-lg font-semibold text-zinc-900 dark:text-white print:text-base"
        title={project.name}
      >
        {project.name}
      </h3>
      <p className="mb-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">{project.type}</p>
      <p className="mb-2 text-sm text-zinc-800 dark:text-zinc-300">{project.description}</p>
      <ul className="mb-4 flex-1 list-disc space-y-1 pl-5 text-sm text-zinc-700 marker:text-zinc-500 dark:text-zinc-400 print:mb-1 print:space-y-0">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${linkLabel}: ${project.name}`}
          className={`${statusClass} transition-colors hover:bg-purple-200 dark:hover:bg-purple-900/70 print:hidden`}
        >
          {project.status}
          <Icon name="externalLink" className="h-3 w-3" />
        </a>
      ) : (
        <span className={`${statusClass} print:hidden`}>{project.status}</span>
      )}
      {/* Paper can't be clicked, so the printed CV shows the address instead of the badge. */}
      {project.link && (
        <span className="hidden text-sm print:inline">
          {project.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
        </span>
      )}
    </article>
  )
}

export default ProjectCard
