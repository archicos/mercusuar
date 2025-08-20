import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Kita set sebagai variabel CSS
});

export const metadata = {
  title: "Archico",
  description: "Personal portfolio of Archico Sembiring",
  icons: [{ rel: "icon", url: "/favicon.ico" }], 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
            {children}
          </Providers>
      </body>
    </html>
  );
}