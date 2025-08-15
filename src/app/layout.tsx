import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Archico Sembiring",
  description: "Software Engineer specializing in web, mobile, and desktop applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Navbar />
        <main className="container mx-auto max-w-5xl px-6 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}