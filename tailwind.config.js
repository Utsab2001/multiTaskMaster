/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            screens: {
        'xml': '800px', // Custom breakpoint
        'xs': '480px', // Custom breakpoint
        'sl': '1920px', // Another custom breakpoint
      },
    },
  },
  plugins: [],
}

