import { Divider, Drawer, IconButton, List, ListItem, ListItemText, Button } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
      <div className="row">
        <div className="col-sm-12 ml-auto mr-auto text-center">
          <AccountCircleIcon color="primary" style={{ fontSize: "7rem" }} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 ml-auto mr-auto text-center">
          <h4>CL Bernil</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 ml-auto mr-auto text-center" style={{ marginBottom: "20px" }}>
          <Button color="primary" className={classes.button}>
            Edit Profile
          </Button>
        </div>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button key={"Companies"}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary={"Companies"} />
        </ListItem>
        <ListItem button key={"Clients"}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Clients"} />
        </ListItem>
        <ListItem button key={"Projects"}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
        <ListItem button key={"Units"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Units"} />
        </ListItem>
        <ListItem button key={"Documents"}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={"Documents"} />
        </ListItem>
        <ListItem button key={"Proposals"}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary={"Proposals"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
