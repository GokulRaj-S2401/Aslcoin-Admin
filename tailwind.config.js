/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background :'#12181F',
        
      },
      boxShadow:{
        card:'0px 0px 30px 0px #212A36',
        popup:'-5px 5px 20px 0px #2e2e2e50'
      }
      // backgroundColor: {
      //   'body': 'var(--bg-body)',
      // },
      // textColor: {
      //   'text': 'var(--text-body)',
      // },
    },
  },
  plugins: [],
}

