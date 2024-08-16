import fetch from "sync-fetch";

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
const CACHE_OPTIONS = {};

export function getAllThemes(): ZenTheme[] {
  // Fetch from the API
  const response = fetch(THEME_API, CACHE_OPTIONS);
  const themes = response.json();
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

export function getThemeFromId(id: string): ZenTheme | undefined {
  return getAllThemes().find((theme) => theme.id === id);
}

export function getThemeMarkdown(theme: ZenTheme): string {
  return fetch(theme.readme, CACHE_OPTIONS).text();
}
