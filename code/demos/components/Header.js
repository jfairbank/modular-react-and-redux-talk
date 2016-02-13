import React from 'react';
import { IndexLink } from 'react-router';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const Header = () => (
  <header>
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">Modular React & Redux</IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown id="class-vs-function-nav" title="Class vs. Function">
          <NavItem to="/NameTagClass">NameTagClass</NavItem>
          <NavItem to="/NameTagFunction">NameTagFunction</NavItem>
        </NavDropdown>
        <NavItem to="/ContactManager">ContactManager</NavItem>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
