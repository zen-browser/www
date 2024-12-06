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

const THEME_API = "https://zen-browser.github.io/theme-store/themes.json";
const CACHE_OPTIONS: RequestInit = {
	next: {
		revalidate: 60, // Revalidate every 60 seconds
	},
};

/**
 * Type Guard to validate Date objects.
 * @param date - The date to validate.
 * @returns True if valid Date, else false.
 */
function isValidDate(date: any): date is Date {
	return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Parses a date string into a Date object.
 * Assigns a future date if `assignFutureDate` is true and date is invalid/missing.
 * @param dateString - The date string to parse.
 * @param assignFutureDate - Whether to assign a future date if parsing fails.
 * @returns A valid Date object.
 */
function parseDate(
	dateString: string | undefined,
	assignFutureDate: boolean = false,
): Date {
	const date = new Date(dateString || "");
	if (isValidDate(date)) {
		return date;
	} else {
		return assignFutureDate ? new Date(8640000000000000) : new Date(0); // Future date or Unix epoch
	}
}

/**
 * Fetches all mods from the API and transforms them into an array of ZenTheme objects.
 * Assigns a future date to `createdAt` if it's missing to ensure proper sorting.
 * @returns A promise that resolves to an array of ZenTheme objects.
 */
export async function getAllThemes(): Promise<ZenTheme[]> {
	try {
		const response = await fetch(THEME_API, CACHE_OPTIONS);

		if (!response.ok) {
			throw new Error(`Failed to fetch themes: ${response.statusText}`);
		}

		const themes = await response.json();
		const themesArray: ZenTheme[] = [];

		for (const key in themes) {
			if (themes.hasOwnProperty(key)) {
				const theme = themes[key];

				// Remove duplicate tags
				const uniqueTags: string[] = Array.from(new Set(theme.tags || []));

				// Parse dates
				const createdAt = parseDate(theme.createdAt, true); // Assign future date if missing
				const updatedAt = parseDate(theme.updatedAt);

				const zenTheme: ZenTheme = {
					name: theme.name,
					description: theme.description,
					image: theme.image,
					downloadUrl: theme.style, // Assuming 'style' is the download URL
					id: theme.id,
					homepage: theme.homepage,
					readme: theme.readme,
					preferences: theme.preferences,
					isColorTheme:
						typeof theme.isColorTheme === "boolean"
							? theme.isColorTheme
							: false,
					author: theme.author,
					version: theme.version,
					tags: uniqueTags,
					createdAt,
					updatedAt,
				};

				// Validate dates
				if (!isValidDate(zenTheme.createdAt)) {
					zenTheme.createdAt = new Date(8640000000000000); // Assign future date
				}

				if (!isValidDate(zenTheme.updatedAt)) {
					zenTheme.updatedAt = new Date(0); // Assign Unix epoch
				}

				themesArray.push(zenTheme);
			}
		}

		return themesArray;
	} catch (error) {
		console.error("Error fetching or parsing mods:", error);
		return []; // Return an empty array in case of error
	}
}

/**
 * Searches and sorts mods based on query, tags, and sort criteria.
 * @param themes - Array of ZenTheme objects.
 * @param query - Search query string.
 * @param tags - Array of tags to filter by.
 * @param sortBy - Criterion to sort by ('name', 'createdAt', 'updatedAt').
 * @param createdBefore - Optional Date to filter mods created before this date.
 * @returns An array of filtered and sorted ZenTheme objects.
 */
export function getThemesFromSearch(
	themes: ZenTheme[],
	query: string,
	tags: string[],
	sortBy: string,
	sortOrder: string,
	createdBefore?: Date,
): ZenTheme[] {
	const normalizedQuery = query.toLowerCase();

	// Filter themes based on query, tags, and date
	const filteredThemes = themes.filter((theme) => {
		const titleMatchesQuery = theme.name.toLowerCase().includes(normalizedQuery);
		const authorMatchesQuery = theme.author.toLowerCase().includes(normalizedQuery);
		const descriptionMatchesQuery = theme.description.toLowerCase().includes(normalizedQuery);
		const matchesQuery = titleMatchesQuery || descriptionMatchesQuery || authorMatchesQuery;
		const matchesTag =
			tags.length === 0 ||
			(theme.tags && tags.some((tag) => theme.tags.includes(tag)));
		const matchesDate = !createdBefore || theme.createdAt < createdBefore;

		return matchesQuery && matchesTag && matchesDate;
	});

	// If no themes match, return an empty array (handle zero-results gracefully)
	if (filteredThemes.length === 0) {
		return [];
	}

	return filteredThemes.sort((a, b) => {
		// Sort by number of matching tags first
		const aMatchCount = tags.filter((tag) => a.tags.includes(tag)).length;
		const bMatchCount = tags.filter((tag) => b.tags.includes(tag)).length;

		if (aMatchCount !== bMatchCount) {
			return bMatchCount - aMatchCount;
		}

		// Sort by selected sort method
		if (sortBy === "name") {
			return sortOrder === "asc"
				? a.name.localeCompare(b.name)
				: b.name.localeCompare(a.name);
		} else if (sortBy === "createdAt") {
			return sortOrder === "asc"
				? b.createdAt.getTime() - a.createdAt.getTime()
				: a.createdAt.getTime() - b.createdAt.getTime();
		} else if (sortBy === "updatedAt") {
			return sortOrder === "asc"
				? b.updatedAt.getTime() - a.updatedAt.getTime()
				: a.updatedAt.getTime() - b.updatedAt.getTime();
		}

		return 0; // Default to no sorting if sortBy is unrecognized
	});
}

/**
 * Retrieves a theme by its ID.
 * @param id - The ID of the theme to retrieve.
 * @returns A promise that resolves to the ZenTheme object or undefined if not found.
 */
export async function getThemeFromId(
	id: string,
): Promise<ZenTheme | undefined> {
	const allThemes = await getAllThemes();
	return allThemes.find((theme) => theme.id === id);
}

/**
 * Fetches the markdown content of a theme's readme.
 * @param theme - The ZenTheme object.
 * @returns A promise that resolves to the readme markdown string.
 */
export async function getThemeMarkdown(theme: ZenTheme): Promise<string> {
	try {
		const response = await fetch(theme.readme, CACHE_OPTIONS);
		if (!response.ok) {
			throw new Error(`Failed to fetch README: ${response.statusText}`);
		}
		return await response.text();
	} catch (error) {
		console.error("Error fetching README:", error);
		return ""; // Return an empty string in case of error
	}
}

/**
 * Generates the GitHub link for a theme's author.
 * @param theme - The ZenTheme object.
 * @returns A string URL to the author's GitHub profile.
 */
export function getThemeAuthorLink(theme: ZenTheme): string {
	return `https://github.com/${theme.author}`;
}
