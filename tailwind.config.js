/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
  safelist: [
    'bg-[#090d2a]', // blue
    'bg-[#2a1b10]', // orange
    'bg-[#1d1329]', // purple
    {
      pattern:
        /text-(purple|pink|blue|orange)-(50|100|200|300|400|500|600|700)/,
      variants: ['hover'],
    },
    {
      pattern: /bg-(purple|pink|blue|orange)-(500|950)/,
      variants: ['after', 'hover'],
    },
    {
      pattern: /border-(purple|pink|blue|orange)-(100|400)/,
    },
  ],
};
