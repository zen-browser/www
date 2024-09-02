import CreateThemePage from "@/components/create-theme";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function BrandingAssetsPage() {
	return (
		<>
			<CreateThemePage />
			<Footer />
			<Navigation /> {/* At the bottom of the page */}
		</>
	);
}
