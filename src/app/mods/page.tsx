import MarketplacePage from "@/components/marketplace";
import { getAllThemes } from "@/lib/mods";

export default async function ThemesMarketplace() {
	return <MarketplacePage themes={await getAllThemes()} />;
}
