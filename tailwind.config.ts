import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        display: ["Cormorant Garamond", "serif"],
        sans: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        daintree: {
          "50": "#eefcfd",
          "100": "#d4f5f9",
          "200": "#afe9f2",
          "300": "#77d9e9",
          "400": "#38bdd8",
          "500": "#1da1bd",
          "600": "#1b829f",
          "700": "#1c6982",
          "800": "#20566a",
          "900": "#1e485b",
          "950": "#0a202a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
