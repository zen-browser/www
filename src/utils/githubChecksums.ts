import { CONSTANT } from '~/constants'

type GitHubAsset = {
  name: string
  digest: string
}

/**
 * Fetches the latest release assets from GitHub and extracts their checksums.
 * Returns a mapping from asset name to digest.
 */
export async function getChecksums() {
  if (import.meta.env.DEV) {
    return CONSTANT.CHECKSUMS
  }
  const res = await fetch('https://api.github.com/repos/zen-browser/desktop/releases/latest', {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'zen-browser-checksum-fetcher',
    },
  })
  if (!res.ok) throw new Error(`Failed to fetch GitHub release: ${res.statusText}`)
  const data = await res.json()
  const assets = data.assets as GitHubAsset[]

  const checksums: Record<string, string> = {}
  for (const asset of assets) {
    checksums[asset.name] = asset.digest
  }
  return checksums
}
