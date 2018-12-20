import React from "react";
import { ListItemIcon, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const MenuListItem = ({ listItem }) => {
   const { label, urlPath, icon: Icon } = listItem;
   return (
      <ListItem button key={label} component={Link} to={urlPath} selected={window.location.pathname === urlPath}>
         <ListItemIcon>
            <Icon />
         </ListItemIcon>
         <ListItemText primary={listItem.label} />
      </ListItem>
   );
};

export default MenuListItem;
