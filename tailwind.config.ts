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
      'primary': '#b7e4c7',
      'primary-dark': '#40916c',
      'secondary': "#74c69d",
      'secondary-dark': "#b7e4c7",
      'bg': "f8f9fa",
      "bg-dark": '#1b4332',
      'custom-white': '#e9ecef',
      'black': '#030712'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
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
