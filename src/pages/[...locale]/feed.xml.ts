import rss, { type RSSOptions } from '@astrojs/rss'

import { releaseNotes, type ReleaseNote } from '~/release-notes'

export { getStaticPaths } from '~/utils/i18n'

/** The default number of entries to include in the RSS feed. */
const RSS_ENTRY_LIMIT = 20

/**
 * Handles the GET request for the `feed.xml` endpoint.
 * @returns The RSS feed for the Zen Browser release notes.
 */
export function GET(context: { url: URL }) {
  // Just in case the release notes array is empty for whatever reason.
  const latestDate =
    releaseNotes.length > 0 ? formatRssDate(releaseNotes[0].date as string) : new Date()

  const rssData: RSSOptions = {
    title: 'Zen Browser Release Notes',
    description: 'Release Notes for the Zen Browser',
    site: context.url,
    items: [],
    customData: `
            <language>en</language>
            <link>https://www.zen-browser.app/release-notes</link>
            <copyright>Zen Browser © ${new Date().getFullYear()} - Made with ❤️ by the Zen team.</copyright>
            <pubDate>${pubDate(latestDate)}</pubDate>
            <image>
                <url>https://www.zen-browser.app/favicon.ico</url>
                <title>Zen Browser</title>
                <link>https://www.zen-browser.app</link>
            </image>
        `,
  }

  for (const releaseNote of releaseNotes.slice(0, RSS_ENTRY_LIMIT)) {
    rssData.items.push({
      title: `Release notes for version ${releaseNote.version}`,
      link: `https://www.zen-browser.app/release-notes/${releaseNote.version}`,
      pubDate: formatRssDate(releaseNote.date as string),
      description: releaseNote.extra,
      content: formatReleaseNote(releaseNote),
    })
  }

  return rss(rssData)
}

/**
 * Formats a date string in the format day/month/year.
 *
 * Note: If release notes change to ISO format, this will need to be updated.
 * @param dateStr The date string to format.
 * @returns The passed in date string as a Date object.
 */
function formatRssDate(dateStr: string) {
  const splitDate = dateStr.split('/')
  if (splitDate.length !== 3) {
    throw new Error('Invalid date format')
  }

  const day = Number(splitDate[0])
  const month = Number(splitDate[1]) - 1
  const year = Number(splitDate[2])
  return new Date(year, month, day)
}

/**
 * Formats the release note entry for use as the content of the RSS feed.
 * @param releaseNote The release note to format.
 * @returns The formatted release note as a HTML string.
 */
function formatReleaseNote(releaseNote: ReleaseNote) {
  let content = `<p>
        If you encounter any issues, please report them on <a href="https://github.com/zen-browser/desktop/issues/">the issues page</a>.
        Thanks everyone for your feedback! ❤️
    </p>`

  if (releaseNote.extra) {
    content += `<p>${releaseNote.extra.replace(/(\n)/g, '<br />')}</p>`
  }

  content += addReleaseNoteSection(
    '⚠️ Breaking changes',
    releaseNote.breakingChanges?.map(breakingChangeToReleaseNote)
  )
  content += addReleaseNoteSection('✓ Fixes', releaseNote.fixes?.map(fixToReleaseNote))
  content += addReleaseNoteSection('🖌 Theme Changes', releaseNote.themeChanges)
  content += addReleaseNoteSection('⭐ Features', releaseNote.features)

  return content
}

function addReleaseNoteSection(title: string, items?: string[]): string {
  if (!items) {
    return ''
  }

  let content = `<h2>${title}</h2>`
  content += '<ul>'
  for (const item of items) {
    if (item && item.length > 0) {
      content += `<li>${item}</li>`
    }
  }
  content += '</ul>'
  return content
}

function fixToReleaseNote(fix?: Exclude<ReleaseNote['fixes'], undefined>[number]) {
  if (typeof fix === 'string') {
    return fix
  }

  if (!fix || !fix.description || fix.description.length === 0) {
    return ''
  }

  let note = fix.description
  if (fix.issue) {
    note += ` (<a href="https://github.com/zen-browser/desktop/issues/${fix.issue}" target="_blank">#${fix.issue}</a>)`
  }
  return note
}

function breakingChangeToReleaseNote(
  breakingChange?: Exclude<ReleaseNote['breakingChanges'], undefined>[number]
) {
  if (typeof breakingChange === 'string') {
    return breakingChange
  }

  if (!breakingChange || !breakingChange.description || breakingChange.description.length === 0) {
    return ''
  }

  return `${breakingChange.description} (<a href="${breakingChange.link}" target="_blank">Learn more</a>)`
}

function pubDate(date?: Date) {
  const newDate = date ?? new Date()

  const pieces = newDate.toString().split(' ')
  const offsetTime = pieces[5].match(/[-+]\d{4}/)
  const offset = offsetTime ? offsetTime : pieces[5]
  const parts = [`${pieces[0]},`, pieces[2], pieces[1], pieces[3], pieces[4], offset]

  return parts.join(' ')
}
