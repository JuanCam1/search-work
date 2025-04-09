/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'base': {
          '50': '#ecf1ff',
          '100': '#dde5ff',
          '200': '#c1d0ff',
          '300': '#9cafff',
          '400': '#7583ff',
          '500': '#545aff',
          '600': '#3e35f6',
          '700': '#3e33db', //base
          '800': '#2b24af',
          '900': '#28258a',
          '950': '#191650',
        },

      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
