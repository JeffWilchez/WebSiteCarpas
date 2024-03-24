/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
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
    },
  },
  plugins: [],
}

