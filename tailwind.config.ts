import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "spark-0": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "100%": {
            transform:
              "translateY(-40px) translateX(20px) scale(0) rotate(180deg)",
            opacity: 0,
          },
        },
        "spark-1": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "100%": {
            transform:
              "translateY(-30px) translateX(-20px) scale(0) rotate(-180deg)",
            opacity: 0,
          },
        },
        "spark-2": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "100%": {
            transform:
              "translateY(-35px) translateX(10px) scale(0) rotate(90deg)",
            opacity: 0,
          },
        },
        "spark-3": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "100%": {
            transform:
              "translateY(-25px) translateX(-15px) scale(0) rotate(-90deg)",
            opacity: 0,
          },
        },
        "spark-4": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "100%": {
            transform:
              "translateY(-45px) translateX(5px) scale(0) rotate(45deg)",
            opacity: 0,
          },
        },
      },
      animation: {
        "spark-0": "spark-0 0.8s ease-out forwards",
        "spark-1": "spark-1 0.9s ease-out forwards",
        "spark-2": "spark-2 0.7s ease-out forwards",
        "spark-3": "spark-3 1s ease-out forwards",
        "spark-4": "spark-4 0.6s ease-out forwards",
      },
    },
  },
  variants: {
    opacity: ["group-hover"],
    animation: ["group-hover"],
  },
  safelist: [
    "animate-spark-0",
    "animate-spark-1",
    "animate-spark-2",
    "animate-spark-3",
    "animate-spark-4",
  ],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
