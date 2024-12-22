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
