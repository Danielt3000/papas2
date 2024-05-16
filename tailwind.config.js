const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
        ml: "900px",
        x: "1000px",
      },
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [flowbite.plugin()],
};
