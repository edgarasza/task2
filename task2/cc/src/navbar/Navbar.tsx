import React, { ReactNode } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const Navbar = (props: { children: ReactNode }): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>{props.children}</Toolbar>
    </AppBar>
  );
};
