import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://godfirstsolar.com"),
  title: {
    default: "GODFIRST SOLAR & ENERGY LTD | Power that lasts.",
    template: "%s | GODFIRST SOLAR & ENERGY LTD",
  },
  description:
    "Engineering dependable, utility-grade solar installations, hybrid inverters, and lithium energy storage systems for Nigerian residences, estates, and commercial facilities. Division of GODFIRST GROUP LTD.",
  keywords: [
    "Solar Nigeria",
    "Solar panel installation Lagos",
    "Lithium inverter Abuja",
    "Hybrid solar system Nigeria",
    "GODFIRST GROUP LTD",
    "Godfirst Solar",
    "Commercial solar Nigeria",
  ],
  authors: [{ name: "GODFIRST SOLAR & ENERGY LTD" }],
  creator: "GODFIRST GROUP LTD",
  publisher: "GODFIRST GROUP LTD",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/logo-icon.svg",
    shortcut: "/brand/logo-icon.svg",
    apple: "/brand/logo-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://godfirstsolar.com",
    siteName: "GODFIRST SOLAR & ENERGY LTD",
    title: "GODFIRST SOLAR & ENERGY LTD | Power that lasts.",
    description:
      "Utility-grade solar engineering and lithium energy storage across Nigeria. Built on the foundation of GODFIRST GROUP LTD.",
    images: [
      {
        url: "/brand/logo-original.jpg",
        width: 1200,
        height: 630,
        alt: "GODFIRST SOLAR & ENERGY LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GODFIRST SOLAR & ENERGY LTD | Power that lasts.",
    description: "Utility-grade solar engineering across Nigeria.",
    images: ["/brand/logo-original.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GODFIRST SOLAR & ENERGY LTD",
    alternateName: "Godfirst Solar",
    description:
      "Utility-grade solar installations, inverter backups, and lithium storage solutions for homes and businesses across Nigeria.",
    url: "https://godfirstsolar.com",
    telephone: "+2348082312819",
    email: "godfirst.groupltd@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Lagos / Abuja / Port Harcourt",
      addressLocality: "Nigeria",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "GODFIRST GROUP LTD",
      foundingDate: "2026",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-offwhite text-brand-black selection:bg-brand-slate selection:text-brand-offwhite">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
