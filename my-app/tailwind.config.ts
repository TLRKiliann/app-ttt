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
      dropShadow: {
        "cyan": "1px 1px 2px rgba(0, 255, 255, 0.4)",
        "small": "0px -14px 14px rgba(0, 255, 255, 1)",
        "text": "0px -20px 20px rgba(0, 180, 180, 1)",
      },
      boxShadow: {
        "out": "0 0 7px rgba(200, 200, 200, 0.4)",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: 'class',
};
export default config;
