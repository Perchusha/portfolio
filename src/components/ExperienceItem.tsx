import { jobs } from '../constants/jobs'
import type { DurationUnits, Experience } from '../types/Content'
import { formatDuration, monthsBetween } from '../utils/duration'
import Icon from './Icon'

type ExperienceItemProps = {
  job: Experience
  units: DurationUnits
}

function ExperienceItem({ job, units }: ExperienceItemProps) {
  const meta = jobs[job.id]
  const [company, location] = job.company.split(/, (.+)/)
  const isCurrent = !meta.end

  return (
    <article className="job mb-8 last:mb-0 print:mb-3">
      <div className="job-head mb-1 flex flex-col md:flex-row md:items-center md:justify-between print:flex-row print:items-center print:justify-between">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white print:text-base">
          {job.role}
        </h3>
        <div className="flex items-center gap-2 text-zinc-700 italic dark:text-zinc-400">
          {isCurrent && (
            <span className="h-2 w-2 rounded-full bg-emerald-500 print:hidden" aria-hidden="true" />
          )}
          {job.period}
          <span className="font-mono text-xs not-italic text-zinc-500 dark:text-zinc-500">
            · {formatDuration(monthsBetween(meta.start, meta.end), units)}
          </span>
        </div>
      </div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 text-accent print:mb-1">
        {meta.url ? (
          <a
            href={meta.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-medium hover:underline"
          >
            {company}
            <Icon name="externalLink" className="h-3.5 w-3.5 print:hidden" />
          </a>
        ) : (
          <span className="font-medium">{company}</span>
        )}
        {location && <span className="text-sm text-zinc-600 dark:text-zinc-400">{location}</span>}
      </div>
      <ul className="list-disc space-y-1 pl-5 text-zinc-800 marker:text-zinc-500 dark:text-zinc-300 print:space-y-0">
        {job.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceItem
