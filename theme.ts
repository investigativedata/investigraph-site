import { extendTheme } from "@mui/joy/styles";

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#fce4e9",
          100: "#f8bbc7",
          200: "#f38fa3",
          300: "#ed6480",
          400: "#e64766",
          500: "#e0304e",
          600: "#d02b4c",
          700: "#bb2649",
          800: "#a72046",
          900: "#831740",
        },
      },
    },
  },
  fontFamily: {
    display: "Quicksand, var(--joy-fontFamily-fallback)",
    body: "Quicksand, var(--joy-fontFamily-fallback)",
  },
});
