import { redirect } from "next/navigation";

export default function redirectThemesToModsPage() {
    redirect("../mods");
    return null;
}
