import React from "react";
import List from "@mui/material/List";
import NavbarSubheaders from "./NavbarSubheaders";
import { Routes } from "./routes";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface NavItemProps {
  route: Routes;
  open: boolean;
}

const NavbarItems = ({ route, open }: NavItemProps) => {
  return (
    <List
      subheader={<NavbarSubheaders lable={route.routeHeader} open={open} />}
    >
      {route.nestedRoutes.map((nestedRoute) => {
        return (
          <ListItem
            key={nestedRoute.key}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {nestedRoute.icon}
              </ListItemIcon>
              <ListItemText
                primary={nestedRoute.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavbarItems;
