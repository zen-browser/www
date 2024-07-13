
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
].reverse();

export function releaseNoteIsAlpha(note: ReleaseNote) {
  return note.version.includes("-a.");
}

