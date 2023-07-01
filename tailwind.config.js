const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      desktop: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }

      laptop: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      tablet: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }
    },
    fontSize: {
      sm: ["13px", "18px"],
      base: ["17px", "22px"],
      lg: ["22px", "28px"],
      xl: ["34px", "41px"],
    },
    fontFamily: {
      display: ["Lato", "Arial", "sans-serif"],
      body: ["Playfair Display", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
