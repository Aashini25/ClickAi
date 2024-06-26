/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        indianred: "#f06074",
        lavenderblush: "#fff1f2",
        mistyrose: "#ffdbde",
        darkslateblue: "#3252a0",
        mediumslateblue: "#8b6fff",
        greenyellow: "#d1ff49",
        turquoise: "#00e3d2",
        tomato: "#e15d4b",
        crimson: "#ec2265",
        darkgray: "#9f9f9f",
        coral: "#f07b3f",
        gold: "#fbcb0d",
        saddlebrown: {
          "100": "#75511e",
          "200": "#613f00",
        },
        seagreen: "#109a6d",
        darkslategray: "#005c55",
        darkolivegreen: "#324100",
        oldlace: "#fff7e8",
        midnightblue: "#1f0f61",
        cadetblue: "#4aa0af",
        seashell: "#fff1ef",
        ghostwhite: "#f5f2ff",
        lightsteelblue: "#c7d7ff",
        lightcyan: {
          "100": "#d7fffc",
          "200": "#cef9ff",
        },
        lightgoldenrodyellow: "#f3ffd0",
        mintcream: "#eafff8",
        slateblue: "#4f55c3",
        dodgerblue: "#177be5",
        mediumseagreen: "#00c782",
        gainsboro: "#d9d9d9",
        lightcoral: "#ff8686",
        salmon: "#ff6c6c",
        gray: "#202020",
        dimgray: "#686868",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "adineue-pro": "'adineue PRO'",
        poppins: "Poppins",
      },
      borderRadius: {
        "9xl": "28px",
        mini: "15px",
        "6xl": "25px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      "5xl": "24px",
      "45xl": "64px",
      "17xl": "36px",
      "3xl": "22px",
      "11xl": "30px",
      "81xl": "100px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
