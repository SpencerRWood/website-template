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
        "primary": "#1e9167ff",
        "primary-content": "#f8f9faff",
        "secondary": "#b7c3ccff",
        "secondary-content": "#040405ff",
        "accent": "#b4daccff",
        "accent-content": "#040405ff",
        "neutral": "#f8f9faff",
        "neutral-content": "#040405ff",
        "base-100": "#f2f4f7ff",
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
    defaultTheme: "mytheme"
  },
}

