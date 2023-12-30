/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      "daisy-bush": {
        50: "#f4f3ff",
        100: "#ece8ff",
        200: "#dad5ff",
        300: "#c0b3ff",
        400: "#a088fd",
        500: "#8257fb",
        600: "#7335f2",
        700: "#6423de",
        800: "#4f1bb1",
        900: "#461999",
        950: "#290d68",
      },
    },
    colors: {
      "daisy-bush": {
        50: "#f4f3ff",
        100: "#ece8ff",
        200: "#dad5ff",
        300: "#c0b3ff",
        400: "#a088fd",
        500: "#8257fb",
        600: "#7335f2",
        700: "#6423de",
        800: "#4f1bb1",
        900: "#461999",
        950: "#290d68",
      },
    },
  },
  plugins: [],
};
