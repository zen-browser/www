import React from "react";
import { releaseNotes } from "@/lib/release-notes";

export default function ReleaseNotePage() {
	React.useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
	    	const version = searchParams.get("v");
		if (version === "latest") {
	  		return window.location.replace(`/release-notes/${releaseNotes[0].version}`);
	  	}
	  	window.location.replace(`/release-notes#${version}`);
	}, []);

	return null;
}
