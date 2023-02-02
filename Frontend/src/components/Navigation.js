import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../create">Create Listing</Link>
        <Link to="../MyProfile">User Profile</Link>
    </nav>
  );
}

export default Navigation;
