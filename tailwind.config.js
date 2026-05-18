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
        space: {
          950: '#020409',
          900: '#060d1a',
          800: '#0a1628',
          700: '#0d1f3c',
          600: '#112850',
        },
        neon: {
          green: '#00ff9d',
          blue: '#00b4ff',
          purple: '#7c3aed',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'glow-green': 'radial-gradient(circle, rgba(0,255,157,0.15) 0%, transparent 70%)',
        'glow-blue': 'radial-gradient(circle, rgba(0,180,255,0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0,255,157,0.3), 0 0 10px rgba(0,255,157,0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0,255,157,0.6), 0 0 40px rgba(0,255,157,0.3)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
