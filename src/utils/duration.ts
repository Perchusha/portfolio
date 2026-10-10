import type { DurationUnits } from '../types/Content'

const parse = (value: string) => {
  const [year, month] = value.split('-').map(Number)
  return year * 12 + month - 1
}

const now = () => {
  const date = new Date()
  return date.getFullYear() * 12 + date.getMonth()
}

// Inclusive month count, the way LinkedIn shows it: Oct 2024 - Oct 2024 is "1 mo".
export const monthsBetween = (start: string, end?: string) =>
  (end ? parse(end) : now()) - parse(start) + 1

export const formatDuration = (months: number, units: DurationUnits) => {
  const years = Math.floor(months / 12)
  const rest = months % 12
  return [years && `${years} ${units.year}`, rest && `${rest} ${units.month}`]
    .filter(Boolean)
    .join(' ')
}
