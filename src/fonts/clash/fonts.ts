import localFont from "next/font/local";

export const clashGrotesk = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
  ],
  variable: "--font-clash-grotesk",
});
