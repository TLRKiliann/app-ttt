import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      keyframes: {
        upstart: {
          '0%': { 
            transform: 'translateY(200px)',
            opacity: "0"
          },
          '100%': { 
            transform: 'translateY(0px)',
            opacity: "1"
          }
        },
        sliceappear: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
      },
      animation: {
        "up-start": "upstart 0.4s ease 1",
        "slice-appear": "sliceappear 0.5s ease-out 1",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
