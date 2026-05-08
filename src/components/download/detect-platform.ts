import { UAParser } from 'ua-parser-js'

export type DetectedOS = 'mac' | 'windows' | 'linux'
export type DownloadCpu = 'x86_64' | 'aarch64' | 'arm64'

export function getUserAgentOSName(userAgent: string) {
  return UAParser(userAgent).os.name
}

export function getDetectedOS(osName?: string): DetectedOS {
  if (osName === 'Windows') {
    return 'windows'
  } else if (osName === 'Linux' || osName === 'Ubuntu' || osName === 'Chrome OS') {
    return 'linux'
  }

  return 'mac'
}

export function getUserAgentArchitecture(userAgent: string, osName?: string) {
  const { cpu } = UAParser(userAgent)

  if (osName === 'Windows' && /\b(?:arm64|aarch64)\b/i.test(userAgent)) {
    return 'arm64'
  }

  return cpu.architecture
}

export function normalizeArchitecture(
  architecture: string | undefined,
  os: DetectedOS
): DownloadCpu {
  const arch = architecture?.toLowerCase()

  if (arch === 'amd64' || arch === 'x86_64' || arch === 'x64') {
    return 'x86_64'
  } else if (arch === 'arm64' || arch === 'aarch64' || arch === 'arm') {
    return os === 'linux' ? 'aarch64' : 'arm64'
  }

  return 'x86_64'
}
