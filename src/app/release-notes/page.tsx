"use client";

import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import ReleaseNoteElement from "@/components/release-note";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import Link from "next/link";

export default function ReleaseNotes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="min-h-screen py-42 flex justify-center flex-col px-10 lg:px-0 md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl text-center font-bold mt-24">Release Notes</h1>
        {releaseNotes.map((releaseNote) => (
          <ReleaseNoteElement key={releaseNote.version} data={releaseNote} />
        ))}
      </div>
    </main>
  )
}
