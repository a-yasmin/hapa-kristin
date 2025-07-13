/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Arimo', 'Helvetica', 'Arial', 'sans-serif'],
          alt: ['Nunito Sans', 'sans-serif'],
          serif: ['Libre Baskerville', 'Georgia', 'serif'],
        },
      },
    },
    plugins: [],
  };
  