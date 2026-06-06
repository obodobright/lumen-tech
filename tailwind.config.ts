import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        navy: "#081120",
        electric: "#2f80ff",
        cyan: "#5de2ff"
      },
      boxShadow: {
        glow: "0 0 70px rgba(47, 128, 255, 0.28)",
        premium: "0 24px 80px rgba(8, 17, 32, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
