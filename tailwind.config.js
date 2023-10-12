/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Neue_Montreal_Regular",
        secondary: "Neue_Montreal_Medium",
      },
      fontSize: {
        "fluid-header": "var(--fluid-header)",
        "fluid-sub-header": "var(--fluid-sub-header)"
      },
      colors: {
        accent: {
          100: 'rgb(var(--clr-accent-100))',
          200: 'rgb(var(--clr-accent-200))',
          400: 'rgb(var(--clr-accent-400))',
          900: 'rgb(var(--clr-accent-900))',
        }
      },
      gap: {
        "custom-gap": 'var(--custom-gap)'
      },
    },
  },
  plugins: [],
}