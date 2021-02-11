import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";
import { NAV_BAR_COUNTRY_OPTIONS } from "../constants/navbarDropdownOptions";
export default class NavBar extends Component {
  renderNavLinksDropdown() {
    let dropdownOptions = NAV_BAR_COUNTRY_OPTIONS.map((option) => (
      <NavDropdown.Item href={option.link}>{option.title}</NavDropdown.Item>
    ));
    return dropdownOptions;
  }

  render() {
    return (
      <Navbar fill="true" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          My AB Testing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Country" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
              {this.renderNavLinksDropdown()}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
