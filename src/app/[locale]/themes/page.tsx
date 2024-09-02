
import Footer from "@/components/footer";
import MarketplacePage from "@/components/marketplace";
import { Navigation } from "@/components/navigation";
import { getAllThemes, ZenTheme } from "@/lib/themes";
import { GetStaticProps } from "next";

export default async function ThemesMarketplace() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MarketplacePage themes={await getAllThemes()} />
    </main>   
  );
}
