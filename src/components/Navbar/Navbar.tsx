import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand container py-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg" alt="logo"/>
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/our-story" className="nav-link" aria-current="page">Our Story</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/membership" className="nav-link">Membership</NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;