
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
];

export function releaseNoteIsAlpha(note: ReleaseNote) {
  return note.version.includes("-a.");
}

