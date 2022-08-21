import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h5>gma00</h5>
      <ul>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Draft">Draft</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;