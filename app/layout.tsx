import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "zündkollektiv",
  description:
    "we are a collective of artists and technicians constantly exploring and pushing the boundaries of explosives and fire as means of artistic expression.",
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
  colorScheme: "dark",
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
      "we are a collective of artists and technicians constantly exploring and pushing the boundaries of explosives and fire as means of artistic expression.",
    url: "https://zuendkollektiv.org", // Replace with your actual domain
    siteName: "zündkollektiv",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
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
  //   images: ["/twitter-image.jpg"], // Make sure to add this image to your public folder
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white dark`}
      >
        {children}
      </body>
    </html>
  );
}
