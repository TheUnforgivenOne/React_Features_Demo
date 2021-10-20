import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarLinks } from './NavBar.styles';

const NavBar: React.FC = () => {
  return (
    <NavBarLinks>
      <Link to="/">Home</Link>
      <Link to="/modals">Modals</Link>
      <Link to="/redux">Redux</Link>
    </NavBarLinks>
  );
};

export default NavBar;
