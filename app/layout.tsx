import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "../data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Portfolio of Athenkosi Fadana — Computer Science graduate. Software development, IT support, cloud and cybersecurity projects built with Next.js, FastAPI, Flask and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.site),
  title: {
    default: `${PROFILE.name} | Computer Science Graduate`,
    template: `%s | ${PROFILE.name}`,
  },
  description,
  keywords: [
    "Athenkosi Fadana",
    "software developer",
    "computer science graduate",
    "South Africa",
    "AWS re/Start",
    "cybersecurity",
    "IT support",
    "portfolio",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  creator: PROFILE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: PROFILE.site,
    siteName: `${PROFILE.name} — Portfolio`,
    title: `${PROFILE.name} | Computer Science Graduate`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${PROFILE.name} — portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Computer Science Graduate`,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
