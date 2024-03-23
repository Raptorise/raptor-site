import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#7AB122',
          2: '#96db2a',
        },
        secondary: '#FFFFFF',
        tertiary: '#000000',
        primaryGradient: '#000000',
        secondaryGradient: '#0B1404',
        tertiaryGradient: '#2E490C',
      },
    },
  },
  plugins: [],
};
export default config;
