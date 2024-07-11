
export interface ReleaseNote {
  version: string;
  date: string;
  extra?: string;
  fixes?: string[];
  features?: string[];
  breakingChanges?: string[];
}

export const releaseNotes: ReleaseNote[] = [
  {
    version: "0.0.0-a.3",
    date: "11/07/2024",
    extra: "This is a test release.",
    features: [
      "Added a new feature.",
    ],
    fixes: [
      "Fixed a bug.",
    ],
  },
];

