import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "plazabaquerizo.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Plaza Rodolfo Baquerizo Moreno — Guayaquil, Ecuador",
      template: "%s | Plaza Rodolfo Baquerizo Moreno",
    },
    description:
      locale === 'es' ? "Guía de viaje a Plaza Rodolfo Baquerizo Moreno en Guayaquil, Ecuador. Descubre este hermoso parque urbano, espacios verdes y atracciones recreativas." :
      locale === 'zh' ? "Plaza Rodolfo Baquerizo Moreno 旅行指南——探索厄瓜多尔瓜亚基尔美丽的城市公园：绿化空间、休闲设施和娱乐场所。" :
      "A travel guide to Plaza Rodolfo Baquerizo Moreno in Guayaquil, Ecuador. Discover this beautiful urban park, green spaces, and recreational attractions.",
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
      description: (locale === 'es' ? "Guía de viaje a Plaza Rodolfo Baquerizo Moreno en Guayaquil, Ecuador. Descubre este hermoso parque urbano, espacios verdes y atracciones recreativas." :
      (locale === 'zh' ? "Plaza Rodolfo Baquerizo Moreno 旅行指南——探索厄瓜多尔瓜亚基尔美丽的城市公园：绿化空间、休闲设施和娱乐场所。" :
      "A travel guide to Plaza Rodolfo Baquerizo Moreno in Guayaquil, Ecuador. Discover this beautiful urban park, green spaces, and recreational attractions.")),
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
      description:
        "A travel guide to Plaza Rodolfo Baquerizo Moreno in Guayaquil, Ecuador.",
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
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <SchemaScript locale={locale} />
      <body>{children}</body>
    </html>
  );
}
