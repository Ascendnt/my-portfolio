import { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");


const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollMarginTop: {
        'margggin': '24rem',
      },
      cursor: {
        default: 'url(/cursor.png) 38 38, default',
        pointer: 'url(/cursor.png) 38 38, pointer',
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      },
      backgroundColor: {
        'custom-blue': '#38495a',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 100ms",
      },
    },
  },
  plugins: [],
});

export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {

//     },
//   },
//   plugins: [],
// };
// export default config;
