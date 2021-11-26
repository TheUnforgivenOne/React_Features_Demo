import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavBarLinks } from './NavBar.styles';

const NavBar: React.FC = () => {
  return (
    <NavBarLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/modals">Modals</NavLink>
      <NavLink to="/redux">Redux</NavLink>
    </NavBarLinks>
  );
};

export default NavBar;
