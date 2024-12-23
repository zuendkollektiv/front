import type { Metadata } from "next";
import { Pirata_One, Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import PlausibleProvider from "next-plausible";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
});

export const metadata: Metadata = {
  title: "zündkollektiv",
  description:
    "zündkollektiv is a collective of artists and technicians constantly exploring and pushing the boundaries of explosives and fire as means of artistic expression. we strive for experimental and artistic productions beyond the commercial show business. we are based in berlin, leipzig and hamburg and are set to light up spaces around the globe.",
  generator: "Next.js",
  applicationName: "zündkollektiv",
  referrer: "origin-when-cross-origin",
  keywords: [
    "art collective",
    "fire art",
    "pyrotechnics",
    "artistic expression",
    "explosives art",
    "performance art",
    "zündkollektiv",
  ],
  authors: [{ name: "zündkollektiv" }],
  creator: "zündkollektiv",
  publisher: "zündkollektiv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zuendkollektiv.org"), // Replace with your actual domain

  alternates: {
    canonical: "/",
  },
  // Open Graph
  openGraph: {
    title: "zündkollektiv",
    description:
      "zündkollektiv is a collective of artists and technicians constantly exploring and pushing the boundaries of explosives and fire as means of artistic expression. we strive for experimental and artistic productions beyond the commercial show business. we are based in berlin, leipzig and hamburg and are set to light up spaces around the globe.",
    url: "https://zuendkollektiv.org", // Replace with your actual domain
    siteName: "zündkollektiv",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 750,
        alt: "zündkollektiv",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  // twitter: {
  //   card: "summary_large_image",
  //   title: "zündkollektiv",
  //   description:
  //     "we are a collective of artists and technicians constantly exploring and pushing the boundaries of explosives and fire as means of artistic expression.",
  //   creator: "@zuendkollektiv", // Replace with your actual Twitter handle
  //   images: ["/og-image.jpg"], // Make sure to add this image to your public folder
  // },

  // Icons
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="zuendkollektiv.org" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pirataOne.variable} font-mono antialiased bg-black text-white dark`}
      >
        {children}
      </body>
    </html>
  );
}
