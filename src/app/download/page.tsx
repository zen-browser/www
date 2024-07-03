
import DownloadPage from "@/components/download";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Download() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <DownloadPage />
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>   
  );
}
