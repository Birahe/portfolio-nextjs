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
        front: "#11111B",
        accent: "#54576D",
        theme: "#82ACAC",
        light_theme: "#D8E7DE",
        light_blue: "#9dc2c9",
        title: "#4A5C5B",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-light_blue/, // You can display all the colors that you need
    },
  ],
} satisfies Config;
