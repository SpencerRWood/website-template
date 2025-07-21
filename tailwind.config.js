/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1e40af", // Deep Navy Blue
          "secondary": "#2563eb", // Bright Royal Blue
          "accent": "#60a5fa", // Soft Sky Blue
          "neutral": "#e5e7eb", // Light gray
          "base-100": "#f9fafb", // Very light gray/white
          "info": "#9333ea", // Bright Purple
          "success": "#22c55e", // True Vibrant Green
          "warning": "#f59e0b", // Saturated Warm Yellow
          "error": "#ef4444", // Bright Red
        },
      },
    ],
  },
}

