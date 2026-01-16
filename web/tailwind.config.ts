import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f4f0e8",
        wine: "#731a5b",
        terracotta: "#0f3b66",
        ink: "#0f3b66",
        gold: "#e5c72e",
        paper: "#f4f0e8",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 48px -16px rgba(15, 59, 102, 0.5)",
        card: "0 30px 60px -16px rgba(15, 59, 102, 0.6)",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, #f8f2e8, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
