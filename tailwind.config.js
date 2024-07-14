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
        primary: {
          DEFAULT: '#756AB6',
          dark: '#5e4fa2',
        },
        secondary: {
          DEFAULT: '#AD88C6',
          dark: '#8e6ca8',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
