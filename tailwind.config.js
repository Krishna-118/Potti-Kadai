module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Quicksand', 'sans-serif']
      },
      colors: {
        primary: '#FF5CA2',
        secondary: '#FFD93D',
        accent: '#2EC4B6',
        bg: '#FFF8F0',
        'muted-text': '#6B7280'
      },
      boxShadow: {
        'soft-lg': '0 8px 30px rgba(46,196,182,0.12)'
      }
    }
  },
  plugins: []
};
