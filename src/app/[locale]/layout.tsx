import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import "./fonts.css";

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "plazabaquerizo.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const description = locale === 'es' ? "Guía de viaje a Plaza Rodolfo Baquerizo Moreno en Guayaquil, Ecuador. Descubre este hermoso parque urbano, espacios verdes y atracciones recreativas." :
      locale === 'zh' ? "Plaza Rodolfo Baquerizo Moreno 旅行指南——探索厄瓜多尔瓜亚基尔美丽的城市公园：绿化空间、休闲设施和娱乐场所。" :
      "A travel guide to Plaza Rodolfo Baquerizo Moreno in Guayaquil, Ecuador. Discover this beautiful urban park, green spaces, and recreational attractions.";
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Plaza Rodolfo Baquerizo Moreno — Guayaquil, Ecuador",
      template: "%s | Plaza Rodolfo Baquerizo Moreno",
    },
    description,
    keywords: [
      "Plaza Rodolfo Baquerizo Moreno",
      "Guayaquil tourism",
      "Ecuador urban park",
      "Parks in Guayaquil",
      "Av. 9 de Octubre",
      "Guayaquil attractions",
      "Ecuador parks",
      "Outdoor activities Guayaquil",
      "Urban green space Ecuador",
      "Guayaquil city guide",
    ],
    authors: [{ name: "Plaza Rodolfo Baquerizo Moreno Travel Guide" }],
    creator: "Plaza Rodolfo Baquerizo Moreno Travel Guide",
    publisher: "Plaza Rodolfo Baquerizo Moreno Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_CN"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title: "Plaza Rodolfo Baquerizo Moreno — Guayaquil, Ecuador",
      description,
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
    twitter: {
      card: "summary_large_image",
      title: "Plaza Rodolfo Baquerizo Moreno — Guayaquil, Ecuador",
      description,
      images: ["/gallery/plaza-rodolfo-baquerizo-moreno (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
