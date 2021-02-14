import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

export interface IMenuButtonsData {
  label: string;
  href: string;
}

type Props = {
  data: IMenuButtonsData[];
};

const MenuButtons: React.FC<Props> = ({ data }) => {
  const useStyles = makeStyles(() => ({
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
  }));
  const { menuButton } = useStyles();
  return (
    <div>
      {data.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};

export default MenuButtons;
