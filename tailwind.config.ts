import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: {
          primary: "#E9D175",
        },
        blue: {
          dark: "#110D3C",
        },
        orange: {
          primary: "#F26633",
        },
        gray: {
          primary: "#797979",
          secondary: "#F5F5F5",
        },
      },
      fontSize: {
        "6xl": ["60px", "70px"],
        "5xl": ["42px", "50px"],
        "4xl": ["36px", "44px"],
        "3xl": ["25px", "32px"],
        xl: ["18px", "30px"],
        lg: ["15px", "25px"],
        sm: ["12px", "20px"],
      },
    },
  },
  plugins: [],
};
export default config;
