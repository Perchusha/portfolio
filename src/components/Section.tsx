import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  className?: string
  children: ReactNode
}

function Section({ title, className = '', children }: SectionProps) {
  return (
    <section className={`mb-12 last:mb-0 print:mb-4 print:last:mb-0 ${className}`}>
      <h2 className="section-title mb-4 border-b border-zinc-300 pb-2 text-2xl font-bold text-zinc-900 dark:border-zinc-800 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
