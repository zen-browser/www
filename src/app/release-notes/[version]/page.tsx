'use client'

import Footer from '@/components/footer';
import { Navigation } from '@/components/navigation';
import ReleaseNote from '@/components/release-note';
import { Button } from '@/components/ui/button';
import { releaseNotes } from '@/lib/release-notes';
import Link from 'next/link';
import { useParams } from 'next/navigation'

export default function ReleaseNotePage() {
  const params = useParams<{ version: string }>()
  const { version } = params;

  const releaseNote = releaseNotes.find((note) => note.version === version);
  if (!releaseNote) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start">
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mt-12">Release note not found</h1>
          <Link href="/release-notes"><Button className="mt-4">Back to release notes</Button></Link>
        </div>
        <Footer />  
        <Navigation /> {/* At the bottom of the page */}
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ReleaseNote data={releaseNote} />
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>
  )
}
