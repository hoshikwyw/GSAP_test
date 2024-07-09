/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "luxury", "dim", "pastel", "business", "night", "retro", "sunset", "emerald", "autumn"],
  },
  plugins: [
    daisyui,
  ],
}

