import('tailwindcss').Config;

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        '1-900': ['1rem', { fontWeight: 500 }],
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
