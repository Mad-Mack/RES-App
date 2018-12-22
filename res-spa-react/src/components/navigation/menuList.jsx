import React from "react";
import { List } from "@material-ui/core";
import MenuListItem from "./menuListItem";

const Menu = ({ menuItems }) => {
  return menuItems.map(item => (
    <List key={item.urlPath} dense>
      <MenuListItem listItem={item} />
    </List>
  ));
};

export default Menu;
