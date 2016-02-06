import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">Modular React & Redux</IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown id="class-vs-function-nav" title="Class vs. Function">
          <li>
            <Link to="/NameTagClass">NameTagClass</Link>
          </li>
          <li>
            <Link to="/NameTagFunction">NameTagFunction</Link>
          </li>
        </NavDropdown>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
