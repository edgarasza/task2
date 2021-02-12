import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#70787b",
    },
    secondary: {
      main: "#add8e6",
    },
  },
});

export const Theme = (props: { children: React.ReactNode }): JSX.Element => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
