import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/animation/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0F11",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "GRAVIPOINT | Industrial & Architectural Engineering Systems",
  description:
    "A bold editorial marketing platform delivering high-performance structural engineering, subterranean infrastructure, and parametric commercial developments.",
  keywords: [
    "Industrial Architecture",
    "Structural Engineering",
    "Commercial Construction",
    "Infrastructure Development",
    "4D BIM Sequencing",
    "GraviPoint",
  ],
  authors: [{ name: "GraviPoint Systems" }],
  openGraph: {
    title: "GRAVIPOINT | Industrial & Architectural Systems",
    description:
      "Precision engineering, subterranean infrastructure, and monolithic commercial architecture built to perform for decades.",
    type: "website",
    locale: "en_US",
    siteName: "GraviPoint",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRAVIPOINT | Industrial & Architectural Systems",
    description:
      "Precision structural engineering and editorial-grade architectural developments.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white antialiased font-body"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
