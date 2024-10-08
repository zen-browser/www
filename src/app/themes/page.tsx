import MarketplacePage from "@/components/marketplace";
import { getAllThemes } from "@/lib/themes";

export default async function ThemesMarketplace() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<MarketplacePage themes={await getAllThemes()} />
		</main>
	);
}
