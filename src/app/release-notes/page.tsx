import { releaseNotes } from "@/lib/release-notes";
import { redirect } from "next/navigation";

export default function() {
  // "0" is the latest release
  redirect(`/release-notes/${releaseNotes[0].version}`);
}
