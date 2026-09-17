import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eng-saeed.vercel.app"),
  title: {
    default: "Saeed | Full Stack & Frontend Developer Portfolio",
    template: "%s | Saeed Sayed",
  },
  description:
    "Full Stack & Frontend Developer with 4 years of experience building modern web apps with React, Next.js, TypeScript, and Node.js. Explore projects & resume.",
  applicationName: "Saeed Portfolio",
  authors: [{ name: "Saeed Sayed", url: "https://eng-saeed.vercel.app" }],
  creator: "Saeed Sayed",
  publisher: "Saeed Sayed",
  keywords: [
    "Saeed Full Stack Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Web Development Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eng-saeed.vercel.app",
    siteName: "Saeed | Full Stack Developer",
    title: "Saeed | Full Stack & Frontend Developer Portfolio",
    description:
      "Full Stack & Frontend Developer with 4 years of experience specializing in React, Next.js, TypeScript, and Node.js. View featured projects and technical skills.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saeed Sayed - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saeed | Full Stack & Frontend Developer Portfolio",
    description:
      "Full Stack & Frontend Developer with 4 years of experience building scalable applications with React, Next.js, TypeScript, and Node.js.",
    images: ["/images/og-image.png"],
    creator: "@saeedsayed",
  },
  category: "technology",
  verification: {
    google: "HPJvynYgNxWtZE6oEzaJjRAvdtzrdIdJ-oATkV_mHPw",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
