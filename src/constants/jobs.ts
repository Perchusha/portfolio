import type { JobId } from '../types/Content'

// Job links and dates; dates are YYYY-MM, a missing end means "present".
export const jobs: Record<JobId, { url?: string; start: string; end?: string }> = {
  itsharkz: { url: 'https://itsharkz.com/', start: '2024-10' },
  dashbouquet: { url: 'https://dashbouquet.com/', start: '2021-09', end: '2024-08' },
  xbsoftware: { url: 'https://xbsoftware.com/', start: '2019-07', end: '2021-08' },
  travel: { start: '2017-08', end: '2019-07' },
}
