import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import aff from "../../img/afflogo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/' className="logo">
        <img src={aff} alt="Logo" className="logo-image" />
      </Link>
    </div>
  );
};

export default Navbar;
