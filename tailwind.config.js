/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      brown: {
        color1: '#9E7676',
        color2: '#815B5B',
        color3: '#644529',
        color4: '#FFC3A1',

      },
      white: {
        color1: '#ffffff',
        color2: '#FFF8EA',
        color3: '#EDDBC7',

      },

      black:{
        color1:"000000"
      },
    }
  },
  plugins: [],
}
