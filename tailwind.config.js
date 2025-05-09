/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        textColor: {
          light: '#1e1e1e',  // Light mode color
          dark: '#e2e8f0',   // Dark mode color
        },
        buttonColor: '#7f5539', 
      },
    },
  },
  plugins: [],
} 