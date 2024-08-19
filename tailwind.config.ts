import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: { primary: "#1E1E1E", secondary: "#C778DD" },
      textColor: { primary: "#C778DD", secondary: "#ABB2BF" },
      borderColor: { primary: "#C778DD", secondary: "#ABB2BF" },
    },
    fontFamily: {
      sans: ["Ubuntu, sans-serif"],
    },
  },
  plugins: [],
};
export default config;
