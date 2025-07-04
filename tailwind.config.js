/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Baloo2: ['Baloo 2' ,"sans-serif"],
      },
  },
  plugins: [],
}

