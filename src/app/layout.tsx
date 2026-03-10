import type { Metadata } from "next";
import { Candal, Cabin } from "next/font/google";
import "./globals.css";

const candal = Candal({
  weight: "400",
  variable: "--font-candal",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

// Use Vercel's URL when deployed, or custom domain from env
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://lillacsanaky.dev");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lilla Csanaky | Customer Solutions Engineer",
    template: "%s | Lilla Csanaky",
  },
  description:
    "Professional experience in customer-facing engineering, integrations, automation, and technical delivery. Work across APIs, iPaaS (Workato), debugging, and cross-functional collaboration in SaaS environments.",
  keywords: [
    "Customer Solutions Engineer",
    "integrations",
    "automation",
    "Workato",
    "iPaaS",
    "APIs",
    "technical delivery",
    "SaaS",
  ],
  authors: [{ name: "Lilla Csanaky", url: "https://github.com/cslylla" }],
  creator: "Lilla Csanaky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Lilla Csanaky",
    title: "Lilla Csanaky | Customer Solutions Engineer",
    description:
      "Customer-facing engineering experience across integrations, automation, debugging, onboarding, and cross-functional delivery in SaaS environments.",
    images: [
      {
        url: `${siteUrl}/og-preview.png`,
        width: 1200,
        height: 630,
        alt: "Lilla Csanaky - Customer Solutions Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilla Csanaky | Customer Solutions Engineer",
    description:
      "Customer-facing engineering experience across integrations, automation, and technical delivery in SaaS environments.",
    images: [
      {
        url: `${siteUrl}/og-preview.png`,
        width: 1200,
        height: 630,
        alt: "Lilla Csanaky - Customer Solutions Engineer",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${candal.variable} ${cabin.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
