import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sinusoidal-waves-mobile":
          "url('/illustrations/sinusoidal-waves-mobile.svg')",
        "sinusoidal-waves-tablet":
          "url('/illustrations/sinusoidal-waves-tablet.svg')",
        "sinusoidal-waves-large":
          "url('/illustrations/sinusoidal-waves-large.svg')",
        "sinusoidal-waves-xl": "url('/illustrations/sinusoidal-waves-xl.svg')",
        "sinusoidal-waves-2xl":
          "url('/illustrations/sinusoidal-waves-2xl.svg')",
        "ripple-waves-small": "url('/illustrations/ripple-waves-small.svg')",
        "ripple-waves-medium": "url('/illustrations/ripple-waves-medium.svg')",
        "ripple-waves-large": "url('/illustrations/ripple-waves-large.svg')",
        "ripple-waves-xl": "url('/illustrations/ripple-waves-xl.svg')",
        "title-marker-one": "url('/illustrations/title-marker-one.svg')",
        "title-marker-one-medium":
          "url('/illustrations/title-marker-one-medium.svg')",
        "title-marker-one-xl":
          "url('/illustrations/title-marker-one-xl.svg')",
        "title-marker-two": "url('/illustrations/title-marker-two.svg')",
        "title-marker-two-large":
          "url('/illustrations/title-marker-two-large.svg')",
        "title-marker-two-xl":
          "url('/illustrations/title-marker-two-xl.svg')",
      },
      screens: {
        sm: "320px",

        md: "768px",

        lg: "1152px",

        xl: "1440px",

        "2xl": "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1.25rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "13.75rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        primaryA: "#043873",
        primaryB: "#4F9CF9",
        secondaryA: "#FFE492",
        secondaryB: "#A7CEFC",
        white: "#FFF",
        black: "#212529",
      },
    },
  },
  plugins: [],
};
export default config;
