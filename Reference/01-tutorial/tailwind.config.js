/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/05-effects-and-transitions/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        // roboto: '"Roboto", "sans-serif"',
        // roboto: "var(--roboto)",
      },
      fontSize: {
        "10xl": ["25rem", "1.5"],
      },
      lineHeight: {
        "extra-loose": "5",
      },
      fontWeight: {
        "extra-extra-bold": "900",
      },
      colors: {
        primary: "#000",
      },
      listStyleType: {
        upperRoman: "upper-roman",
        "lower-roman": "lower-roman",
      },
      spacing: {
        // 98: "30rem",
        // 100: "32rem",
      },
      screens: {
        xs: "480px",
        "3xl": "1600px",
      },
      animation: {
        "slower-spin": "spin 3s linear infinite",
        scale: "scaler 2s linear infinite",
      },
      keyframes: {
        scaler: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};
