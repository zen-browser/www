import { describe, expect, it } from 'vitest'

import {
  getDetectedOS,
  getUserAgentArchitecture,
  getUserAgentOSName,
  normalizeArchitecture,
} from '~/components/download/detect-platform'

const windowsX64UserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const windowsArm64UserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; ARM64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

describe('download platform detection', () => {
  it('detects supported website platforms from parsed OS names', () => {
    expect(getDetectedOS('Windows')).toBe('windows')
    expect(getDetectedOS('Linux')).toBe('linux')
    expect(getDetectedOS('Ubuntu')).toBe('linux')
    expect(getDetectedOS('Chrome OS')).toBe('linux')
    expect(getDetectedOS('macOS')).toBe('mac')
    expect(getDetectedOS()).toBe('mac')
  })

  it('keeps Windows ARM64 when the user agent also contains Win64', () => {
    const osName = getUserAgentOSName(windowsArm64UserAgent)

    expect(osName).toBe('Windows')
    expect(getUserAgentArchitecture(windowsArm64UserAgent, osName)).toBe('arm64')
  })

  it('keeps Windows x64 on the x86_64 installer', () => {
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
