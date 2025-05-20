/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/@nextui-org/theme/dist/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [nextui()],
};
