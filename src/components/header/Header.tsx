import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

type Props = {};
const Header: React.FC<Props> = () => {
  return (
    <header>
      <AppBar>
        <Toolbar>Hi from Desktop Header</Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
