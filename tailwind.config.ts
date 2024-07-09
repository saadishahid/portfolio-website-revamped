import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

// Custom function to flatten the color palette
const flattenColorPalette = (obj: any, parentKey = '', res: any = {}) => {
  for (let key in obj) {
    const propName = parentKey ? `${parentKey}-${key}` : key;
    if (typeof obj[key] == 'object') {
      flattenColorPalette(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Added this line to include your src directory
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FFFFFF',   // tea-green
        secondary: '#F9F9F9', // light-green
        dark: '#1D1D1F',      // verdigris
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

export default config;
