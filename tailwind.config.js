/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B365D',
          orange: '#FF7F00',
          cream: '#F5F5DC',
          charcoal: '#333333',
          lightGray: '#F8F9FA',
          mediumGray: '#6C757D',
          darkGray: '#495057',
          accentOrange: '#FFF4E6',
          orangeHover: '#E06600'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'Arial Black', 'sans-serif'],
        'opensans': ['Open Sans', 'Arial', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'Georgia', 'serif']
      },
      animation: {
        'pulse-emergency': 'pulse-emergency 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite'
      },
      keyframes: {
        'pulse-emergency': {
          '0%': { boxShadow: '0 0 0 0 rgba(220, 53, 69, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(220, 53, 69, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(220, 53, 69, 0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderWidth: {
        '3': '3px'
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}