import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h5>gma00's Collection</h5>
      <ul>
        <li><Link to="/funtools/About">About</Link></li>
        <li><Link to="/funtools/Draft">Draft</Link></li>
     	</ul>
    </nav>
  );
};

export default NavBar;