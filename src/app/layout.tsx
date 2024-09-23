import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ny } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Zen Browser",
	description: "Download now and experience the Zen Browser",
	keywords: ["Zen", "Browser", "Zen Browser", "Web", "Internet", "Fast"],
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning>
			<head>
				<link rel="me" href="https://fosstodon.org/@zenbrowser"></link>
				<script
					defer
					data-domain="zen-browser.app"
					src="https://plausible.io/js/script.js"
				></script>
				<link
					rel="alternate"
					type="application/rss+xml"
					title="Zen Browser Release Notes"
					href="https://www.zen-browser.app/feed.xml"
				/>
			</head>
			<body className={ny(inter.className, 'dark')}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<StyledComponentsRegistry>
						<div className="mt-5">
							{children}
							<Footer />
							<Navigation /> {/* At the bottom of the page */}
						</div>
					</StyledComponentsRegistry>
				</ThemeProvider>
			</body>
		</html>
	);
}
