import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, NavbarToggler } from "reactstrap";
import Logo from "../common/logo";

class NavBar extends Component {
  state = {
    toggle: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        id="app-navbar"
      >
        <div className="container">
          <NavLink class="navbar-brand" to="/">
            <Logo />
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </Nav>
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default NavBar;
