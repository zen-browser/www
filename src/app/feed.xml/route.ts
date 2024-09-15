import { Feed } from "feed";
import { releaseNotes } from "@/lib/release-notes";
import type { ReleaseNote } from "@/lib/release-notes";

// Force feed.xml to be cached as static and remain constant for the lifetime of the current site build.
// The supplied releaseNotes array is constant per build, so this will always be the latest release notes.
export const dynamic = "force-static";

/** The default number of entries to include in the RSS feed. */
const RSS_ENTRY_LIMIT = 20;

/**
 * Handles the GET request for the `feed.xml` endpoint.
 * @returns The RSS feed for the Zen Browser release notes.
 */
export async function GET() {
	// Just in case the release notes array is empty for whatever reason.
	const latestDate =
		releaseNotes.length > 0 ? formatRssDate(releaseNotes[0].date) : new Date();

	const feed = new Feed({
		id: "https://www.zen-browser.app/release-notes",
		link: "https://www.zen-browser.app/release-notes",
		title: "Zen Browser Release Notes",
		description: "Release Notes for the Zen Browser",
		language: "en",
		favicon: "https://www.zen-browser.app/favicon.ico",
		copyright: `Zen Browser © ${new Date().getFullYear()} - Made with ❤️ by the Zen team.`,
		updated: latestDate,
	});

	for (const releaseNote of releaseNotes.slice(0, RSS_ENTRY_LIMIT)) {
		feed.addItem({
			title: `Release notes for version ${releaseNote.version}`,
			id: `https://www.zen-browser.app/release-notes/${releaseNote.version}`,
			link: `https://www.zen-browser.app/release-notes/${releaseNote.version}`,
			date: formatRssDate(releaseNote.date),
			description: releaseNote.extra,
			content: formatReleaseNote(releaseNote),
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}

/**
 * Formats a date string in the format day/month/year.
 *
 * Note: If release notes change to ISO format, this will need to be updated.
 * @param dateStr The date string to format.
 * @returns The passed in date string as a Date object.
 */
function formatRssDate(dateStr: string) {
	const splitDate = dateStr.split("/");
	if (splitDate.length !== 3) {
		throw new Error("Invalid date format");
	}

	const day = Number(splitDate[0]);
	const month = Number(splitDate[1]) - 1;
	const year = Number(splitDate[2]);
	return new Date(year, month, day);
}

/**
 * Formats the release note entry for use as the content of the RSS feed.
 * @param releaseNote The release note to format.
 * @returns The formatted release note as a HTML string.
 */
function formatReleaseNote(releaseNote: ReleaseNote) {
	let content =
		'<p>If you encounter any issues, please report them on <a href="https://github.com/zen-browser/desktop/issues/">the issues page</a>. Thanks everyone for your feedback! ❤️</p>';

	if (releaseNote.extra) {
		content += `<p>${releaseNote.extra.replace(/(\n)/g, "<br />")}</p>`;
	}

	if (releaseNote.breakingChanges) {
		content += `<h2>⚠️ Breaking changes</h2>`;
		content += `<ul>`;
		for (const breakingChange of releaseNote.breakingChanges) {
			content += `<li>${breakingChange}</li>`;
		}
		content += `</ul>`;
	}

	if (releaseNote.features) {
		content += `<h2>⭐ Features</h2>`;
		content += `<ul>`;
		for (const feature of releaseNote.features) {
			content += `<li>${feature}</li>`;
		}
		content += `</ul>`;
	}

	if (releaseNote.fixes) {
		content += `<h2>✓ Fixes</h2>`;
		content += `<ul>`;
		for (const fix of releaseNote.fixes) {
			content += `<li>${fix.description}</li>`;
		}
		content += `</ul>`;
	}

	return content;
}
