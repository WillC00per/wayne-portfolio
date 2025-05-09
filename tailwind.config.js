/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e293b',    // Slate 800 - Main background
        'secondary': '#334155',  // Slate 700 - Secondary background
        'accent': '#60a5fa',     // Blue 400 - Primary accent
        'accent-light': '#93c5fd', // Blue 300 - Light accent
        'text-primary': '#f1f5f9', // Slate 100 - Primary text
        'text-secondary': '#cbd5e1', // Slate 300 - Secondary text
        'dark-bg': '#0f172a',    // Slate 900 - Darker background
        'card-bg': '#1e293b',    // Slate 800 - Card background
        'hover-bg': '#475569',   // Slate 600 - Hover state
        'border-color': '#475569', // Slate 600 - Borders
        'tech-blue': '#60a5fa',   // Blue 400 - Tech stack
        'deep-teal': '#0f766e',  // Teal 800 - Deep accent
        'neon-blue': '#38bdf8',  // Sky 400 - Highlights
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
