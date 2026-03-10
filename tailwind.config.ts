import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "mq-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-3%)" },
          "20%": { transform: "translate(3%,2%)" },
          "30%": { transform: "translate(-1%,4%)" },
          "40%": { transform: "translate(2%,-1%)" },
          "50%": { transform: "translate(-3%,2%)" },
          "60%": { transform: "translate(1%,-3%)" },
          "70%": { transform: "translate(-2%,1%)" },
          "80%": { transform: "translate(3%,3%)" },
          "90%": { transform: "translate(-1%,-2%)" },
        },
      },
      animation: {
        "mq-fwd": "mq-scroll 30s linear infinite",
        "mq-rev": "mq-scroll 30s linear infinite reverse",
        grain: "grain 0.4s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
