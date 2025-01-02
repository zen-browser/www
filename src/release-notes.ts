import releaseNotesStable from './release-notes/stable.json';

interface FixWithIssue {
	description: string;
	issue?: number;
}

type Fix = string | FixWithIssue;

export type BreakingChange = string | { description: string; link: string };

export interface ReleaseNote {
	version: string;
	date?: string; // optional for twilight
	extra?: string;
	image?: boolean;
	fixes?: Fix[];
	features?: string[];
	breakingChanges?: BreakingChange[];
	themeChanges?: string[];
	inProgress?: boolean;
	workflowId?: number;
	isTwilight?: boolean;
}

export const releaseNotes: ReleaseNote[] = releaseNotesStable.reverse();
export {default as releaseNotesTwilight} from './release-notes/twilight.json';
