
export interface ZenTheme {
  name: string
  description: string
  image: string
  downloadUrl: string
  id: string
  homepage?: string
  readme: string
  preferences: {
    [key: string]: string
  },
  author: string
}

const THEME_API = "https://zen-browser.github.io/theme-store/themes.json";
const CACHE_OPTIONS = { cache: "no-cache" } as RequestInit;

export async function getAllThemes() {
  // Fetch from the API
  const response = await fetch(THEME_API, CACHE_OPTIONS);
  const themes = await response.json();
  // transform in to a ZenTheme[] as it is currently an object
  let themesArray: ZenTheme[] = [];
  for (let key in themes) {
    themesArray.push(themes[key]);
  }
  return themesArray;
}

export function getThemesFromSearch(themes: ZenTheme[], query: string): ZenTheme[] {
  return themes.filter((theme) => theme.name.toLowerCase().includes(query.toLowerCase()));
}

export async function getThemeFromId(id: string) {
  return (await getAllThemes()).find((theme) => theme.id === id);
}

export async function getThemeMarkdown(theme: ZenTheme) {
  return (await fetch(theme.readme, CACHE_OPTIONS)).text();
}

export function getThemeAuthorLink(theme: ZenTheme): string {
  return `https://github.com/${theme.author}`;
}
