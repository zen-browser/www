
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
    extra: "Welcome to the sixth alpha release of the 1.0.0-alpha series, gettin' closer to the first stable release!\n\nThis release includes a lot of bug fixes and improvements. The main focus of this release was to improve some small details and performance.",
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
].reverse();

export function releaseNoteIsAlpha(note: ReleaseNote) {
  return note.version.includes("-a.");
}

