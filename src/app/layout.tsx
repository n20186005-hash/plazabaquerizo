import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  title: "Plaza Rodolfo Baquerizo Moreno — Guayaquil, Ecuador",
  description: "A travel guide to Plaza Rodolfo Baquerizo Moreno in Guayaquil, Ecuador. Explore this beautiful urban park, green spaces, and recreational attractions.",
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'plazabaquerizo.com'}`),
  alternates: {
    canonical: "/en",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_EC", "zh_CN"],
    title: "Plaza Rodolfo Baquerizo Moreno — Guayaquil, Ecuador",
    description: "A travel guide to Plaza Rodolfo Baquerizo Moreno in Guayaquil, Ecuador. Explore this beautiful urban park, green spaces, and recreational attractions.",
    siteName: "Plaza Rodolfo Baquerizo Moreno Travel Guide",
    images: [
      {
        url: "/gallery/plaza-rodolfo-baquerizo-moreno (1).jpg",
        width: 1200,
        height: 630,
        alt: "Plaza Rodolfo Baquerizo Moreno - Guayaquil, Ecuador",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
