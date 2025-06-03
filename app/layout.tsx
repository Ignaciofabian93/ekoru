import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekoru",
  description: "Venta sustentable de productos ecológicos en Chile.",
  keywords: ["venta sustentable", "productos ecológicos", "EKORU", "eco friendly", "tienda ecológica"],
  openGraph: {
    title: "Ekoru - Venta sustentable",
    description: "Descubre productos ecológicos y sostenibles para tu vida diaria.",
    url: "https://ekoru.cl",
    siteName: "Ekoru",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekoru - Venta sustentable",
    description: "Descubre productos ecológicos y sostenibles para tu vida diaria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cabin.variable} antialiased`}>{children}</body>
    </html>
  );
}
