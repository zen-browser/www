
interface Fix {
  description: string;
  issue?: number;
}

export interface ReleaseNote {
  version: string;
  date: string;
  extra?: string;
  fixes?: Fix[];
  features?: string[];
  breakingChanges?: string[];
}

export const releaseNotes: ReleaseNote[] = [
  {
    version: "1.0.0-a.1",
    date: "11/07/2024",
    extra: "This release will be the first release considered as stable. It's still in alpha, but it's the first release that we consider to be stable enough for daily use. You can start using it as your main browser right now if you are reading this!",
    features: [
      "Stable support for split views.",
      "Updated firefox to version 128.0",
      "Vertical tabs are now supported.",
      "Better profile management system.",
      "Full support for sidebar web panels.",
      "Other minor UI additions and improvements.",
      "Added support for an automatic update system.",
    ],
    fixes: [
      {
        description: "Fixed a bug where the browser would crash when opening any extension.",
        issue: 34,
      },
      {
        description: "Fixed extension icon resolution on the toolbar.",
        issue: 35,
      },
      {
        description: "Applied a fix for that affected some linux users.",
        issue: 36,
      }
    ]
  },
  {
    version: "1.0.0-a.2",
    date: "12/07/2024",
    extra: "This release is the second alpha release of the 1.0.0-alpha series. It includes a lot of bug fixes and improvements given the feedback we received from the first alpha release. This release is still not considered stable, but it's a big step towards the first stable release.",
    features: [
      "Added support for macOS aaarch64!",
      "Some performance improvements.",
    ],
    fixes: [
      {
        description: "Fixed rounded corners of browser views for some websites.",
        issue: 48,
      },
      {
        description: "Fixed audio icon overlapping with the tab container.",
        issue: 41,
      },
      {
        description: "Changed to the correct branding for Zen Home.",
        issue: 50,
      }
    ],
    breakingChanges: [
      "Removed support window's stub installer, it's under development.",
    ]
  },
  {
    version: "1.0.0-a.3",
    date: "14/07/2024",
    extra: "This release is the third alpha release of the 1.0.0-alpha series. One big feature of this release is the new workspaces feature. This feature allows you to create different workspaces with different tabs and configurations. This release also includes a lot of bug fixes and improvements.",
    features: [
      "Added support for workspaces. (Experimental)",
      "Better support for macOS aarch64.",
    ],
    fixes: [
      {
        description: "Fixed subwindows not being displayed correctly.",
        issue: 54,
      },
      {
        description: "Fixed zen's compact view mode.",
        issue: 45,
      },
      {
        description: "Fixed displaying tab icons when they are pinned.",
        issue: 52,
      },
    ],
    breakingChanges: [
      "Changed the update URL meaning that since 1.0.0-a.2 (previous release) the browser will be able to update itself.",
    ]
  },
  {
    version: "1.0.0-a.4",
    date: "14/07/2024",
    extra: "This release is the fourth alpha release of the 1.0.0-alpha series. This release includes a lot of bug fixes and improvements. The main focus of this release was to improve some small details and the compact view mode.\n\nThis release is very small but it includes some important fixes and I wont be able to work on the browser for the next few days so I decided to release it now.\n\nSorry!",
    features: [
      "Improved compact view mode.",
      "Tabs with no icons will now display a default icon.",
      "Improved workspaces feature (Experimental).",
      "Added support for pinned tabs.",
    ],
    fixes: [
      {
        description: "Fixed the compact view mode not displaying correctly when it's not fullscreen.",
        issue: 58,
      },
      {
        description: "Fixed \"Weird margins in popup windows\".",
        issue: 54, 
      },
      {
        description: "Fixed pinned tab icons not being displayed correctly.",
        issue: 52,
      }
    ],
  },
  {
    version: "1.0.0-a.5",
    date: "16/07/2024",
    extra: "This release is a very small release that includes some speed improvements and privacy improvements. This release is the fifth alpha release of the 1.0.0-alpha series.",
    features: [
      "Improved performance of the browser, specially for windows users.",
      "Changed some of firefox's default privacy settings to improve privacy.",
      "Allowed using GPU for rendering by default.",
      "Set the default user agent to Firefox.",
    ],
    fixes: [
      {
        description: "Fixed license not being clear.",
        issue: 62,
      },
      {
        description: "Fixed Zen not being able to execute on some linux distributions.",
        issue: 36,
      },
      {
        description: "Fixed sites like whatsapp web not working correctly.",
        issue: 59,
      },
      {
        description: "Fixed some background overlapping the browser view.",
        issue: 48,
      }
    ],
  },
  {
    version: "1.0.0-a.6",
    date: "24/07/2024",
    extra: "Hello there! Sorry for not updating so frequently, i've been busy this week.\n\nWelcome to the sixth alpha release of the 1.0.0-alpha series, gettin' closer to the first stable release!\n\nThis release includes a lot of bug fixes and improvements. The main focus of this release was to improve some small details and performance.",
    features: [
      "Improved performance of the browser.",
      "Added support for the latest version of Firefox (128.0.2).",
      "Improved the compact view mode.",
      "Started working on flatpak support.",
      "Improved the workspaces feature. (Added icons and control buttons)",
      "Implemented better branding for the Installer.",
      "Created better better visual feedback for the user. (Animations and Split views)",
      "Made an opt-out for the watermark.",
      "Enabled further customization for buttons (Pill buttons and sizes).",
      "Added performance focused user settings by default.",
      "Added theme-related profile avatars.",
      "Added a way to expand the sidebar tabs and to be able to customize the sidebar.",
      "Started experimenting with PGO builds. (linux only currently)",
      "Added scrollable tabs support.",
      "Added context menu button for quick sidebar website addition.",
      "Enabled smooth scrolling by default.",
      "Added container identification to the tab bar.",
    ],
    fixes: [
      {
        description: "Fixed pinned tabs not being displayed correctly.",
      },
      {
        description: "Fixed pressing \"Bookmarks\" twice in the bottom left doesn't close the bookmarks tab",
        issue: 74
      },
      {
        description: "Fixed wrong colors for web-content popups.",
        issue: 70
      },
      {
        description: "Fixed padding when DOM fullscreen is enabled.",
        issue: 67
      },
      {
        description: "Tab Bar Icons Hidden When Many Tabs are Open",
        issue: 64
      },
      {
        description: "Disabled Zen Workspaces when private browsing is enabled."
      },
      {
        description: "Fixed web view padding when opening a hidden popup.",
        issue: 54
      }, 
      {
        description: "The Windows NSIS installer correctly installs the browser in the right path now instead of \"Mozilla Developer Preview\".",
      },
      {
        description: "Fixed overall windows installer branding.",
      },
      {
        description: "Fixed update URLs and support links.",
      }
    ],
    breakingChanges: [
      "Updated CPU requirements for x86_64-v3",
      "Changed the way profile avatars are stored, may not be any issues, please report them if you find any."
    ],
  },
  {
    version: "1.0.0-a.7",
    date: "27/07/2024",
    extra: "This release is the seventh alpha release of the 1.0.0-alpha series. This release includes some important bug fixes and improvements. The main focus of this release was to improve some small details and improve stability.",
    features: [
      "A grid system for pinned tabs.",
      "Flatpak support.",
      "More performance improvements.",
      "Added newtab wallpapers (Version 2).",
      "Enabled hiding floating sidebar web panels when clicking outside.",
      "Branded more the installer.",
      "Used more intuitive icons for the sidebar.",
      "Improved animations.",
      "More compact view stability improvements.",
    ],
    fixes: [
      {
        description: "Fixed the browser crashing when updating on linux.",
        issue: 76
      },
      {
        description: "Fixed workspace deleting button, deleting the wrong workspace.",
        issue: 81
      },
      {
        description: "Fixed the expanded sidebar for the compact view.",
        issue: 79
      },
      {
        description: "Fixed small margin on hidden windows.",
      }
    ],
  },
  {
    version: "1.0.0-a.8",
    date: "29/07/2024",
    extra: "This release is the eighth alpha release of the 1.0.0-alpha series.\n\nThis release includes some small bug fixes and improvements. The main focus of this release was to improve some small details and improve stability.",
    features: [
      "Added support for the latest version of Firefox (128.0.3).",
      "Improved the compact view mode.",
      "New logo for the browser!",
      "Imrpoved speed of the browser.",
    ],
    fixes: [
      {
        description: "Lowered the CPU requirements for Linux users.",
      },
      {
        description: "Fixed browser updater crashing on some linux distributions.",
        issue: 76
      },
      {
        description: "Added more contrast to web context menus on light themes.",
        issue: 88,
      },
      {
        description: "Fixed horizontal separator not showing on pinned tabs.",
        issue: 100,
      }, 
      {
        description: "Created a small hotfix for themes and some broken extensions.",
        issue: 89
      }
    ],
    breakingChanges: [
      "Changed the ID for flatpak to io.github.zen_browser.zen",
    ]
  },
  {
    version: "1.0.0-a.11",
    date: "02/08/2024",
    extra: "This release is the eleventh alpha release of the 1.0.0-alpha series.\n\nWe skipped some releases because we were working on some big features and improvements. This release includes some big performance improvements and support for other platforms.\n\nHopefuly things will get a bit more stable from now on.",
    features: [
      "Added support for Windows Generic CPUs.",
      "Added support for Linux Generic CPUs.",
      "Added support for macOS x86_64 CPUs.",
      "Added support for macOS arm64 CPUs.",
      "Allow the user to change the sidebar's max width.",
      "Started to work on a new onboarding experience.",
      "Support for AppImage. Both specific and generic.",
      "New icons for MacOS and Windows/Linux (Different icons for each OS).",
      "Added a floating URL bar option.",
      "Added option to hide the toolbar as well in compact view.",
      "Move security button to the right of the URL bar.",
      "Added introduction for side web panels.",
      "Drastically improved the performance of the browser.",
    ],
    fixes: [
      {
        description: "Fixed the browser crashing when updating on MacOS.",
        issue: 84,
      },
      {
        description: "Fixed 'Couldn't load XPCOM' error on some windows installations.",
        issue: 107
      },
      {
        description: "Fixed the browser crashing when updating on Linux.",
      },
      {
        description: "Fixed pinned tabs not being properly aligned.",
        issue: 110
      },
      {
        description: "Remove padding around close button on Windows.",
        issue: 134
      },
      {
        description: "Fixed a part of the tab list and the corner border is showing/clipping in Fullscreen",
        issue: 124
      },
    ],
    breakingChanges: [
      "Changed the ID for AppImage to io.github.zen_browser.zen",
    ]
  },
  {
    version: "1.0.0-a.12",
    date: "04/08/2024",
    extra: "This release is the twelfth alpha release of the 1.0.0-alpha series.\n\nThis release includes some nice features and improvements. The main focus of this release was to improve some small details and improve stability.",
    features: [
      "Added support for the vertical tabs to remember their width.",
      "Added support for disallowing the sidebar web panels to closed when clicked outside and floating (Settings).",
      "Added support for the sidebar web panels to remember their width and if they are floating.",
      "Allow installing unsigned extensions.",
      "Imrpoved onboarding experience.",
      "New compact mode design, it's much better now.",
      "Reduced CPU requirements for MacOS Intel CPUs.",
      "Reduced blur for floating URL bar.",
      "Allow the sidebar to be wider, customisable in about:config.",
    ],
    fixes: [
      {
        description: "Task Manager Icon Missing in Flatpak Version",
        issue: 146,
      },
      {
        description: "Clicking \"Next\" on \"Choose your search engine\" intro page does nothing",
        issue: 145,
      },
      {
        description: "Crash Report on Intel Mac running Monterey 12.7",
        issue: 144,
      },
      {
        description: "Fixed pinned tabs not being properly aligned.",
      },
      {
        description: "\"Delete Web Panel\" closes the sidebar",
        issue: 143,
      },
      {
        description: "Disallow remove workspace deletion for default workspace",
        issue: 136,
      },
      {
        description: "Fixed small sidebar display bug",
        issue: 125,
      },
    ],
  },
  {
    version: "1.0.0-a.13",
    date: "05/08/2024",
    extra: "This is a smaller release to fix some bugs and improve some small details.\n\nIm going to try doing more frequent releases from now on, see how it goes.",
    features: [
      "Allow to remember sidebar width even after collapsing it.",
    ],
    fixes: [
      {
        description: "Task Manager Icon Missing in Flatpak Version",
        issue: 146,
      },
      {
        description: "Condensed Vertical Tabs not working in Compact Mode",
        issue: 160,
      },
      {
        description: "Remember sidebar width on toggle",
        issue: 149,
      },
      {
        description: "Fixed startup issue with AppImage",
      },
      {
        description: "Fixed typos on the onboarding experience.",
      },
    ],
  },
  {
    version: "1.0.0-a.15",
    date: "07/08/2024",
    extra: "This release is the fifteenth alpha release of the 1.0.0-alpha series.\n\nI've skipped version 1.0.0-a.14 because of the quality of the release, it was not good enough to be released.\n\nThis release includes some bug fixes and improvements.\n\nThanks everyone for the feedback! It may look like a small release but it includes some important fixes and improvements.",
    features: [
      "Added support for the latest version of Firefox (129.0).",
      "Reworked on split views.",
      "Improved the performance of the browser.",
      "Allow the sidebar to be at the right side of the browser.",
    ],
    fixes: [
      {
        description: "Blank space when closing tabs",
        issue: 181,
      },
      {
        description: "Tab bar: misaligned icons and hover background",
        issue: 180,
      },
    ],
  },
  {
    version: "1.0.0-a.17",
    date: "11/08/2024",
    extra: "This release is the seventeenth alpha release of the 1.0.0-alpha series.\n\nThis release includes some bug fixes and improvements.\n\nThanks everyone for the feedback! We've skipped version 1.0.0-a.16 because of the size of the releases. One more step closer to the first stable release!",
    features: [
      "Added support for default keyboard shortcuts.",
      "Added JavaScript Bytecode Cache.",
      "Added shortcuts for split views.",
      "Updated UserAgent for website panels (Mobile UserAgent).",
      "Added support for zsync in AppImages.",
      "New tab button is now stuck to the last tab.",
      "Any inactive tab will be dimmed.",
      "Allowed prefetching for network requests.",
      "Added security measures for the browser (Sandboxing).",
      "Added more optimizations for Specific CPUs.",
      "Added shortcuts for cycling through workspaces.",
      "Fixed settings linguistics.",
      "Promoted hardware acceleration for flatpaks.",
      "Added shortcut for toggling the sidebar.",
      "Windows generic CPU support is now stable!",
    ],
    fixes: [
      {
        description: "Toolbar only partially shown in Compact Mode",
        issue: 205,
      },
      {
        description: "Closed tabs are not really closed",
        issue: 216,
      },
      {
        description: "Getting 0xc0000142 error while trying to open zen.exe",
        issue: 209,
      },
      {
        description: "Fixed pinned tabs separator display issue",
        issue: 195,
      },
    ],
  },
  {
    version: "1.0.0-a.23",
    date: "18/08/2024",
    extra: "This release is the twenty-third alpha release of the 1.0.0-alpha series.\n\nWe have made a lot of improvements and bug fixes since the last release note. I will go over the most important changes since version 1.0.0-a.17.\n\nThanks to everyone for the feedback and support!!",
    features: [
        "Added support for the latest stable version of Firefox (129.0.1)",
        "Added security warning when changing the language",
        "Locked preferences for Mozilla Telemetry and Experiments",
        "Refactored parts of the Zen interface theme",
        "Disabled Reader Mode's parse-on-load function",
        "Updated network and buffer preferences",
        "Improved font rendering",
        "Introduced support for WebAssembly SIMD",
        "Optimized macOS version for Nehalem architecture",
        "Added Branding Assets page",
        "Released Theme Store",
        "Added documentation for submitting themes",
        "Added confirm theme removal button",
        "Released Floating URL Bar feature as an official theme",
        "Released an official theme to remove browser padding",
    ],
    fixes: [
        {
          description: "No option to disable dimming inactive tabs",
          issue: 225,
        },
        {
          description: "Closed tabs reappear if restore previous tabs on startup is enabled ",
          issue: 230,
        },
        {
          description: "Can't move tabs between workspaces",
          issue: 237,
        },
        {
          description: "Zen Browser is damaged and can't be opened on macOS",
          issue: 53,
        },
        {
          description: "Floating URL Bar does not close",
          issue: 252
        },
        {
          description: "Web panel can go out of bounds if it is not pinned",
          issue: 267
        },
        {
          description: "Bookmarks bar does not match the selected theme",
          issue: 264
        },
        {
          description: "Tab backgrounds overlap on hover",
          issue: 303
        }
      ],
  },
  {
    version: "1.0.0-a.24",
    date: "20/08/2024",
    extra: "This release is the twenty-fourth alpha release of the 1.0.0-alpha series.\n\nThis release brings the long-awaited expand on hover feature, as well as some bug fixes and improvements to the theme store and documentation.",
    features: [
        "Added a frequently asked questions page to the documentation",
        "Added platform specific preferences to Zen themes",
        "Added expand-on-hover feature for the tab sidebar",
        "Improved scrollbar appearance on Windows",
        "Improved URL bar background color"
    ],
    fixes: [
        {
            description: "Mute button is shown on inactive collapsed tabs",
            issue: 322
        },
        {
            description: "Visual bug on bottom sidebar buttons",
            issue: 304
        },
        {
            description: "Closing tabs makes other tabs briefly smaller",
            issue: 337
        },
        {
            description: "Checkboxes are hard to see",
            issue: 103
        }
    ]
  },
  {
    version: "1.0.0-a.26",
    date: "20/08/2024",
    extra: "This release is the twenty-sixth alpha release of the 1.0.0-alpha series.\n\nThis is a short release that addresses some important bugs.",
    features: [
        "Updated to the latest stable version of Firefox (129.0.2)",
        "Updated CSS to improve compact mode and vertical tabs styling",
        "Updated the browser logo for Windows to a higher resolution",
        "Fixed severe issue with platform specific preference handling",
        "Added feature to set a default workspace"
    ],
    fixes: [
        {
            description: "Issue with edge detection for expand-on-hover sidebar feature",
            issue: 355
        }
    ]
  },
  {
    version: "1.0.0-a.28",
    date: "22/08/2024",
    extra: "This release is the twenty-eighth alpha release of the 1.0.0-alpha series.",
    features: [
        "Enabled JPEG XL",
        "Changed Zen Core Components license to CC BY-SA",
        "Added support for color themes in theme creation",
        "Fixed sidebar shortcuts",
        "Started work on browser translations"
    ],
    fixes: [
        {
            description: "No way to restore native theming to toolbar",
            issue: 426
        },
        {
            description: "Address bar icons are hidden",
            issue: 430
        },
        {
            description: "Tabs don't appear in vertical tab bar",
            issue: 429
        },
        {
            description: "Location bar is not focused when opening new window",
            issue: 414
        },
        {
            description: "The treshhold for the expanded tab sidebar in compact mode is too high",
            issue: 389
        }
    ]
  },
  {
    version: "1.0.0-a.29",
    date: "24/08/2024",
    extra: "This release is the twenty-ninth alpha release of the 1.0.0-alpha series.",
    features: [
        "Added Spanish translations",
        "Added documentation for contributing",
        "Added support for multi-tab splitting with shortcuts",
        "Fixed sidebar shortcuts"
    ],
    fixes: [
        {
            description: "Text on websites is blurry",
            issue: 383
        },
        {
            description: "Expanded compact mode triggers too early",
            issue: 520
        },
        {
            description: "Ampersand in workspace name breaks workspace menu",
            issue: 439
        }
    ]
    },
    {
    version: "1.0.0-a.30",
    date: "26/08/2024",
    extra: "This release is the thirtieth alpha release of the 1.0.0-alpha series.",
    features: [
        "Added support for 24 more languages!",
        "Update installed themes from the browser settings"
    ],
    fixes: [
        {
            description: "Letterboxing option is missing",
            issue: 475
        },
        {
            description: "Collapsed tabs move when audio is playing",
            issue: 608
        },
        {
            description: "Screensaver starts while a video is running in fullscreen",
            issue: 619
        },
        {
            description: "Can't scroll through list of workspaces",
            issue: 603
        },
        {
            description: "Can't rename created workspace",
            issue: 604
        },
        {
            description: "JavaScript won't execute in the browser console",
            issue: 913
        }
    ]
    },
    {
    version: "1.0.0-a.33",
    date: "30/08/2024",
    extra: "This release is the thirty-third alpha release of the 1.0.0-alpha series.",
    features: [
        "Fixed policies for updates",
        "Enforce HTTPS-Only Mode",
        "URL bar improvements",
        "Fixed issue with opening links from external apps",
        "Compact mode now takes element separation into account",
        "Added labels to buttons during expand-on-hover"
    ],
    fixes: [
        {
            description: "Tab bar stuck on right side",
            issue: 1115
        }
    ]
    },
    {
    version: "1.0.0-a.35",
    date: "02/09/2024",
    extra: "This release is the thirty-fifth alpha release of the 1.0.0-alpha series. Things are getting stable!",
    features: [
        "Added option to restore legacy toolbar interface",
        "Added profile-guided optimization (Windows)",
        "Added Apple developer certificate (macOS)",
        "Added experimental Zen Labs settings",
        "Changed interface colors",
        "Disabled efficiency-mode by default (Windows)",
        "Enabled GPU-accelerated web rendering by default",
        "Enabled Video Acceleration API for media decoding",
        "Improved support for translations",
        "Added Identical Code Folding compiler optimization",
    ],
    fixes: [
        {
            description: "Zen Browser is damaged and can't be opened on macOS",
            issue: 53
        },
        {
            description: "Can't reorganize tabs in compact mode",
            issue: 1168
        },
        {
            description: "Theme Store settings page doesn't display installed themes",
            issue: 1125
        },
        {
            description: "No Homebrew support",
            issue: 273
        },
        {
            description: "Remember last active workspaces on startup",
            issue: 240
        }
    ]
  }
].reverse();

export function releaseNoteIsAlpha(note: ReleaseNote) {
  "use client";
  return note.version.includes("-a.");
}
