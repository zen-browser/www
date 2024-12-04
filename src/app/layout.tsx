import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ny } from "@/lib/utils";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
	ssr: false
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Zen Browser",
	description: "Download now and experience the Zen Browser",
	keywords: ["Zen", "Browser", "Zen Browser", "Web", "Internet", "Fast"],
	applicationName: "Zen Browser",
	generator: "Next.js",
	creator: "Zen Team",
	robots: "index, follow",
	openGraph: {
		title: "Zen Browser",
		description: "Download now and experience the Zen Browser",
		locale: "en_US",
		url: "https://zen-browser.app/",
		siteName: "Zen Browser",
	},
	twitter: {
		creator: "@zen_browser",
		site: "@zen_browser",
	},
	appLinks: {
		web: {
			url: "https://zen-browser.app/download",
		},
		windows: {
			url: "https://zen-browser.app/download",
		},
	},
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
				<link rel="canonical" href="https://zen-browser.app/"></link>
				<link
					rel="alternate"
					type="application/rss+xml"
					title="Zen Browser Release Notes"
					href="https://www.zen-browser.app/feed.xml"
				/>
			</head>
			<body className={ny("bg-background", inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<StyledComponentsRegistry>
						<CustomCursor />
						<div className="flex min-h-screen flex-col">
							<Navigation />
							<main className="flex h-full min-h-[1000px] flex-1 flex-col items-center justify-center py-4">
								{children}
							</main>
							<Footer />
						</div>
					</StyledComponentsRegistry>
				</ThemeProvider>
			</body>
		</html>
	);
}
