import React from "react";
import { releaseNotes } from "@/lib/release-notes";
import { redirect } from "next/navigation";

export default function ReleaseNotePage() {
	React.useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
    const version = searchParams.get("v");
		if (version === "latest") {
  		return redirect(`/release-notes/${releaseNotes[0].version}`);
  	}

  	const currentIndex = releaseNotes.findIndex(
  		(note) => note.version === version,
  	);
  	const releaseNote = releaseNotes[currentIndex];
  	return redirect(`/release-notes#${version}`);
	}, []);

	return null;
}
