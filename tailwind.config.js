module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: true,
    content:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['bg-primaryColor' , 'bg-secondaryColor' , 'bg-thirdColor', 'bg-yellowColor'],
    }
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    gradientColorStops: theme => ({
      ...theme('colors'),
      'backgroundStart': '#0f5375',
      'backgroundEnd': '#748ea2',
    }),
    backgroundColor: theme => ({
      'brandColor': 'rgba(82, 182, 230, 1)',
      'primaryColor': 'rgba(82, 182, 230, 1)',
      'secondaryColor': 'rgba(85, 196, 189, 1)',
      'thirdColor': 'rgba(238, 128, 116, 1)',
      'yellowColor': 'rgba(245, 222, 128, 1)',
      'brandHighlightedColor': 'rgba(82, 182, 230, 1)',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': 'rgb(226,226,226)',
      'brandColor': 'rgba(82, 182, 230, 1)',
      'menuItem': 'rgb(82,182,230)',
    }),
    fill: theme => ({
      'white': '#ffffff',
    }),
    color:  theme => ({
      ...theme('colors'),
      'brand': 'rgba(82, 182, 230, 1)',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
