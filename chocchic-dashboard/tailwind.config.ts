import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cocoa: {
          50: "#faf6f2",
          100: "#f2e9e0",
          200: "#e3d2c1",
          300: "#cdb095",
          400: "#b08a68",
          500: "#8f6a4b",
          600: "#71513a",
          700: "#573d2d",
          800: "#3d2a20",
          900: "#271b15",
        },
        cream: "#fbf8f4",
        gold: { 400: "#d4a84b", 500: "#b8892c", 600: "#946b1c" },
        ink: { DEFAULT: "#1d1814", 2: "#57504a", 3: "#8a827a" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(39,27,21,.04), 0 4px 16px -4px rgba(39,27,21,.08)",
      },
    },
  },
  plugins: [],
};
export default config;
