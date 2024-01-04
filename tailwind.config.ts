import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typograpy from "@tailwindcss/typography";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/enums/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        "noto-sans": "noto-sans-kr",
        Dongle: "Dongle",
        NanumGothic: "Nanum Gothic",
      },

      screens: {
        ...defaultTheme.screens,
        c_phone: { min: "300px", max: "430px" }, //xs
        c_tablet: { min: "760px", max: "900px" },
        c_mobile: { min: "100px", max: "930px" }, //mobile(phone + table)

        c_pc: { min: "901px" },
        c_m_pc: { min: "901px", max: "1500px" },
        c_l_pc: { min: "1501px", max: "2200px" }, //c_l_pc: {min: "1501px"},
        c_xl_pc: { min: "2201px" },
      },
    },
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    prefix: "",
    darkTheme: "night",
    themeRoot: ":root",
  },
  plugins: [typograpy, daisyui],
  // plugins: [require("daisyui")],
};

export default config;
