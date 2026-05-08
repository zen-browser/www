import { describe, expect, it } from 'vitest'

import {
  detectDownloadPlatform,
  type DetectedOS,
  type DownloadCpu,
  getDetectedOS,
  getUserAgentArchitecture,
  getUserAgentOSName,
  normalizeArchitecture,
} from '~/components/download/detect-platform'

type UserAgentFixture = {
  name: string
  userAgent: string
  architecture?: string
  expected: { os: DetectedOS; cpu: DownloadCpu }
}

const userAgentFixtures: UserAgentFixture[] = [
  {
    name: 'Windows x64 Chrome',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expected: { os: 'windows', cpu: 'x86_64' },
  },
  {
    name: 'Windows x64 Firefox',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:138.0) Gecko/20100101 Firefox/138.0',
    expected: { os: 'windows', cpu: 'x86_64' },
  },
  {
    name: 'Windows ARM64 Chromium with Win64 compatibility token',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; ARM64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expected: { os: 'windows', cpu: 'arm64' },
  },
  {
    name: 'Windows ARM64 Chromium with ARM64 token',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; ARM64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expected: { os: 'windows', cpu: 'arm64' },
  },
  {
    name: 'Windows ARM64 via Client Hints',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    architecture: 'arm64',
    expected: { os: 'windows', cpu: 'arm64' },
  },
  {
    name: 'macOS Chrome',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    expected: { os: 'mac', cpu: 'x86_64' },
  },
  {
    name: 'macOS Safari',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
    expected: { os: 'mac', cpu: 'x86_64' },
  },
  {
    name: 'macOS Firefox',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0',
    expected: { os: 'mac', cpu: 'x86_64' },
  },
  {
    name: 'Linux x86_64 Chrome',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    expected: { os: 'linux', cpu: 'x86_64' },
  },
  {
    name: 'Linux x86_64 Firefox',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:138.0) Gecko/20100101 Firefox/138.0',
    expected: { os: 'linux', cpu: 'x86_64' },
  },
  {
    name: 'Linux aarch64 via Client Hints',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    architecture: 'aarch64',
    expected: { os: 'linux', cpu: 'aarch64' },
  },
  {
    name: 'ChromeOS x86_64 Chrome',
    userAgent:
      'Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    expected: { os: 'linux', cpu: 'x86_64' },
  },
] as const

describe('download platform detection', () => {
  it.each(userAgentFixtures)('detects $name', ({ userAgent, architecture, expected }) => {
    expect(detectDownloadPlatform(userAgent, architecture)).toEqual(expected)
  })

  it('detects supported website platforms from parsed OS names', () => {
    expect(getDetectedOS('Windows')).toBe('windows')
    expect(getDetectedOS('Linux')).toBe('linux')
    expect(getDetectedOS('Ubuntu')).toBe('linux')
    expect(getDetectedOS('Chrome OS')).toBe('linux')
    expect(getDetectedOS('macOS')).toBe('mac')
    expect(getDetectedOS()).toBe('mac')
  })

  it('keeps Windows ARM64 when the user agent also contains Win64', () => {
    const windowsArm64UserAgent = userAgentFixtures[2].userAgent
    const osName = getUserAgentOSName(windowsArm64UserAgent)

    expect(osName).toBe('Windows')
    expect(getUserAgentArchitecture(windowsArm64UserAgent, osName)).toBe('arm64')
  })

  it('keeps Windows x64 on the x86_64 installer', () => {
    const windowsX64UserAgent = userAgentFixtures[0].userAgent
    const osName = getUserAgentOSName(windowsX64UserAgent)

    expect(osName).toBe('Windows')
    expect(
      normalizeArchitecture(getUserAgentArchitecture(windowsX64UserAgent, osName), 'windows')
    ).toBe('x86_64')
  })

  it('maps ARM64 to the available architecture per OS', () => {
    expect(normalizeArchitecture('arm64', 'windows')).toBe('arm64')
    expect(normalizeArchitecture('aarch64', 'windows')).toBe('arm64')
    expect(normalizeArchitecture('arm64', 'linux')).toBe('aarch64')
    expect(normalizeArchitecture('aarch64', 'linux')).toBe('aarch64')
  })

  it('defaults unknown architecture to x86_64', () => {
    expect(normalizeArchitecture(undefined, 'windows')).toBe('x86_64')
    expect(normalizeArchitecture('unknown', 'linux')).toBe('x86_64')
  })
})
