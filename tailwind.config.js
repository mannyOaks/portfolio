module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      borderColor: ['dark', 'responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
