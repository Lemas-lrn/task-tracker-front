import React from "react";
import { AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";

type Props = {};

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rgb(43,114,117,1)",
    borderRadius: "10px",
    width: "70%",
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
