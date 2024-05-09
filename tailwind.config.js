const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        xs: "440px",
        ml: "900px",
        x: "1000px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
