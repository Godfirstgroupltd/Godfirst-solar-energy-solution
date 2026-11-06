import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#121212", // Foundation Black
          offwhite: "#F5F5F0", // Off-White Paper
          slate: "#2C3E50", // Slate Trust Blue
          taupe: "#A89F91", // Stone Taupe
          divine: "#EAE6DA", // Divine Accent (5% max)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.22em",
        wide: "0.12em",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(18, 18, 18, 0.04), 0 4px 12px rgba(18, 18, 18, 0.03)",
        card: "0 2px 8px rgba(18, 18, 18, 0.04), 0 12px 32px rgba(18, 18, 18, 0.04)",
        elevated: "0 20px 40px -15px rgba(18, 18, 18, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
