import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/fonts/sathoshi/fonts";
import { clashGrotesk } from "@/fonts/clash/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Every Child Deserves a Future Filled with Possibility",
  description:
    "Join us in breaking the cycle of poverty by giving every child the chance to access quality education and thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.everychildinitiative.org/" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Every Child Deserves a Future Filled with Possibility"
        />
        <meta
          property="og:description"
          content="Join us in breaking the cycle of poverty by giving every child the chance to access quality education and thrive."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.everychildinitiative.org/" />
        <meta
          property="og:image"
          content="https://www.everychildinitiative.org/images/og-image.png"
        />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Every Child Deserves a Future Filled with Possibility"
        />
        <meta
          name="twitter:description"
          content="Join us in breaking the cycle of poverty by giving every child the chance to access quality education and thrive."
        />
        <meta
          name="twitter:image"
          content="https://www.everychildinitiative.org/images/og-image.png"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EveryChild International",
          "url": "https://yourdomain.com",
          "logo": "https://www.everychildinitiative.org/logo.svg",
          "sameAs": [
            "https://facebook.com/yourpage",
            "https://twitter.com/yourpage"
          ]
        }`,
          }}
        />
      </head>
      <body className={`${satoshi.variable} ${clashGrotesk.variable}`}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "font-medium",
          }}
        />
        {children}
      </body>
    </html>
  );
}
