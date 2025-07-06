/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["md", "lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: "#b8e6e3",
          100: "#97d9d6",
          200: "#9fe1dd",
          300: "#66ccc3",
          400: "#39bfb3",
          500: "#00beac",
          600: "#00a696",
          700: "#008c7f",
          800: "#008074",
          900: "#00665c",
          950: "#004d45",
        },
        neutral: {
          50: "#7cd5e6",
          100: "#47b7cc",
          200: "#0097b3",
          300: "#008199",
          400: "#007085",
          500: "#006072",
          600: "#004b59",
          700: "#00404d",
          800: "#00333d",
          900: "#00262e",
          950: "#00151a",
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        headings: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);" },
        },
        fadeInShadowDark: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);" },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};
