import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saeed | Full Stack Developer - portfolio",
  description:
    "Saeed is a full stack developer with expertise in React, Node.js, and MongoDB. He has a passion for building scalable and efficient web applications. With a strong background in both frontend and backend development, Saeed is dedicated to delivering high-quality code and creating seamless user experiences. He is proficient in modern web technologies and has a keen eye for design, ensuring that his projects are not only functional but also visually appealing. Saeed is always eager to learn new technologies and stay up-to-date with industry trends, making him a valuable asset to any development team.",
  keywords: [
    "full stack developer",
    "React",
    "Node.js",
    "MongoDB",
    "web development",
    "portfolio",
    "Saeed",
    "scalable applications",
    "efficient web applications",
    "frontend development",
    "backend development",
    "high-quality code",
    "user experience",
    "modern web technologies",
    "design",
    "industry trends",
  ],
  icons: {
    icon: "/icon.png",
  },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
