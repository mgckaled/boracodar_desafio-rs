import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['--font-lato'],
        display: ['--font-crimson-pro'],
      },
      colors: {
        background: '#d9cdf7',
        textColor: '#271a45',
      },
    },
  },
  plugins: [],
}
export default config



