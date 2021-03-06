import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to="/" aria-label="Cat Facts home page">
        Cat Facts
      </Link>
    </nav>
  );
};

export default Navbar;
