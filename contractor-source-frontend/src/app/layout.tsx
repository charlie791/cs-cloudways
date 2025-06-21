import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo/provider";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Contractor Source - Premium Stone Slabs",
    template: "%s | Contractor Source",
  },
  description: "Browse our extensive collection of granite, quartz, and marble slabs. Premium stone materials for your next project.",
  keywords: ["granite", "quartz", "marble", "stone slabs", "countertops", "contractor materials"],
  authors: [{ name: "Contractor Source" }],
  creator: "Contractor Source",
  publisher: "Contractor Source",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://contractorsource.com",
    siteName: "Contractor Source",
    title: "Contractor Source - Premium Stone Slabs",
    description: "Browse our extensive collection of granite, quartz, and marble slabs.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contractor Source Stone Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Source - Premium Stone Slabs",
    description: "Browse our extensive collection of granite, quartz, and marble slabs.",
    images: ["/images/og-image.jpg"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://woocommerce-1475440-5585552.cloudwaysapps.com" />
      </head>
      <body className="min-h-screen flex flex-col font-body">
        <ApolloWrapper>
          <MainLayout>
            {children}
          </MainLayout>
        </ApolloWrapper>
      </body>
    </html>
  );
}