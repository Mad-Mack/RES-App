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
import { Link } from "react-router-dom";
import classNames from "classnames";
import React from "react";

const SideBar = ({ classes, open, theme, onDrawerClose }) => {
   console.log({ test: window.location.href });
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
               <h4>Test Name</h4>
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
            <ListItem button component={Link} to="/" selected={window.location.pathname === "/"}>
               <ListItemIcon>
                  <DashboardIcon />
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button key={"Companies"} component={Link} to="/companies" selected={window.location.pathname === "/companies"}>
               <ListItemIcon>
                  <BusinessIcon />
               </ListItemIcon>
               <ListItemText primary={"Companies"} />
            </ListItem>
            <ListItem button key={"Clients"} component={Link} to="/clients" selected={window.location.pathname === "/clients"}>
               <ListItemIcon>
                  <PeopleIcon />
               </ListItemIcon>
               <ListItemText primary={"Clients"} />
            </ListItem>
            <ListItem button key={"Projects"} component={Link} to="/projects" selected={window.location.pathname === "/projects"}>
               <ListItemIcon>
                  <AssessmentIcon />
               </ListItemIcon>
               <ListItemText primary={"Projects"} />
            </ListItem>
            <ListItem button key={"Units"} component={Link} to="/units" selected={window.location.pathname === "/units"}>
               <ListItemIcon>
                  <HomeIcon />
               </ListItemIcon>
               <ListItemText primary={"Units"} />
            </ListItem>
            <ListItem button key={"Documents"} component={Link} to="/documents" selected={window.location.pathname === "/documents"}>
               <ListItemIcon>
                  <FolderIcon />
               </ListItemIcon>
               <ListItemText primary={"Documents"} />
            </ListItem>
            <ListItem button key={"Proposals"} component={Link} to="/proposals" selected={window.location.pathname === "/proposals"}>
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
