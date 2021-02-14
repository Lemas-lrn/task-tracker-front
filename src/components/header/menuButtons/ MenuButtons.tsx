import React from 'react'
import { Button } from '@material-ui/core'
import { Link as RouterLink } from "react-router-dom";

interface IData  {
    
    label: string,
    href: string
}

type Props = {
    data: Array<IData> ,
}
const MenuButtons: React.FC<Props> = ({data}) => {
        return data.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
}

export default MenuButtons