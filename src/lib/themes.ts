export interface ZenTheme {
	name: string;
	description: string;
	image: string;
	downloadUrl: string;
	id: string;
	homepage?: string;
	readme: string;
	preferences?: string;
	isColorTheme: boolean;
	author: string;
	version: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const THEME_API = "https://therealmg.github.io/themes.json";
const CACHE_OPTIONS = {
	next: {
		revalidate: 60,
	},
} as RequestInit;

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

export function getThemesFromSearch(
	themes: ZenTheme[],
	query: string,
	tags: string[],
  sortBy: string,
): ZenTheme[] {
	const normalizedQuery = query.toLowerCase();

  return themes.filter((theme) => {
    const matchesQuery = theme.name.toLowerCase().includes(normalizedQuery);
    const matchesTag = tags.length === 0 || (theme.tags && tags.some(tag => theme.tags.includes(tag)));

    return matchesQuery && matchesTag;
  }).sort((a, b) => {
    // Sort by number of matching tags first
    const aMatchCount = tags.filter(tag => a.tags.includes(tag)).length
    const bMatchCount = tags.filter(tag => b.tags.includes(tag)).length
    if (aMatchCount !== bMatchCount) {
      return bMatchCount - aMatchCount
    }

    // If match counts are equal, use the selected sort method
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "createdAt") {
      console.log(a.name)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else if (sortBy === "updatedAt") {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    }
    return 0
  })
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
