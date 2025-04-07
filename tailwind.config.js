/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "0px 4px 20px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        orange: {
          0: "#A04107",
          50: "#C24F09",
          100: "#EA600B",
          200: "#EE7B35",
          300: "#F19258",
          400: "#F5B48D",
          500: "#FAD1B8",
          600: "#FAE7DA",
        },
        lime: {
          0: "#889200",
          50: "#A5B100",
          100: "#C8D600",
          200: "#D2DD2C",
          300: "#DAE350",
          400: "#E6EC87",
          500: "#F1F4BB",
          600: "#F5F7D0",
        },
        cyan: {
          0: "#185FAF",
          50: "#1D72D4",
          100: "#1091E6",
          200: "#53B3F2",
          300: "#95D0F7",
          400: "#C4E5FA",
          500: "#D2EBFA",
          600: "#ECF8FE",
        },
        neutral: {
          0: "#111111",
          50: "#3B3B3B",
          100: "#909090",
          200: "#CBCBCB",
          300: "#E7E7E7",
          400: "#F2F2F2",
          500: "#FCFCFC",
          600: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
