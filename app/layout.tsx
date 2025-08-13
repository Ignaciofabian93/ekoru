import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekoru",
  description: "Venta sustentable de productos ecológicos en Chile.",
  keywords: [
    "venta sustentable",
    "productos ecológicos",
    "EKORU",
    "eco friendly",
    "tienda ecológica",
  ],
  openGraph: {
    title: "Ekoru - Venta sustentable",
    description:
      "Descubre productos ecológicos y sostenibles para tu vida diaria.",
    url: "https://ekoru.cl",
    siteName: "Ekoru",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekoru - Venta sustentable",
    description:
      "Descubre productos ecológicos y sostenibles para tu vida diaria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://ekoru.cl/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ekoru",
              url: "https://ekoru.cl",
              logo: "https://ekoru.cl/public/brand/logo.webp",
              description:
                "Venta sustentable de productos ecológicos en Chile.",
              sameAs: [
                "https://www.instagram.com/ekoru.cl",
                "https://www.linkedin.com/company/ekoru-cl",
              ],
            }),
          }}
        />
      </head>
      <body className={`${cabin.variable} antialiased`}>
        <main id="main-content" tabIndex={-1}>
          <ToastContainer
            theme="light"
            autoClose={2500}
            pauseOnHover
            position="top-center"
            closeOnClick
          />
          {children}
        </main>
      </body>
    </html>
  );
}
