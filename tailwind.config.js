/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "monospace"], // Default font for sans-serif
        firacode: ["Fira Code", "monospace"], // Custom font
        "press-start": ['"Press Start 2P"', "cursive"],
        "maven-pro": ['"Maven Pro"', "sans-serif"],
      },
      colors: {
        "button-bg": "#92CD41",
        "button-bg-hover": "#76c442",
        "shadow-color": "#4AA52E",
        "alt-button-bg": "#F7D51D",
        "alt-button-bg-hover": "#F2C409",
        "alt-shadow-color": "#E59400",
        "reset-button-bg": "#E76E55",
        "reset-button-bg-hover": "#CE372B",
        "reset-shadow-color": "#8C2022",
      },
      boxShadow: {
        "button-shadow": "inset -4px -4px 0px 0px #4AA52E",
        "button-shadow-hover": "inset -6px -6px 0px 0px #4AA52E",
        "button-shadow-active": "inset 4px 4px 0px 0px #4AA52E",
        "alt-button-shadow": "inset -4px -4px 0px 0px #E59400",
        "alt-button-shadow-hover": "inset -6px -6px 0px 0px #E59400",
        "alt-button-shadow-active": "inset 4px 4px 0px 0px #E59400",
        "reset-button-shadow": "inset -4px -4px 0px 0px #8C2022",
        "reset-button-shadow-hover": "inset -6px -6px 0px 0px #8C2022",
        "reset-button-shadow-active": "inset 4px 4px 0px 0px #8C2022",
      },
    },
  },
  variants: {},
  plugins: [],
};
