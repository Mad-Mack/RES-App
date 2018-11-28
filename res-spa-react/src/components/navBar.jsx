import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
   state = {
      isOpen: false
   };
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
   render() {
      return (
         <div>
            <Navbar color="dark" dark expand="md">
               <NavbarBrand href="/">Real Estate</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     <NavItem>
                        <Link to="/register" className="nav-link">
                           Register
                        </Link>
                     </NavItem>
                     <NavItem>
                        <Link to="/login" className="nav-link">
                           Login
                        </Link>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}

export default NavBar;
