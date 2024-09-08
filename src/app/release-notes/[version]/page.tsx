
import React from 'react';
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import ReleaseNote from "@/components/release-note";
import { Button } from "@/components/ui/button";
import { releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import { redirect } from "next/navigation";
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
    <main className="flex min-h-screen flex-col items-center">    
      <div className='w-full lg:w-1/2 px-5 md:px-10 lg:px-0'>
        <ReleaseNote data={releaseNote} />
        <div className="flex flex-col md:flex-row items-center justify-between h-fit px-4 lg:px-0 pb-4 mt-8">
          {prevNote && (
            <a href={`/release-notes/${prevNote.version}`} className='mx-auto md:mx-0'>
              <Button variant="outline" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous ({prevNote.version})
              </Button>
            </a>
          )}
          <a href="/download" className='mx-auto md:mx-4'>
            <Button className="mt-4 md:mt-0 w-fit">Download Zen now!</Button>
          </a>
          {nextNote && (
            <a href={`/release-notes/${nextNote.version}`} className="mt-4 mx-auto md:mx-0 md:mt-0">
              <Button variant="outline" className="flex items-center ">
                Next ({nextNote.version})
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
