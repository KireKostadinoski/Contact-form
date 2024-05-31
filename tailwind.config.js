/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      xl: "940px",
    },
    extend: {
      colors: {
        Green200: 'hsl(148, 38%, 91%)',
        Green600: 'hsl(169, 82%, 27%)',
        Red: 'hsl(0, 66%, 54%)',
        White: 'hsl(0, 0%, 100%)',
        Grey500: 'hsl(186, 15%, 59%)',
        Grey900: 'hsl(187, 24%, 22%)',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
