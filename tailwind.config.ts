import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        roseMilk: "#fff7f8",
        blush: "#f7dfe4",
        shell: "#f8efe6",
        mist: "#eaf4f8",
        ink: "#3c3434",
        cocoa: "#7a5f58",
        lagoon: "#6b9db0",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(96, 71, 71, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
