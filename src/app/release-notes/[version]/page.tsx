
import React, { useState, useCallback } from 'react';
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import ReleaseNote from "@/components/release-note";
import { Button } from "@/components/ui/button";
import { releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export async function generateStaticParams() {
  return [{version: "latest"}, ...releaseNotes.map((note) => ({ version: note.version }))];
}

export default function ReleaseNotePage({ params }: { params: { version: string } }) {
  const { version } = params;

  if (version === "latest") {
    return redirect(`/release-notes/${releaseNotes[0].version}`);
  }

  const currentIndex = releaseNotes.findIndex((note) => note.version === version);
  const releaseNote = releaseNotes[currentIndex];
  
  if (!releaseNote) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-screen flex flex-wrap items-center justify-center">
          <h1 className="text-4xl font-bold mt-12">Release note not found</h1>
          <a href="/release-notes">
            <Button className="mt-4 items-center justify-center">
              Back to release notes
            </Button>
          </a>
        </div>
      </main>
    );
  }

  const prevNote = releaseNotes[currentIndex + 1];
  const nextNote = releaseNotes[currentIndex - 1];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <VersionList currentVersion={version} />
      
      <div className="w-full max-w-4xl px-4 py-2">
        <ReleaseNote data={releaseNote} />
      </div>
      
      <div className="flex justify-between w-full max-w-4xl px-4 py-4">
        {prevNote && (
          <Link href={`/release-notes/${prevNote.version}`}>
            <Button variant="outline" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous ({prevNote.version})
            </Button>
          </Link>
        )}
        {nextNote && (
          <Link href={`/release-notes/${nextNote.version}`} className="ml-auto">
            <Button variant="outline" className="flex items-center">
              Next ({nextNote.version})
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      
      <Footer />
      <Navigation /> {/* At the bottom of the page */}
    </main>
  );
}
