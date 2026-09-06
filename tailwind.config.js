/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          dark: "#0a0f1a",
          "dark-card": "#111827",
          "dark-elevated": "#1e293b",
          "dark-hover": "#253449",
          blue: "#3b82f6",
          "blue-hover": "#2563eb",
          cyan: "#22d3ee",
          "cyan-hover": "#06b6d4",
          indigo: "#818cf8",
          sky: "#38bdf8",
          muted: "#94a3b8",
          secondary: "#64748b",
          border: "#1e3a5f",
          "border-hover": "#2563eb",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
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
          "linear-gradient(180deg, rgba(10,15,26,0.9) 0%, rgba(10,15,26,0.4) 50%, rgba(10,15,26,0.9) 100%)",
        "hero-gradient-dark":
          "linear-gradient(180deg, rgba(10,15,26,1) 0%, transparent 40%)",
        "hero-gradient-bottom":
          "linear-gradient(0deg, rgba(10,15,26,1) 0%, transparent 40%)",
        "card-gradient":
          "linear-gradient(180deg, transparent 0%, rgba(10,15,26,0.9) 100%)",
        "ocean-gradient":
          "linear-gradient(135deg, #3b82f6 0%, #22d3ee 50%, #38bdf8 100%)",
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
