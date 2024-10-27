import "../Nav_Section/Nav.css"
import logo from "../../../Sources/Images/Logo.svg"
import Basket from "../../../Sources/Images/Basket.svg"
import hamburger from "../../../Sources/Images/hamburger.png"
import React, { useState } from "react";
import {Link} from "react-scroll";

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
        <li><Link to="Main_Section" spy={true} smooth={50} duration={700} >Home</Link></li>
        <li><Link to="Menu_Section" spy={true} smooth={50} duration={700} >Menu</Link> </li>
        <li><Link to="Testimonials_Section" spy={true} smooth={50} duration={700} >Testimonials</Link></li>
        <li><Link to="About_Section" spy={true} smooth={50} duration={700} >About</Link></li>        
      </ul>

      <div className="loginSide">
        <button className="longin_Button">Login</button>
        <img className="basket_icon" src={Basket} alt="Basket" />
      </div>
    </nav>
  );
  }

export default Nav;


