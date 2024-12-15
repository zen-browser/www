export interface ZenTheme {
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

interface FilterOptions {
  createdAt?: Date
  updatedAt?: Date
  search?: string
}

export async function getAllMods(filters?: FilterOptions): Promise<ZenTheme[]> {
  try {
    const res = await fetch(THEME_API)
    const json = await res.json()
    // convert dict to array
    let mods: ZenTheme[] = Object.keys(json).map((key) => json[key])

    if (filters) {
      if (filters.createdAt) {
        mods = mods.filter(
          (mod) => new Date(mod.createdAt) >= filters.createdAt!,
        )
      }
      if (filters.updatedAt) {
        mods = mods.filter(
          (mod) => new Date(mod.updatedAt) >= filters.updatedAt!,
        )
      }
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        mods = mods.filter(
          (mod) =>
            mod.name.toLowerCase().includes(searchLower) ||
            mod.description.toLowerCase().includes(searchLower) ||
            mod.author.toLowerCase().includes(searchLower) ||
            mod.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
        )
      }
    }

    return mods
  } catch (error) {
    console.error(error)
    return []
  }
}

export function getAuthorLink(author: string): string {
  return `https://github.com/${author}`
}
