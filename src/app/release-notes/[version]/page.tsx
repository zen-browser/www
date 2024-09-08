
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import ReleaseNote from "@/components/release-note";
import { Button } from "@/components/ui/button";
import { releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{version: "latest"}, ...releaseNotes.map((note) => ({ version: note.version }))];
}

export default function ReleaseNotePage({ params }: { params: { version: string } }) {
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
          <a href="/release-notes">
            <Button className="mt-4 items-center justify-center">
              Back to release notes
            </Button>
          </a>
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
