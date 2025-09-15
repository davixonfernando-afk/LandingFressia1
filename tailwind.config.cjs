/** @type {import('tailwindcss').Config} */
module.exports = {
  // Activa clases dark si algún día las necesitas (aunque ya usamos oscuro por defecto)
  darkMode: 'class',

  // Dile a Tailwind dónde escanear clases
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html',
  ],

  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', md: '1.5rem' },
    },
    extend: {
      colors: {
        // Paleta Fressia
        fressia: {
          bg:    '#0c0c0f', // fondo principal
          panel: '#111117', // paneles/cards
          edge:  '#23232c', // bordes sutiles
          text:  '#efeff4', // texto principal
          muted: '#a8a8b3', // texto secundario
          gold:  '#d4af37', // dorado
          gold2: '#a88928', // dorado oscuro (hover/degradados)
        },
      },
      boxShadow: {
        brand: '0 20px 60px rgba(0,0,0,.55)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },

  plugins: [],
}
