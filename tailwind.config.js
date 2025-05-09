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
        'tech-blue': '#64748b',
        'deep-teal': '#475569',
        'neon-blue': '#38bdf8',
        'dark-bg': '#0f172a',
        'card-bg': '#1e293b',
        'hover-bg': '#334155',
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'accent-light': '#93c5fd'
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
