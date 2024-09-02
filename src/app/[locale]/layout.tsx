import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import {NextIntlClientProvider} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Zen Browser",
  description: "Download now and experience the Zen Browser",
  keywords: ["Zen", "Browser", "Zen Browser", "Web", "Internet", "Fast"],
};

const SUPPORTED_LANGUAGES = ["en", "de"];

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="me" href="https://fosstodon.org/@zenbrowser"></link>
        <link rel="alternate" type="application/rss+xml" title="Zen Browser Release Notes" href="https://www.zen-browser.app/feed.xml" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <StyledComponentsRegistry>
              <div>
                {children}
                <Footer />  
                <Navigation /> {/* At the bottom of the page */}
              </div>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
