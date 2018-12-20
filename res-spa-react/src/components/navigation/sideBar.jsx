import { Divider, Drawer, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classNames from "classnames";
import React from "react";
import menuItemService from "../../services/menuItemService";
import SummarizedUserProfile from "../common/summarizedUserProfile";
import MenuList from "./menuList";

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
         <SummarizedUserProfile imageUrl={""} name={"Test Name"} />
         <Divider />
         <MenuList menuItems={menuItemService.getAll()} />
      </Drawer>
   );
};

export default SideBar;
