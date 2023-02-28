/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        charm: ["Charm"],
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
    },
  },
  plugins: [],
  animation: {
    "rev-block": "rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards",
    "appear-text": "appear-text 0.0001s linear forwards",
    'rev-img': 'rev-img 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards',
  },
  keyframes: {
    "appear-text": {
      "0%": {
        opacity: 0,
      },
      "50%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
    "rev-block": {
      "0%": {
        left: "0%",
        width: "0%",
      },
      "50%": {
        left: "0",
        width: "100%",
      },
      "100%": {
        left: "100%",
        width: "0%",
      },
    },
    'rev-img': {
      '0%': {
        left: '0%',
        width: '0%',
      },
      '50%': {
        left: '0',
        width: '46%',
      },
      '100%': {
        left: '46%',
        width: '0%',
      },
    },
  },
};
