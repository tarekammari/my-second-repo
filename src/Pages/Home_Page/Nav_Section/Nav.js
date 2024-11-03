import "../Nav_Section/Nav.css"
import logo from "../../../Sources/Images/Logo.svg"
import Basket from "../../../Sources/Images/Basket.svg"
import hamburger from "../../../Sources/Images/hamburger.png"
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down, hide navbar
        setShowNav(false);
      } else {
        // Scroll up, show navbar
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles between open and closed states
  };

  
  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""} ${showNav ? "show" : "hide"}`}>
      <img className="hamburger" src={hamburger}  onClick={toggleMenu} alt="" />
      
      <Link className="logo_link" to="/">
        <img className="little-lemon-logo" src={logo} alt="Little Lemon Logo" />
      </Link>
      <div class="icon-bar">
        <Link to="/">Home</Link>
        {props.show ? <a href="#Menu_Section" >Menu</a> : <a></a>}  
        {props.show ? <a href="#Testimonials_Section" >Testimonials</a> : <a></a>}  
        {props.show ? <a href="#About_Section" >About</a> : <a></a>}
      </div>

      <div className="loginSide">
        <button className="longin_Button">Login</button>
        <img className="basket_icon" src={Basket} alt="Basket" />
      </div>
    </nav>
  );
  }

export default Nav;


