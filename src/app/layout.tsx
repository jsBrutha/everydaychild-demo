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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
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
