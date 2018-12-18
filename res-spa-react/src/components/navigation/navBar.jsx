import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Logo from "../common/logo";

const NavBar = ({ classNames, open, user, onDrawerOpen }) => {
  return (
    <AppBar position="fixed" className={classNames.appBar}>
      <Toolbar disableGutters={!open}>
        {user ? (
          <IconButton color="inherit" aria-label="Open drawer" onClick={onDrawerOpen} className={classNames.iconButton}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <div className={!user && "container"}>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/" className="navbar-brand" style={{ color: "#fff" }}>
              <Logo />
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
