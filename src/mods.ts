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
  try {
    const res = await fetch(THEME_API)
    const json = await res.json()
    // convert dict to array
    const mods = Object.keys(json).map(key => json[key])
    return mods
  } catch (error) {
    console.error(error)
    return []
  }
}

export function getAuthorLink(author: string): string {
  return `https://github.com/${author}`
}

export function getLocalizedDate(date: Date): string {
  return format(date, 'PP')
}
