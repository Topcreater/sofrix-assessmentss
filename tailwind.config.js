/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        customBlue: "url('/public/assets/images/bgIcon.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#02a9e5",
        darkBlueBg: "#3994E9",
      },
    },
  },
  plugins: [],
};
