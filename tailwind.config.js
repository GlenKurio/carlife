/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Montserrat, sans-serif",
    },
    extend: {
      backgroundImage: {
        "home-1": "url('/ghost.webp')",
      },
    },
  },
  plugins: [],
};
