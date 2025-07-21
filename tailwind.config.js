/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/templates/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#1e40af",
        "primary-content": "#ffffff",
        "secondary": "#2563eb",
        "secondary-content": "#ffffff",
        "accent": "#60a5fa",
        "accent-content": "#1e40af",
        "neutral": "#e5e7eb",
        "neutral-content": "#1e2937",
        "base-100": "#f9fafb",
        "base-content": "#1e2937",
        "info": "#9333ea",
        "info-content": "#fff",
        "success": "#22c55e",
        "success-content": "#fff",
        "warning": "#f59e0b",
        "warning-content": "#fff",
        "error": "#ef4444",
        "error-content": "#fff"
        },
      },
    ],
  },
}

