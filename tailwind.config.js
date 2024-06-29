/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "v-1": "#8064A2",
        "b-1": "#0096C8",
        "g-1": "#77933C",
        "r-1": "#C0504D",
      },
    },
  },
  plugins: [],
};
