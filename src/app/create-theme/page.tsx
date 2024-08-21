import CreateThemePage from "@/components/create-theme";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function BrandingAssetsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CreateThemePage />
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>
  );
}
