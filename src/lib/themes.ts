
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

export function getThemesFromSearch(themes: ZenTheme[], query: string, tags: string[]): ZenTheme[] {
  let filtered = themes.filter((theme) => theme.name.toLowerCase().includes(query.toLowerCase()));
  if (tags.includes("all")) return filtered;
  const isSearchingForColorScheme = tags.includes("color-scheme");
  const isSearchingForUtility = !isSearchingForColorScheme && tags.includes("utility");
  return filtered.filter((theme) => {
    if (isSearchingForColorScheme && theme.isColorTheme) return true;
    if (isSearchingForUtility && !theme.isColorTheme) return true;
    return false;
  });
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
