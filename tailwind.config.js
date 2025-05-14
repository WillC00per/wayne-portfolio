/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#ffffff',
          dark: '#0f172a',
        },
        'secondary': {
          light: '#f8fafc',
          dark: '#1e293b',
        },
        'accent': {
          light: '#60a5fa',
          dark: '#38bdf8',
        },
        'accent-light': {
          light: '#93c5fd',
          dark: '#60a5fa',
        },
        'text-primary': {
          light: '#0f172a',
          dark: '#f1f5f9',
        },
        'text-secondary': {
          light: '#334155',
          dark: '#cbd5e1',
        },
        'card-bg': {
          light: '#ffffff',
          dark: '#1e293b',
        },
        'hover-bg': {
          light: '#f1f5f9',
          dark: '#334155',
        },
        'tech-blue': {
          light: '#60a5fa',
          dark: '#38bdf8',
        },
        'neon-blue': {
          light: '#38bdf8',
          dark: '#0ea5e9',
        },
      },
      animation: {
        'flow': 'flow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      gridTemplateColumns: {
        'masonry': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      transitionTimingFunction: {
        'masonry': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
