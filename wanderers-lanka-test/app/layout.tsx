import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Poppins} from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({

  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Wanderers Lanka Test",
  description: "A test project for Wanderers Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <ResponsiveNav />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
