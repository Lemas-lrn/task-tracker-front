import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export interface IMenuButtonsData {
  label: string;
  href: string;
}

type Props = {
  data: IMenuButtonsData[];
};
const MenuButtons: React.FC<Props> = ({ data }) => {
  return (
    <div>

    </div>
  );
};

export default MenuButtons;
