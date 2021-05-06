const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2129',
        },
        seondary: {
          DEFAULT: '#db2777',
        },
      },
    },
  },
  variants: {
    display: ['group-hover'],
    extend: {
      display: ['responsive'],
      backgroundOpacity: ['disabled'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.filter-none': {
          filter: 'none',
        },
        '.filter-grayscale': {
          filter: 'grayscale(100%)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.active-movie': {
          borderWidth: 4,
          bottom: 8,
          borderColor: '#db2777',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
