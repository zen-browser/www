import releaseNotesStable from './release-notes/stable.json'

type FixWithIssue = {
  description: string
  issue?: number
}

type Fix = string | FixWithIssue

export type BreakingChange = string | { description: string; link: string }

export type ReleaseNote = {
  version: string
  date?: string // optional for twilight
  extra?: string
  fixes?: Fix[]
  security?: string
  knownIssues?: string[]
  features?: string[]
  breakingChanges?: BreakingChange[]
  themeChanges?: string[]
  inProgress?: boolean
  workflowId?: number
  isTwilight?: boolean
  changes?: string[]
}

export const releaseNotes: ReleaseNote[] = releaseNotesStable.reverse()
export { default as releaseNotesTwilight } from './release-notes/twilight.json'

export function getReleaseNoteFirefoxVersion(releaseNote: ReleaseNote): string | null {
  // Check if "firefox" is on the feature list
  for (const feature of releaseNote.features || []) {
    if (feature.toLowerCase().includes('firefox')) {
      // may be X or X.X or X.X.X
      const match = feature.match(/(\d+(\.\d+){0,2})/)
      if (match) {
        return match[0]
      }
    }
  }
  return null
}
