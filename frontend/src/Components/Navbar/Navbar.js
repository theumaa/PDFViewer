import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="topnav">
      <Link to="/mainhome">
        <a class="active">
          Home
        </a>
      </Link>
      <Link to="/addusers"><a>Add Users</a></Link>
      <Link to="/userdetails"><a>User Details</a></Link>
    </div>
  );
}

export default Navbar;
