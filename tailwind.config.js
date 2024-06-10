/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'StyleScript': ['Style Script', 'cursive'],
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        xs: '0.75rem',   // 12px
        sm: '0.8125rem', // 13px
        tiny: '0.875rem',// 14px
        base: '0.9375rem', // 15px
        md: '1rem',      // 16px
        lg: '1.0625rem', // 17px
        xl: '1.125rem',  // 18px
        '2xl': '1.25rem',  // 20px
        '3xl': '1.375rem', // 22px
        '4xl': '1.875rem', // 30px
        '5xl': '2.1875rem', // 35px
        '6xl': '3.125rem', // 50px
        '7xl': '3.4375rem', // 55px
        '8xl': '4.0625rem', // 65px
      },
      colors: {
        'main': '#090A22',
        'secondary': '#F6CD3A',
      },
    },
  },
  plugins: [],
}