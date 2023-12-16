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
        "role-l": "url('/driving.webp')",
        "role-r": "url('/exotics.webp')",
      },
      gridTemplateColumns: {
        // Grid for cards
        cards: "repeat(auto-fit, minmax(300px, 1fr))",
        hostCarImgs: "repeat(auto-fit, minmax(150px, 400px))",
      },
      gridTemplateRows: {
        hostCarImgsRows: "repeat(4, minmax(150px, 400px)",
      },
    },
  },
  plugins: [],
};
