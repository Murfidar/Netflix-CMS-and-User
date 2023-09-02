/*global module, require*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dc2626",

          secondary: "#ef4444",

          accent: "#9ca3af",

          neutral: "#1c1917",

          "base-100": "#292524",

          info: "#699cec",

          success: "#165a30",

          warning: "#f8c844",

          error: "#f33312",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
