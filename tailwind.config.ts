import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-satoshi)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-clash-grotesk)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        satoshi: [
          "var(--font-satoshi)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        clash: [
          "var(--font-clash-grotesk)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;
