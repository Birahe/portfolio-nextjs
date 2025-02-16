import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        front: "#11111B",
        accent: "#54576D",
        theme: "#82ACAC",
        light_theme: "#D8E7DE",
        title: "#4A5C5B",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
} satisfies Config;
