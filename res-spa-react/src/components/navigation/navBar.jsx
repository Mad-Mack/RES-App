import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/logo";

const NavBar = ({ classNames, open, user, onDrawerOpen, logOut }) => {
  return (
    <AppBar position="fixed" className={classNames.appBar}>
      <Toolbar disableGutters={!open}>
        {user ? (
          <IconButton color="inherit" aria-label="Open drawer" onClick={onDrawerOpen} className={classNames.iconButton}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography variant="h6" color="inherit" noWrap>
          {user && !open ? (
            <Link to="/" className="navbar-brand" style={{ color: "#fff", marginRight: "80px" }}>
              <Logo />
            </Link>
          ) : (
            <div className="ml-4">
              <Link to="/" className="navbar-brand" style={{ color: "#fff" }}>
                <Logo />
              </Link>
            </div>
          )}
        </Typography>
        <div className="col-md-5 ml-auto text-right">
          {!user ? (
            <React.Fragment>
              <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none", color: "#fff" }}>
                <Button color="inherit">Register</Button>
              </Link>
            </React.Fragment>
          ) : (
            <Button color="inherit" onClick={logOut}>
              Logout
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
