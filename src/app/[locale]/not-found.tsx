import { BrandingAssets } from "@/components/branding-assets";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const runtime = 'edge'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1>404</h1>
    </main>
  );
}
