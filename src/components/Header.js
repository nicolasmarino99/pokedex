import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <NavLink to="/" exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>
      Home
    </NavLink>
    <NavLink to="/about" exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>
      About
    </NavLink>
  </div>
);

Header.propTypes = {

};

export default Header;
