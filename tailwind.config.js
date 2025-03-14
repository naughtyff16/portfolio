/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00bfff",
        secondary: "#646464",
        darkBg: "#1a1a1a", // Dark mode background color
        darkText: "#ffffff", // Dark mode text color
      },
    },
  },
  plugins: [],
};
