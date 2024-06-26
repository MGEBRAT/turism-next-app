import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
    },
    backgroundImage: {
       main: 'url(/assets/img/Main/main.jpg)',
    },
    extend: {
      colors: {
        accent: '#d4000d',
        headerBackground: '#FFFFFF66'
      },
    },
  },
  plugins: [],
};
export default config;
