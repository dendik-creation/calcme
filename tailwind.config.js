/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      "blue-custom": {
        50: "#f2f3fb",
        100: "#e7eaf8",
        200: "#d3d7f2",
        300: "#b8bee9",
        400: "#9b9ede",
        500: "#8783d1",
        600: "#6e63bf",
        700: "#6458aa",
        800: "#514a89",
        900: "#45406f",
        950: "#292640",
      },
    },
    colors: {
      "blue-custom": {
        50: "#f2f3fb",
        100: "#e7eaf8",
        200: "#d3d7f2",
        300: "#b8bee9",
        400: "#9b9ede",
        500: "#8783d1",
        600: "#6e63bf",
        700: "#6458aa",
        800: "#514a89",
        900: "#45406f",
        950: "#292640",
      },
    },
  },
  plugins: [],
};
