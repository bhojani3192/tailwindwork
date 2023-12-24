module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '25':'25px',
    },
    container:{
      center:true,
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    screens: {
      sm: '300px',
      md: '768px',
      lg: '992px',
      xl: '1320px',
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1450px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1199px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '991px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '767px'},
      // // => @media (max-width: 639px) { ... }
    },
    borderRadius:{
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '8px',
      'full': '9999px',
      'large': '12px',
      '2xl': '20px',
      '5xl':'50px',
    },
    extend: {

      backgroundImage: {
        'title-bg': "url('images/page-title.jpg')"
      },
      fontSize:{
        'xxl':'40px',
        'xl' :'22px',
      },
      width:{
        '128':'630px',
      },
      height: {
        '128': '630px',
      },
      fontFamily:{
         Manrope : "'Manrope',sans-serif",
         Mulish : "'Mulish',sans-serif",
      },
      animation: {
        toptext: 'toptext 1s  0.5s 1 forwards ',
        textbottom:'textbottom 0.5s 1.75s 1 forwards'
      },
      keyframes: {
        toptext: {
          '0%, 100%':  { transform: 'translate3d(0, 100%, 0);' },
          '40%, 50%':  { transform: 'translate3d(0, 50%, 0);' },
          '100%': {transfoem : 'translate3d(0, 0 ,0)'},
        },
        textbottom : {
          '0%' :  { transform: 'translate3d(0, -100%, 0);' },
          '100%': {transfoem : 'translate3d(0, 0 ,0)'},
        }
      }
    },
  },
  plugins: [],
}
