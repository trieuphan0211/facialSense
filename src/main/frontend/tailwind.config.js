/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
    },
    backgroundImage: {
      home: "url('./assets/img/home/bg.png')",
      shape: "url('./assets/img/home/shape.png')",
      "gradient-filter":
        "linear-gradient(180deg, #E1E1E1 0%, rgba(255, 255, 255, 0.50) 100%)",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    animation: {
      "show-nav": "show-nav 0.25s ease-in-out",
      "scale-up": "scale-up 1s ease-in-out 2s forwards",
      "scale-up-not-delay": "scale-up 1s ease-in-out forwards",
      "scale-up-slow": "scale-up 1s ease-in-out forwards",
    },
    keyframes: {
      "show-nav": {
        "0%": { transform: "translateY(10px)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      "scale-up": {
        "0%": { transform: "scale(0)" },
        "100%": { transform: "scale(1)" },
      },
    },
    extend: {},
  },
  plugins: [],
};
