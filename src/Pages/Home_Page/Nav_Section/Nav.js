import "../Nav_Section/Nav.css"
import logo from "../../../Sources/Images/Logo.svg"
import Basket from "../../../Sources/Images/Basket.svg"
import hamburger from "../../../Sources/Images/hamburger.png"
import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles between open and closed states
  };

  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                  
      <img src={hamburger} className="hamburger" onClick={toggleMenu} />              
      <img className="little-lemon-logo" src={logo} alt="Little Lemon Logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>                    
      </ul>

      <div className="loginSide">
        <button className="longin_Button">Login</button>
        <img className="basket_icon" src={Basket} alt="Basket" />
      </div>
    </nav>
  );
  }

export default Nav;


