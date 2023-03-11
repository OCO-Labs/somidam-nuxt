export default {
  theme: {
    extend: {
      colors: {
        somidam: '#A36036'
      },
      fontFamily: {
        cafe24: ['Cafe24Ohsquare', 'sans-serif'],
        nanumsquare: ['nanumsquare', 'sans-serif']
      }
    }
  },
  plugins: [
    require('flowbite')
  ],
  content: [
    './node_modules/flowbite.{js,ts}'
  ]
}
