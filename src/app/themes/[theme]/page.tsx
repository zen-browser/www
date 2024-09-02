
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import ThemePage from "@/components/theme-page";
import { getAllThemes, getThemeFromId } from "@/lib/themes";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const theme = params.theme
  const themeData = await getThemeFromId(theme);
  if (!themeData) {
    return {
      title: "Theme not found",
      description: "Theme not found",
    };
  }
  return {
    title: themeData.name,
    description: themeData.description,
    keywords: [themeData.name, themeData.description],
    openGraph: {
      title: themeData.name,
      description: themeData.description,
      images: [
        {
          url: themeData.image,
          width: 500,
          height: 500,
          alt: themeData.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const themes = await getAllThemes();
  console.log(themes);
  return themes.map((theme) => ({
    theme: theme.id,
  }));
}

export default async function ThemeInfoPage({ params }: { params: { theme: string } }) {
  const { theme } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ThemePage themeID={theme} />
    </main>
  );
}