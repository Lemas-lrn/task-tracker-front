import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

type Props = {};

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#2b7275",
    borderRadius: "5%",
    width: "1440px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));

const Header: React.FC<Props> = () => {
  const { header, logo } = useStyles();

  return (
    <header>
      <AppBar position='relative' className={header}>
        <Toolbar>
          <Typography variant="h6" component="h1" className={logo}>
            Task tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
