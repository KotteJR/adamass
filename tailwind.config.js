/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Look in src/app for JS/TSX files
    './src/components/**/*.{js,ts,jsx,tsx}', // If you have components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
