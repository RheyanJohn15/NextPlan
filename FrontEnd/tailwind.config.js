/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: '#a3ecf2',
          DEFAULT: '#44d9e6',
          dark: '#2a878f',
        },
        customGreen: {
          light: '#A3E635',
          DEFAULT: '#84CC16',
          dark: '#4D7C0F',
        },
      },
    },
    fontFamily: {
      mont:['var(--font-montserrat)'],
    },
  },
  plugins: [],
};
