/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: "1rem", // Padding for small screens
          md: "6rem", // Padding for medium screens and above
        },
      },
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
