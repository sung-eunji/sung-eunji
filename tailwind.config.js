import('tailwindcss').Config;

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        light: '#ffffff',
        dark: '#121212',
      },
      fontSize: {
        '0.5-500': ['0.5rem', { fontWeight: 500 }],
        '1-500': ['1rem', { fontWeight: 500 }],
        '1.25-300': ['1.25rem', { fontWeight: 300 }],
        '1.25-500': ['1.25rem', { fontWeight: 500 }],
        '1.5-500': ['1.5rem', { fontWeight: 500 }],
        '2-400': ['2rem', { fontWeight: 400 }],
        '2-700': ['2rem', { fontWeight: 700 }],
      },
      screens: {
        md: { max: '1024px' },
        sm: { max: '768px' },
      },
    },
  },
  plugins: [],
};
