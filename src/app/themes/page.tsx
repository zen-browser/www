
import Footer from "@/components/footer";
import MarketplacePage from "@/components/marketplace";
import { Navigation } from "@/components/navigation";

export default function ThemesMarketplace() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MarketplacePage />
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>   
  );
}
