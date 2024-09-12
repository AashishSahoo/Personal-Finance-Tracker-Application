import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000",
    },
    button: {
      main: "#3EB489",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111111",
    },
    text: {
      primary: "#fff",
    },
    button: {
      main: "#3EB489",
    },
  },
});

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
    },
  });
