import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        neutral: {
          white: "#FFFFFF",
          darkBlue: "#070724",
          darkGray: "#38384F",
          gray: "#838391",
        },
        primary: {
          skyBlue: "#419EBB",
          gold: "#EDA249",
          purple: "#6F2ED6",
          brightRed: "#D14C32",
          red: "#D83A34",
          orange: "#CD5120",
          teal: "#1EC2A4",
          blue: "#2D68F0",
        },
      },
      fontFamily: {
        heading: ["Antonio", "sans-serif"],
        body: ["Spartan", "sans-serif"],
      },
      fontSize: {
        h1: ["80px", { lineHeight: "103px", letterSpacing: "0em" }],
        h2: ["40px", { lineHeight: "52px", letterSpacing: "-0.015em" }],
        h3: ["12px", { lineHeight: "25px", letterSpacing: "0.026em" }],
        h4: ["11px", { lineHeight: "25px", letterSpacing: "0.01em" }],
        body: ["14px", { lineHeight: "25px", letterSpacing: "0em" }],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
