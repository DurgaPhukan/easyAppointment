import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {

    // },
    colors: {
      'primary': '#307BC4',
      'primary-dark': '#FFFFFF',
      'secondary': "#274760",
      'secondary-dark': "#e9ecef",
      'black': '#030712',
      'bg-light': "#FFFFFF",
      'bg-dark': "#274760",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      backgroundImage: {
        // '':
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
