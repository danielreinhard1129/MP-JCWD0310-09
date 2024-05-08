/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'maroon-tints': '#d5a8ae',
        'maroon-shades': '#872230',
        'purple-shades': '#302862',
        'purple-tints': '#6e6991',
        'purple-tetradic': '#28624d',
        'brown-shades': '#5e5225',
        'brown-tints': '#7e7551',
        whites: '#eaedef',
        woodsmokey: '#171818',
        'black-tints': '191919',
        blackless: '2D2727',
      },
    },
  },
  plugins: [],
};
