/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/*.html"],
  theme: {
    fontFamily: {
      'nunitoSans': ['Nunito Sans', 'sans-serif'],
    },
    fontSize: {
      subtitle1: ['17px', {
        letterSpacing: '0.15px',
        fontWeight: '400',
      }],
      subtitle2: ['15px', {
        letterSpacing: '0.1px',
        fontWeight: '600',
      }],
      body1: ['17px', {
        letterSpacing: '0.5px',
        fontWeight: '400',
      }],
      body2: ['15px', {
        letterSpacing: '0.25px',
        fontWeight: '400',
      }],
      textButton: ['15px', {
        letterSpacing: '1.25px',
        fontWeight: '600',
      }],
      headline1: ['66px', {
        letterSpacing: '-0.5px',
        fontWeight: '300',
      }],
      headlineSemibold1: ['66px', {
        letterSpacing: '-0.5px',
        fontWeight: '600',
      }],
      headline2: ['37px', {
        letterSpacing: '0.25px',
        fontWeight: '400',
      }],
      headlineSemibold2: ['37px', {
        letterSpacing: '0.25px',
        fontWeight: '600',
      }],
      headline3: ['26px', {
        letterSpacing: '0px',
        fontWeight: '400',
      }],
      headlineSemibold3: ['26px', {
        letterSpacing: '0px',
        fontWeight: '600',
      }],
    },
    borderWidth: {
      default: '1px',
      '0': '0px',
      '0.6': '0.6px',
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1366px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightgreen1: "#FEFFFE",
        lightgreen2: "#BCEAD5",
        green3: "#9ED5C5",
        green4: "#8EC3B0",
        gray1: "#727272",
        gray2: "#4F4F4F",
        black1: "#2A2A2A",
        black2: "#000000",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'marquee': 'marquee 5s linear infinite',
        'marquee2': 'marquee2 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '100%': { transform: 'translateX(0%)' },
          '0%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
