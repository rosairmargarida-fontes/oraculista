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
        soft: "0 20px 45px -30px rgba(44, 42, 40, 0.5)",
        card: "0 18px 40px -24px rgba(44, 42, 40, 0.45)",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, #f8f2e8, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
