import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from './logo2.png'
import "./navbar.css";

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={logo} className="logo"/>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <AnchorLink href="#home">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#register">
            Register
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#footer">
            Contact Us
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;