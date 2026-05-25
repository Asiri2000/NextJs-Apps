import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "SEO manager",
  description: "Manage your SEO settings easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            
            <NextIntlClientProvider>
            {children}
            </NextIntlClientProvider>
            
            </main>
        </div>
      </body>
    </html>
  );
}
