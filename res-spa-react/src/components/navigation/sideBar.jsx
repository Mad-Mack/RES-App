import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classNames from "classnames";
import React from "react";

const SideBar = ({ classes, open, theme, onDrawerClose }) => {
  return (
    <Drawer
      variant="temporary"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key={"Clients"}>
          <ListItemText primary={"Clients"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Company 1", "Company 2"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
