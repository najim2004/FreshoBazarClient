/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#14B546",
        "color-primary": "#455154",
        "color-secondary": "#BBC0C1",
        "color-ternary": "#9CA3A5",
      },
      fontFamily: {
        fjalla: '"Fjalla One", sans-serif',
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
