/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tropical Jade Palette
        jade: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Vibrant Jade
          600: '#059669', // Rich Tropical Jade
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        // Warm Sunrise Accents
        sunrise: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Golden Sunrise
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          amber: '#F59E0B',
          coral: '#FB7185',
        },
        // Deep Tropical Obsidian Dark Mode
        dark: {
          bg: '#061510',       // Deep Tropical Jade Obsidian
          surface: '#0B2019',  // Deep Forest Surface
          card: '#0E271F',     // Card Background
          cardHover: '#133329',
          border: '#164334',   // Jade Border
          borderHover: '#1F5D48',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
        'glow': '0 0 35px -5px rgba(16, 185, 129, 0.4)',
        'glow-sunrise': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(16, 185, 129, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
