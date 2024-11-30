// Global styles
import "@/styles/globals.css";

// Dependencies
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

// Components
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

/**
 * Metadata for the application
 * This will be used by Next.js for SEO and browser tab information
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  title: "Matic - Contentful Next.js Starter",
  description: "Contentful Next.js Starter",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

/**
 * Root layout component that wraps all pages
 * Features:
 * - Applies Geist Sans font
 * - Sets HTML language
 * - Provides global context via Providers component
 *
 * @param children - Page content to be rendered
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}