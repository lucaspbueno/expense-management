/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#d6d4d4',
      },
      screens: {
        p: '425px',
        m: '535px',
        sm: '640px', // Media query para telas até 320px
        md: '768px', // Media query para telas até 375px
        lg: '1024px', // Exemplo de novo breakpoint para telas até 768px
        xl: '1280px', // Exemplo de novo breakpoint para telas até 1024px
        xx: '1536px',
        // Adicione mais breakpoints personalizados conforme necessário
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
