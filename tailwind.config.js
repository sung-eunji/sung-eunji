import('tailwindcss').Config;

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      invert: {
        50: '50%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px' },
          '100%': { opacity: 1, transform: 'translateY(0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        light: '#ffffff',
        dark: '#121212',
      },
      fontSize: {
        '0.3-500': ['0.5rem', { fontWeight: 500 }],
        '0.5-500': ['0.5rem', { fontWeight: 500 }],
        '0.7-300': ['0.7rem', { fontWeight: 300 }],
        '0.8-300': ['0.8rem', { fontWeight: 300 }],
        '0.8-400': ['0.8rem', { fontWeight: 400 }],
        '0.9-300': ['0.9rem', { fontWeight: 300 }],
        '0.9-500': ['0.9rem', { fontWeight: 500 }],
        '1-300': ['1rem', { fontWeight: 300 }],
        '1-500': ['1rem', { fontWeight: 500 }],
        '1.1-300': ['1.1rem', { fontWeight: 300 }],
        '1.1-700': ['1.1rem', { fontWeight: 700 }],
        '1.25-300': ['1.25rem', { fontWeight: 300 }],
        '1.25-500': ['1.25rem', { fontWeight: 500 }],
        '1.5-500': ['1.5rem', { fontWeight: 500 }],
        '1.5-700': ['1.5rem', { fontWeight: 700 }],
        '1.6-500': ['1.6rem', { fontWeight: 500 }],
        '1.7-500': ['1.7rem', { fontWeight: 500 }],
        '1.7-700': ['1.7rem', { fontWeight: 700 }],
        '2-400': ['2rem', { fontWeight: 400 }],
        '2-700': ['2rem', { fontWeight: 700 }],
      },
      screens: {
        lg: { min: '1025px' },
        md: { max: '1024px' },
        sm: { max: '768px' },
      },
    },
  },
  plugins: [],
};
