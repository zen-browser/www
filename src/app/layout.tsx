import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zen Browser",
  description: "Download now and experience the Zen Browser",
  keywords: ["Zen", "Browser", "Zen Browser", "Web", "Internet", "Fast"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="me" href="https://fosstodon.org/@zenbrowser"></link>
        <link rel="alternate" type="application/rss+xml" title="Zen Browser Release Notes" href="https://www.zen-browser.app/feed.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
