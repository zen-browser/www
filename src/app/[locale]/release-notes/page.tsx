"use client";

import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import Link from "next/link";

export default function ReleaseNotes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="min-h-screen py-42 flex justify-center flex-col">
        <h1 className="text-4xl text-center font-bold mt-24">Release Notes</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {releaseNotes.map((releaseNote) => (
            <a href={`/release-notes/${releaseNote.version}`} className="bg-background relative max-w-64 overflow-hidden rounded-lg border p-5 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1" key={releaseNote.version}>
              <div className="text-md font-medium mb-5">
                {releaseNote.version}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                Check out the new features and improvements for {releaseNote.version}
              </div>
              {releaseNoteIsAlpha(releaseNote) && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium p-1 rounded-bl-lg">
                  Alpha Release
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
