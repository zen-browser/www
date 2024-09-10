
import ReleaseNoteElement from "@/components/release-note";
import { releaseNotes } from "@/lib/release-notes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Release Notes",
  description: "Stay up to date with the latest changes to Zen Browser",
  keywords: ["Zen", "Browser", "Zen Browser", "Web", "Internet", "Fast", "Release", "Notes"],
};

export default function ReleaseNotes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="min-h-screen py-42 flex justify-center flex-col px-10 lg:px-0 lg:w-4/5 xl:w-3/5">
        <h1 className="text-4xl font-bold mt-48">Release Notes</h1>
        <p className="mt-8 text-lg text-muted-foreground">
          Stay up to date with the latest changes to Zen Browser! Since the <a className="text-blue-500" href="#1.0.0-a.1">first release</a> till <a className="text-blue-500" href={`/release-notes/${releaseNotes[0].version}`}>{releaseNotes[0].version}</a>, we've been working hard to make Zen Browser the best it can be.<br /><br /> Thanks everyone for your feedback! ❤️
        </p>
        {releaseNotes.map((releaseNote) => (
          <ReleaseNoteElement key={releaseNote.version} data={releaseNote} />
        ))}
      </div>
    </main>
  )
}
