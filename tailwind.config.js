/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          100: "rgba(255, 255, 255, 0.25)",
          200: "rgba(0, 0, 0, 0.9)",
          300: "rgba(255, 255, 255, 0.4)",
        },
        "hayya-flat-corn-normal": "#d5cc65",
        "hayya-solid-color-charcoal": "#222",
        "hayya-ui-02-white": "#fff",
      },
      fontFamily: {
        "european-bodyheavy-european": "Satoshi",
        "reckless-neue": "'Reckless Neue'",
        "helvetica-neue": "'Helvetica Neue'",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "21xl": "40px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
