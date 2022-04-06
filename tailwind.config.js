const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        action: "#1D6DC2",
        dark: "#4A4A4A",
        descriptive: "#16A34A",
      },
      fontFamily: {
        display: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
