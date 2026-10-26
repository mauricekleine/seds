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
        surface: {
          primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-bg-tertiary) / <alpha-value>)",
        },
        content: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-text-tertiary) / <alpha-value>)",
        },
        outline: {
          DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
          strong: "rgb(var(--color-border-strong) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Ubuntu", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
};
