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
        "light-purple": "#755CDE",
        "rose-pastel": "#F39E9E",
        "orange-pastel": "#F6A560",
        "bleu-turquoise": "#61C4B7",
        "dark-purple": "#552049",
        "rouge-pastel": "#EB7565",
        "T-black": "#030303",
        "T-grey": "#7A746E",
        "T-white": "#FFF7F0",
      },
    },
  },
  plugins: [],
};
