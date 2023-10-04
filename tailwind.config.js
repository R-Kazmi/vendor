/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#DF4444",
        secondary: "#73777B",
        dark: "#222222",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
