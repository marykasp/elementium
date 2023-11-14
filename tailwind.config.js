/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        primary: {
          50: "#ff77e9",
        },
      },
    },
  },
  plugins: ["tailwind-scrollbar"],
};
