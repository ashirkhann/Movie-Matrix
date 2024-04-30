// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        // => @media (min-width: 640px) { ... }

        'md': '760px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        teal: {
          '980': 'rgb(2, 22, 22)',
          '960': 'rgb(3, 33, 33)',
        },
        // teal: {
        //   '960': 'rgb(3, 33, 33)', // Define your custom color
        // },
      },
    },
  },
  plugins: [],
};
