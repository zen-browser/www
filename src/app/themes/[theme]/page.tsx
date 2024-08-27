
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import ThemePage from "@/components/theme-page";
import { getAllThemes, getThemeFromId } from "@/lib/themes";
import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const themes = await getAllThemes();
  return themes.map((theme) => ({
    theme: theme.id,
  }));
}

export default async function ThemeInfoPage({ params }: { params: { theme: string } }) {
  const { theme } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ThemePage themeID={theme} />
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>
  );
}