import { BrandingAssets } from "@/components/branding-assets";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function BrandingAssetsPage() {
	return (
		<>
			<BrandingAssets />
			<Footer />
			<Navigation /> {/* At the bottom of the page */}
		</>
	);
}
