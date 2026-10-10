import type { IconName } from '../components/Icon'

export const email = 'perch.anton@gmail.com'
export const phone = '+48 571 404 348'

export const socials: { label: string; href: string; print: string; icon: IconName }[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anton-perch-768578113/',
    print: 'linkedin.com/in/anton-perch-768578113',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Perchusha',
    print: 'github.com/Perchusha',
    icon: 'github',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anton_perch/',
    print: 'instagram.com/anton_perch',
    icon: 'instagram',
  },
  { label: 'Telegram', href: 'https://t.me/perchusha', print: 't.me/perchusha', icon: 'telegram' },
]
