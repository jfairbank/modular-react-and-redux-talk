import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NavItem;
