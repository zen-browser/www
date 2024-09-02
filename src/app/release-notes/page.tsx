"use client";

import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import Link from "next/link";

export default function ReleaseNotes() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<div className="py-42 flex min-h-screen flex-col justify-center">
				<h1 className="mt-24 text-center text-4xl font-bold">Release Notes</h1>
				<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{releaseNotes.map((releaseNote) => (
						<Link
							href={`/release-notes/${releaseNote.version}`}
							className="relative max-w-64 overflow-hidden rounded-lg border bg-background p-5 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:border-blue-500"
							key={releaseNote.version}
						>
							<div className="text-md mb-5 font-medium">
								{releaseNote.version}
							</div>
							<div className="text-sm font-medium text-muted-foreground">
								Check out the new features and improvements for{" "}
								{releaseNote.version}
							</div>
							{releaseNoteIsAlpha(releaseNote) && (
								<div className="absolute right-0 top-0 rounded-bl-lg bg-blue-500 p-1 text-xs font-medium text-white">
									Alpha Release
								</div>
							)}
						</Link>
					))}
				</div>
			</div>
			<Footer />
			<Navigation /> {/* At the bottom of the page */}
		</main>
	);
}
