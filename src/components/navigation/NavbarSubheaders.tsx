import ListSubheader from "@mui/material/ListSubheader";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import React from "react";

type Props = {
  lable: string;
  open: boolean;
};

const NavbarSubheaders = ({ lable, open }: Props) => {
  return (
    <ListSubheader component='div' id='nested-list-subheader'>
      {open ? lable : "DWH"}
    </ListSubheader>
  );
};

export default NavbarSubheaders;
