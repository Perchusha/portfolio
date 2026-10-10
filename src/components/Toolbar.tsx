import type { Content } from '../types/Content'
import Icon from './Icon'

type ToolbarProps = {
  t: Content
  isDark: boolean
  onThemeToggle: () => void
  onPrint: () => void
}

const iconButton =
  'cursor-pointer rounded-full p-2 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'

function Toolbar({ t, isDark, onThemeToggle, onPrint }: ToolbarProps) {
  const cvUrl = `${import.meta.env.BASE_URL}Anton%20Perch%20CV.pdf`

  return (
    <div className="flex items-center justify-end gap-1 print:hidden">
      <button
        type="button"
        onClick={onThemeToggle}
        className={iconButton}
        title={`${t.ui.toggleTheme} (T)`}
        aria-label={t.ui.toggleTheme}
      >
        <Icon name={isDark ? 'sun' : 'moon'} className="h-5 w-5" />
      </button>
      <a
        className={iconButton}
        href={cvUrl}
        download
        title={t.ui.downloadPdf}
        aria-label={t.ui.downloadPdf}
      >
        <Icon name="download" className="h-5 w-5" />
      </a>
      <button
        type="button"
        onClick={onPrint}
        className={iconButton}
        title={`${t.ui.print} (P)`}
        aria-label={t.ui.print}
      >
        <Icon name="printer" className="h-5 w-5" />
      </button>
    </div>
  )
}

export default Toolbar
