import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        'yellow': '#bef264',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
