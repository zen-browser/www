import { format } from 'date-fns'

export type ZenTheme = {
  name: string
  description: string
  image: string
  downloadUrl: string
  id: string
  homepage?: string
  readme: string
  preferences?: string
  isColorTheme: boolean
  author: string
  version: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const THEME_API = 'https://zen-browser.github.io/theme-store/themes.json'

export async function getAllMods(): Promise<ZenTheme[]> {
  const res = await fetch(THEME_API, { signal: AbortSignal.timeout(10_000) })
  if (!res.ok) {
    throw new Error(`theme-store fetch failed: ${res.status} ${res.statusText}`)
  }
  const json = await res.json()
  return Object.values(json).map(mod => {
    const theme = mod as ZenTheme
    return {
      ...theme,
      createdAt: new Date(theme.createdAt),
      updatedAt: new Date(theme.updatedAt),
    }
  })
}

export function getAuthorLink(author: string): string {
  return `https://github.com/${encodeURIComponent(author)}`
}

export function getLocalizedDate(date: Date | string): string {
  const parsed = typeof date === 'string' ? new Date(date) : date
  if (Number.isNaN(parsed.getTime())) return ''
  return format(parsed, 'PP')
}
