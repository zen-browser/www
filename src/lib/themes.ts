
export interface ZenTheme {
  name: string
  description: string
  image: string
  downloadUrl: string
  id: string
  homepage?: string
}

export function getAllThemes(): ZenTheme[] {
  // TODO: Fetch themes from the marketplace (database or JSON file)
  return [
    {
      name: "Zen",
      description: "The default theme for Zen Browser",
      downloadUrl: "https://zen-browser.app/download", // idrc
      id: "zen",
      image: "https://imgs.search.brave.com/qcDBMGuBLvJGLxWR3IkZyg35vROTSZ2omLn_0iLU2rs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgxL2Mz/LzE0LzgxYzMxNDI5/MmViOGM3YzYxNmY5/ZjM3YTRmZDI5ODU4/LmpwZw",
    },
  ];
}

export function getThemesFromSearch(themes: ZenTheme[], query: string): ZenTheme[] {
  return themes.filter((theme) => theme.name.toLowerCase().includes(query.toLowerCase()));
}

export function getThemeFromId(id: string): ZenTheme | undefined {
  return getAllThemes().find((theme) => theme.id === id);
}
