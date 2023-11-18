/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        light: "#E1E1E1",
        dark: "#D9D9D9",
      },
      boxShadow: {
        bottom: "0 4px 2px -2px rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        custom: "1600px",
      },
    },
  },
  plugins: [],
};
