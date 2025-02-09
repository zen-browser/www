export default document.addEventListener('keydown', (e) => {
  if (window.location.pathname.includes('/download')) {
    handleDownloadPageKey(e)
  }
  handleGeneralKey(e)
})

function handleDownloadPageKey(e: KeyboardEvent) {
  const url = window.location.href
  const isFirstSection =
    url.endsWith('/download') || url.endsWith('/download?twilight')

  if (!isFirstSection) {
    return handleOsSpecificKeys(e, url)
  }

  switch (e.key) {
    case '1':
      clickAndScroll('os-select-windows')
      break
    case '2':
      clickAndScroll('os-select-linux')
      break
    case '3':
      document.querySelector<HTMLElement>('#macos-select')?.click()
      break
    default:
      handleOsSpecificKeys(e, url)
  }
}

function handleOsSpecificKeys(e: KeyboardEvent, url: string) {
  if (url.endsWith('#os-select-windows')) {
    switch (e.key) {
      case '1':
        clickAndScroll('windows-target-x86_64')
        break
      case '2':
        clickAndScroll('windows-target-arm64')
        break
    }
  } else if (
    url.endsWith('#windows-target-x86_64') ||
    url.endsWith('#windows-target-arm64')
  ) {
    handleWindowsTargetKeys(e, url)
  } else if (url.endsWith('#os-select-linux')) {
    switch (e.key) {
      case '1':
        clickAndScroll('linux-target-x86_64')
        break
      case '2':
        clickAndScroll('linux-target-aarch64')
        break
    }
  } else if (
    url.endsWith('#linux-target-x86_64') ||
    url.endsWith('#linux-target-aarch64')
  ) {
    handleLinuxTargetKeys(e)
  }
}

function handleWindowsTargetKeys(e: KeyboardEvent, url: string | string[]) {
  const twilight = url.includes('?twilight')
  switch (e.key) {
    case '1':
      document
        .querySelector<HTMLElement>('#windows-installer-download')
        ?.click()
      break
    case '2':
      if (twilight) {
        document.querySelector<HTMLElement>('#windows-zip-download')?.click()
      }
      break
  }
}

function handleLinuxTargetKeys(e: KeyboardEvent) {
  switch (e.key) {
    case '1':
      document.querySelector<HTMLElement>('#linux-tar-download')?.click()
      break
    case '2':
      document.querySelector<HTMLElement>('#linux-appimage-download')?.click()
      break
    case '3':
      document.querySelector<HTMLElement>('#linux-flathub-download')?.click()
      break
  }
}

function clickAndScroll(targetId: string) {
  const targetElement = document.querySelector<HTMLElement>(`#${targetId}`)
  if (targetElement) {
    targetElement.click()
    window.location.href = `#${targetId}`
  }
}

function handleGeneralKey(e: KeyboardEvent) {
  switch (e.key) {
    case 's':
      document
        .querySelector<HTMLElement>('input[class="ac-theme-switch"]')
        ?.click()
      break
    case 'i':
      window.location.href = '/'
      break
    case 'n':
      window.location.href = '#nav-bar'
      break
    case 'f':
      window.location.href = '#footer'
      break
    case 'd':
      window.location.href = '/download'
      break
    case 'm':
      window.location.href = '/mods'
      break
    case 'r':
      window.location.href = '/release-notes'
      break
    case 't':
      window.location.href = '/download?twilight'
      break
    case 'g':
      window.open('https://github.com/zen-browser')
      break
  }
}
