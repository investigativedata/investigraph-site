import { extendTheme } from "@mui/joy/styles";

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#faeae8",
          100: "#fecec0",
          200: "#feae98",
          300: "#fe8f6f",
          400: "#fe7750",
          500: "#ff6033",
          600: "#f45a2f",
          700: "#e6532a",
          800: "#d74c26",
          900: "#bd401f",
        },
      },
    },
  },
  fontFamily: {
    display: "Inter, var(--font-family-sans, var(--joy-fontFamily-fallback))",
    body: "Inter, var(--font-family-sans, var(--joy-fontFamily-fallback))",
  },
});
