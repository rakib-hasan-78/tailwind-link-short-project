
export default {
  content: [
    './*.{html,js}', // This covers your HTML and JS files in the root directory
    './src/**/*.{html,js}', // Add this to include HTML and JS files in the src directory
  ],
  theme: {
    screens:{
      xs:'480px',
      sm:'650px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        sans:['Josefin Sans', 'sans-serif'],
        alata:['Alata'],
        monta:['Montserrat']
      },
      animation:{
        'bounce-slow':'bounce 8s linear infinite'
      }
    },
  },
  plugins: [],
}

