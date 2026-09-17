import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./code.html",
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "void-black": "#0A0A0A",
        "surface-dim": "#141313",
        "surface-low": "#1A1A1A",
        "surface-mid": "#262626",
        "surface-high": "#404040",
        "brand-orange": "#FF4D00",
        "brand-orange-hover": "#E64500",
        "brand-magenta": "#E91E63",
        "tech-border": "#262626",
        "tech-border-bright": "#404040",
        "whatsapp": "#25D366"
      },
      fontFamily: {
        "sans": ["'Inter'", "sans-serif"],
        "display": ["'Montserrat'", "sans-serif"],
        "montserrat": ["'Montserrat'", "sans-serif"],
        "inter": ["'Inter'", "sans-serif"]
      },
      borderRadius: {
        "tech": "4px",
        "card": "8px"
      },
      letterSpacing: {
        "tighter-hero": "-0.04em",
        "tight-headline": "-0.02em"
      }
    }
  },
  plugins: [
    forms,
    containerQueries
  ]
};
