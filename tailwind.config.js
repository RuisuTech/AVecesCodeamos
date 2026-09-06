/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: "#e50914",
          "red-hover": "#f6121d",
          dark: "#141414",
          "dark-lighter": "#181818",
          "dark-card": "#222",
          gray: "#808080",
          "gray-light": "#b3b3b3",
          "gray-dark": "#333",
        },
      },
      fontFamily: {
        netflix: [
          '"Netflix Sans"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      spacing: {
        "18": "4.5rem",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
        "hero-gradient-dark":
          "linear-gradient(180deg, rgba(20,20,20,1) 0%, transparent 40%)",
        "hero-gradient-bottom":
          "linear-gradient(0deg, rgba(20,20,20,1) 0%, transparent 40%)",
        "card-gradient":
          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
