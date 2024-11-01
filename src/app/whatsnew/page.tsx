"use client";
import { useEffect } from "react";
import { releaseNotes } from "@/lib/release-notes";
import { useRouter } from "next/navigation";

export default function ReleaseNotePage() {
	const router = useRouter();

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const version = searchParams.get("v");
		if (version === "latest") {
			return router.replace(
				`/release-notes/${releaseNotes[0].version}`,
			);
		}
		router.replace(`/release-notes#${version}`);
	}, []);

	return null;
}
