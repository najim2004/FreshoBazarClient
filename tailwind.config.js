/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "360px", // Extra-extra small screens (e.g., very small phones)
        xs: "480px", // Extra small screens (e.g., small phones)
        sm: "640px", // Small screens (e.g., phones)
        md: "768px", // Medium screens (e.g., tablets)
        lg: "1024px", // Large screens (e.g., laptops)
        xl: "1280px", // Extra large screens (e.g., desktops)
        "2xl": "1536px", // 2X extra large screens (e.g., large desktops)
        "3xl": "1920px", // 3X extra large screens (e.g., extra-large desktops)
        "4xl": "2560px", // 4X extra large screens (e.g., ultra-wide monitors)
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#059669",
        "color-primary": "#455154",
        "color-secondary": "#9ca3af",
        "color-ternary": "#4b5563",
      },
      fontFamily: {
        fjalla: '"Fjalla One", sans-serif',
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
