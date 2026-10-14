import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          petrol: '#023140', // Official Logo Primary
          'petrol-light': '#0D5C75',
          'petrol-dark': '#011F28',
          'petrol-accent': '#22A6BF',
          'canvas-dark': '#02161E',
          surface: '#042330',
          'surface-elevated': '#072C3B',
          white: '#FFFFFF',
          muted: '#8CA6B0',
          border: '#0B3A4C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
