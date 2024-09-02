import DownloadPage from "@/components/download";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Download() {
	return (
		<>
			<DownloadPage />
			<Footer />
			<Navigation /> {/* At the bottom of the page */}
		</>
	);
}
