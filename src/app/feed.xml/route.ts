import { Feed } from "feed";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import type { ReleaseNote } from "@/lib/release-notes";

export async function GET() {
    releaseNotes[0].date

    const feed = new Feed({
        id: "https://www.zen-browser.app/release-notes",
        link: "https://www.zen-browser.app/release-notes",
        title: "Zen Browser Release Notes",
        description: "Release Notes for the Zen Browser",
        language: "en",
        favicon: "https://www.zen-browser.app/favicon.ico",
        copyright: `Zen Browser © ${new Date().getFullYear()} - Made with ❤️ by the Zen team.`,
        updated: formatRssDate(releaseNotes[0].date),
    });

    for (const releaseNote of releaseNotes) {
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
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}

function formatRssDate(date: string) {
    // NOTE: This is assuming the format day/month/year. If release notes change to ISO format, this will need to be updated.
    const splitDate = date.split("/");
    const year = Number(splitDate[2]);
    const month = Number(splitDate[1]) - 1;
    const day = Number(splitDate[0]);
    return new Date(year, month, day);
}

function formatReleaseNote(releaseNote: ReleaseNote) {
    let content = "<p>If you encounter any issues, please report them on <a href=\"https://github.com/zen-browser/desktop/issues/\">the issues page</a>. Thanks everyone for your feedback! ❤️</p>";

    if(releaseNote.extra) {
        content += `<p>${releaseNote.extra.replace(/(\n)/g, "<br />")}</p>`
    }

    if(releaseNote.breakingChanges) {
        content += `<h2>⚠️ Breaking changes</h2>`
        content += `<ul>`
        for (const breakingChange of releaseNote.breakingChanges) {
            content += `<li>${breakingChange}</li>`
        }
        content += `</ul>`
    }

    if(releaseNote.features) {
        content += `<h2>⭐ Features</h2>`
        content += `<ul>`
        for (const feature of releaseNote.features) {
            content += `<li>${feature}</li>`
        }
        content += `</ul>`
    }

    if(releaseNote.fixes) {
        content += `<h2>✓ Fixes</h2>`
        content += `<ul>`
        for (const fix of releaseNote.fixes) {
            content += `<li>${fix.description}</li>`
        }
        content += `</ul>`
    }

    return content;
}