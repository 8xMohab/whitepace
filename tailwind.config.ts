import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '15px 10px 50px 0 rgba(0, 0, 0, 0.1)',
      },
      screens: {
        sm: '320px',

        md: '768px',

        lg: '1152px',

        xl: '1440px',

        '2xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1.25rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '13.75rem',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primaryA: '#043873',
        primaryB: '#4F9CF9',
        secondaryA: '#FFE492',
        secondaryB: '#A7CEFC',
        white: '#FFF',
        black: '#212529',
        'border-custom-color': '#2E4E73',
      },
    },
  },
  plugins: [],
}
export default config
