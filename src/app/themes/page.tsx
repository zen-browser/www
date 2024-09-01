
import Footer from "@/components/footer";
import MarketplacePage from "@/components/marketplace";
import { Navigation } from "@/components/navigation";
import { getAllThemes, ZenTheme } from "@/lib/themes";
import { GetStaticProps } from "next";

export const getStaticProps = (async (context) => {
  const themes = await getAllThemes();
  return {
    props: {
      themes,
    },
  };
}) satisfies GetStaticProps<{
  themes: ZenTheme[];
}>

export default function ThemesMarketplace({ themes }: {themes:ZenTheme[]}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MarketplacePage themes={themes} />
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>   
  );
}
