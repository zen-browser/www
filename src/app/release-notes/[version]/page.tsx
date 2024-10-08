import React from "react";
import { Button } from "@/components/ui/button";
import { releaseNotes } from "@/lib/release-notes";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
	return [
		{ version: "latest" },
		...releaseNotes.map((note) => ({ version: note.version })),
	];
}

export default function ReleaseNotePage({
	params,
}: {
	params: { version: string };
}) {
	const { version } = params;

	if (version === "latest") {
		return redirect(`/release-notes/${releaseNotes[0].version}`);
	}

	const currentIndex = releaseNotes.findIndex(
		(note) => note.version === version,
	);
	const releaseNote = releaseNotes[currentIndex];

	if (!releaseNote) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center">
				<div className="flex h-screen flex-wrap items-center justify-center">
					<h1 className="mt-12 text-4xl font-bold">Release note not found</h1>
					<a href="/release-notes">
						<Button className="mt-4 items-center justify-center">
							Back to release notes
						</Button>
					</a>
				</div>
			</main>
		);
	}

	return redirect(`/release-notes#${version}`);
}
