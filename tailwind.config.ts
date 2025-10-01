import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: { 500: "#1b86ff", 600:"#0d62d6", 700:"#0a4aae" } } } },
  darkMode: "class",
  plugins: [],
};
export default config;
