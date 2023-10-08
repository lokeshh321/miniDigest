import './Nav.css'; // Import the CSS file

import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar flex-nowrap">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          Summarize
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
}
