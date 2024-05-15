/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )",
        section1_background: "url('/src/assets/background.jpg')",
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        move: "move 4s linear infinite",
      },
      colors: {
        light_red: "#00e1ff",
        primary: "#0095ff",
        background: "#5F6C75",
      },
      keyframes: {
        move: {
          "0%": { left: 0, top: 0 },
          "50%": { left: 0, top: "2rem" },
          "100%": { left: 0, top: 0 },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
  },
  plugins: [],
};
