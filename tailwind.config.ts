import type { Config } from "tailwindcss";

const config: Config = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      data: {
        active: 'active="true"',
      },

      colors: {
        "gray-1": "#333",
        "gray-2": "#737373",
        "gray-3": "#979797",
        "gray-4": "#AAAAAA",

        "black-1": "#111",
        "black-3": "#363636",

        sec: "#08395E",

        error: "#DD424C",

        primary: "#DD424C",

        "secondary-300": "#839CAE",
        "secondary-100": "#E6EBEE",
        "secondary-400": "#52748E",
        "secondary-600": "#08395E",
      },
      screens: {
        // Max Breakpoints
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "800px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "360px" },
        // => @media (max-width: 360px) { ... }

        // Min Breakpoints
        xl_up: "1280px",
        // => @media (min-width: 1280px) { ... }

        lg_up: "1025px",
        // => @media (min-width: 1025px) { ... }

        md_up: "801px",
        // => @media (min-width: 1024px) { ... }
      },
      fontFamily: {
        title: ["var(--font-oswald)"],
        text: ["var(--font-lato)"],
        inter: ["var(--font-inter)"],
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        sunset: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#DD424C",
          // base: "#DD424C",
          error: "#DD424C",
        },
      },
    ],
  },
};

export default config;
