/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      padding: {
        default: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px'
    },
    extend: {
      colors: {
        mainRed: "#c93439", // Rojo principal para botones de acción
        darkRed: "hsl(0, 70%, 47%)", // Rojo oscuro para botones de alerta
        greenLight: "hsl(120, 100%, 50%)", // Verde claro para botones de acción
        greenDark: "hsl(120, 100%, 25%)", // Verde oscuro para botones de acción  
        grayLight: "hsl(40, 3%, 83%)", // Gris claro para fondos y detalles secundarios
        yellowLDark: "hsl(45, 100%, 50%)", // Amarillo oscuro para botones de advertencia
        mainBlack: "hsl(0, 0%, 0%)",
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(177, 26, 26, 1)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
      },
      backgroundImage : {
        imagen1: 'url(../../assets/img/galeria/carpa1.jpg)',
        imagen2: 'url(../../assets/img/galeria/carpa2.jpg)'
      }
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-patterns')],
}

