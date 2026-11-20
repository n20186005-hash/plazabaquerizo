import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { isSiteLocale, localizedAlternates, locales, siteUrl } from "../site-url";
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

const baseUrl = siteUrl;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (!isSiteLocale(locale)) notFound();
  const title = locale === "es" ? "Plaza Rodolfo Baquerizo Moreno en Guayaquil | Guía de visita" :
    locale === "zh" ? "瓜亚基尔巴克里索广场｜位置、展览与滨水游览" :
    "Plaza Rodolfo Baquerizo Moreno in Guayaquil | Visitor Guide";
  const description = locale === "es" ? "Plaza Rodolfo Baquerizo Moreno en Av. 9 de Octubre y Tungurahua, Guayaquil. Ubicación, exposiciones, fotos y paseo por el Malecón del Salado." :
    locale === "zh" ? "查找瓜亚基尔巴克里索广场的街口、展览场地、实景照片与萨拉多滨水步行路线。" :
    "Find Plaza Rodolfo Baquerizo Moreno at 9 de Octubre and Tungurahua in Guayaquil, with directions, photos and a walk to Malecón del Salado.";
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
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
      title,
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
      title,
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
      languages: localizedAlternates(),
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isSiteLocale(locale)) notFound();
  return (
    <html suppressHydrationWarning lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
