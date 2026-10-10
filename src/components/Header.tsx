import { useState, type ReactNode } from 'react'
import { email, phone, socials } from '../constants/contacts'
import type { Content } from '../types/Content'
import Icon from './Icon'

type HeaderProps = {
  t: Content
  actions: ReactNode
}

function Header({ t, actions }: HeaderProps) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    // Phone: page controls pinned top-right, then photo, name and contacts stacked and centred.
    // Desktop: photo | name and contacts | page controls level with the name.
    <header className="relative grid grid-cols-1 justify-items-center gap-y-4 pt-10 md:grid-cols-[auto_1fr_auto] md:items-center md:justify-items-stretch md:gap-x-8 md:gap-y-3 md:pt-0 print:block print:justify-items-stretch print:pt-0">
      <div className="absolute top-0 right-0 md:static md:col-start-3 md:row-start-1 md:self-start print:hidden">
        {actions}
      </div>

      <div className="avatar group relative h-[158px] w-[158px] shrink-0 rounded-full bg-accent p-1 shadow-lg shadow-accent/20 md:col-start-1 md:row-span-2 md:h-44 md:w-44 print:hidden">
        <img
          src={`${import.meta.env.BASE_URL}avatar.png`}
          alt="Anton Perch"
          width={168}
          height={168}
          decoding="async"
          className="h-full w-full rounded-full bg-white object-cover dark:bg-zinc-900"
        />
        {/* GitHub-style status: an emoji badge that unfolds into a message on hover (or tap).
            Rightwards next to the name on desktop, leftwards over the photo on phones. */}
        <span
          className="absolute right-0 bottom-1 z-10 flex h-9 flex-row-reverse items-center rounded-full border border-zinc-200 bg-white shadow-md md:right-auto md:left-[calc(100%-2.5rem)] md:h-10 md:flex-row dark:border-zinc-700 dark:bg-zinc-800"
          title={t.hero.status}
        >
          {/* A square cell the full height of the badge keeps it a perfect circle when closed. */}
          <span
            className="flex aspect-square h-full shrink-0 items-center justify-center text-base leading-none md:text-lg"
            aria-hidden="true"
          >
            ✨
          </span>
          <span className="max-w-0 overflow-hidden text-xs font-medium whitespace-nowrap text-zinc-800 opacity-0 transition-all duration-300 group-hover:max-w-60 group-hover:pl-3 group-hover:opacity-100 md:group-hover:pr-3 md:group-hover:pl-0 dark:text-zinc-200">
            {t.hero.status}
          </span>
        </span>
      </div>

      <div className="min-w-0 text-center md:col-start-2 md:self-end md:text-left print:text-left">
        <h1 className="mb-1 text-3xl leading-tight font-bold text-zinc-900 md:text-4xl dark:text-white">
          Anton Perch
        </h1>
        <h2 className="text-lg text-accent md:text-2xl">{t.hero.role}</h2>
      </div>

      <div className="md:col-span-2 md:col-start-2 md:self-start print:mt-1">
        <div className="mb-2 flex flex-col items-center gap-y-1.5 text-sm text-zinc-800 md:mb-3 md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2 md:text-base dark:text-zinc-300 print:mb-1 print:flex-row print:flex-wrap print:gap-x-6">
          <span className="flex items-center gap-1.5">
            <a
              className="flex min-w-0 items-center gap-2 transition hover:text-accent"
              href={`mailto:${email}`}
            >
              <Icon name="mail" className="h-4 w-4 shrink-0" />
              {email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              title={t.ui.copyEmail}
              aria-label={t.ui.copyEmail}
              className="relative flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 print:hidden"
            >
              <Icon name={copied ? 'check' : 'copy'} />
              {copied && (
                <span className="toast absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white dark:bg-white dark:text-zinc-900">
                  {t.ui.copied}
                </span>
              )}
            </button>
          </span>
          <a
            className="flex items-center gap-2 transition hover:text-accent"
            href={`tel:${phone.replace(/\s/g, '')}`}
          >
            <Icon name="phone" className="h-4 w-4 shrink-0" />
            {phone}
          </a>
          <span className="flex items-center gap-2">
            <Icon name="mapPin" className="h-4 w-4 shrink-0" />
            {t.hero.location}
          </span>
        </div>

        <div className="flex justify-center gap-1 md:-ml-2 md:justify-start print:hidden">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.label}
              aria-label={social.label}
              className="rounded-full p-2 text-zinc-800 transition hover:bg-zinc-100 hover:text-accent dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Icon name={social.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
        {/* Icons mean nothing on paper, so the printed CV spells the links out. */}
        <p className="hidden text-sm print:block">
          {socials.map((social) => social.print).join(' · ')}
        </p>
      </div>
    </header>
  )
}

export default Header
