import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
	title: "Zen Browser",
	description:
		"Download now and experience the Zen Browser - a fast, privacy-focused web browser.",
	keywords: ["Zen", "Browser", "Zen Browser", "Web", "Internet", "Fast"],
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<link rel="me" href="https://fosstodon.org/@zenbrowser"></link>
				<link
					rel="alternate"
					type="application/rss+xml"
					title="Zen Browser Release Notes"
					href="https://www.zen-browser.app/feed.xml"
				/>
			</head>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
