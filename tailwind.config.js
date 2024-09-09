/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grandis: ["Grandis", "sans-serif"],
      },
      colors: {
        primary: "#027FFF",
        customGreen: "#0F973D",
        customRed: "#D42620",
        customYellow: "#3599FF",
        "schoolpadi-blue-primary": "#027FFF",
        "schoolpadi-grey-primary": "#54585C",
        "schoolpadi-text-grey-lighter": "#C8D2DC",
        "schoolpadi-text-gray-dark": "#6E7479",
        "blue-neutral": "#3599FF",
        "schoolpadi-grey-secondary": "#8E959C",
        warnign: "#F3A218",
        grayout: "#E6EAEF",
      },
      backgroundColor: {
        "schoolpadi-blue-secondary": "#001D3B",
        "schoolpadi-blue-transparent": "#01356B",
        "schoolpadi-blue-primary": "#027FFF",
        "schoolpadi-blue-lighter": "#E6F2FF",
        "warning-text-match": "#FEF6E7",
        "blue-neutral": "#3599FF",
        "schoolpadi-grey-50": "#FAFBFC",
        "schoolpadi-grey-100": "#F2F5F7",
        "schoolpadi-nav": "#014F9E",
        "schoolpadi-grey-badge": "#EEF1F4",
      },
      borderColor: {
        "schoolpadi-blue-border": "#0274E8",
        "blue-lighter": "#DAE1E8",
      },
      fontSize: {
        small: "12px",
      },
      borderRadius: {
        small: "12px",
      },
    },
  },
  plugins: [],
};
