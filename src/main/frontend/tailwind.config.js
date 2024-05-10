/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      md: { max: "767px" },
      mds: { min: "741px", max: "976px" },
      mdsmin: { max: "740px" },
      smAndmd: { min: "640px", max: "1023px" },
      mds740: { min: "640px", max: "740px" },
      sm840: {max: "840px" },
      // => @media (max-width: 767px) { ... }
      lg: { max: "1023px" },
      mlgd: { min: "767px", max: "1023px" },
      "mlgd1160":  { min: "767px", max: "1160px" },
      // => @media (max-width: 1023px) { ... }
      xl: { max: "1279px" },
      xlmaxmin: {min: "1024px", max: "1279px"},
      // => @media (max-width: 1279px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "460sm": { max: "462px" },
      max740to460: { min: "463px", max: "740px"},
      "max429": { max: "428px" },
      "460max": {min: "463px", max: "1023px"},
      minxl: { min: "1400px" },
      minlg: { min: "1280px"},
    },

    extend: {
      backgroundImage: {
        home: "url('./assets/img/home/bg.png')",
        industries: "url('./assets/img/home/bg1.png')",
        organization: "url('./assets/img/industries/organization/Section.png')",
        company: "url('./assets/img/company/aboutus.png')",
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
        "bounce-slow": "bounce 3s ease-in-out infinite",
        movesquare: "movesquare 10s linear infinite",
        "movesquare-slow": "movesquare 15s linear infinite",
        "spin-slow": "spin 6s linear infinite",
        "fadeIn": "fadeIn 3s ease"
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
        "fadeIn": {
          "0%": { opacity: 0 },
          "100%": {opacity: 1}
        },
        movesquare: {
          "0%": {
            "-webkit-transform": " translate(0,0) rotate(0)",
            transform: "translate(0,0) rotate(0)",
          },

          "20%": {
            "-webkit-transform": "translate(73px,-1px) rotate(36deg)",
            transform: "translate(73px,-1px) rotate(36deg)",
          },

          "40%": {
            "-webkit-transform": "translate(141px,72px) rotate(72deg)",
            transform: "translate(141px,72px) rotate(72deg)",
          },

          "60%": {
            "-webkit-transform": "translate(83px,122px) rotate(108deg)",
            transform: "translate(83px,122px) rotate(108deg)",
          },

          " 80%": {
            "-webkit-transform": " translate(-40px,72px) rotate(144deg)",
            transform: "translate(-40px,72px) rotate(144deg)",
          },

          " 100%": {
            transform: "translate(0,0) rotate(0)",
          },
         
        },
      },
      boxShadow: {
        hoverAppAndIns: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",

        shawdowDefault: "0px 4px 12px 0px rgba(12, 68, 204, 0.10)",
        shawdowprice: "-9px 7px 52px 0px rgba(0, 0, 0, 0.09), 0px 2px 6px 0px rgba(0, 0, 0, 0.04);"
      },
      width: {
        2581: "calc(25% - 81px)",
      },
      content: {
        'none': 'none',
      },
    },
  },
  plugins: [],
};
