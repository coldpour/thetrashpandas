import React from "react";
import { ThemeProvider } from "emotion-theming";

const LIGHT = "light";

export const LightTheme = {
  palette: {
    type: LIGHT,
  },
};

export const DarkTheme = {
  palette: {
    type: "dark",
  },
};

export const LightThemeProvider = (props) => (
  <ThemeProvider theme={LightTheme} {...props} />
);

export const isLight = (theme) =>
  theme && theme.palette && theme.palette.type === LIGHT;
