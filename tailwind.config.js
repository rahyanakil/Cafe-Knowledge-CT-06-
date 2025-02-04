/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true, // Centers the container
      padding: '4rem', // Adds padding inside the container
    },
  },
  darkMode: "class", // Enables manual dark mode control
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // Default themes
    darkTheme: "business", // Change default dark mode theme
  },
};
