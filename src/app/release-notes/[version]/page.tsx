"use client";

import ReleaseNote from "@/components/release-note";
import { Button } from "@/components/ui/button";
import { releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

export default function ReleaseNotePage() {
  const params = useParams<{ version: string }>();
  const { version } = params;

  if (version === "latest") {
    return redirect(`/release-notes/${releaseNotes[0].version}`);
  }

  const releaseNote = releaseNotes.find((note) => note.version === version);

  if (!releaseNote) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-screen flex flex-wrap items-center justify-center">
          <h1 className="text-4xl font-bold mt-12">Release note not found</h1>
          <Link href="/release-notes">
            <Button className="mt-4 items-center justify-center">
              Back to release notes
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ReleaseNote data={releaseNote} />
    </main>
  );
}
