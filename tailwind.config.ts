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
      colors: {
        "gray-1": "#333",

        sec: "#08395E",

        error: "#DD424C",

        "secondary-300": "#839CAE",
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
        lg_up: "1025px",
        // => @media (min-width: 1024px) { ... }

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
          error: "#DD424C",
        },
      },
    ],
  },
};

export default config;
