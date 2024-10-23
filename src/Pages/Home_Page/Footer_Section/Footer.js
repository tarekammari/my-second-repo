import "./Footer.css"
import Logo from "../../../Sources/Images/Green_logo.png"
import Location from "../../../Sources/Images/Map pin.png"
import Phone from "../../../Sources/Images/Phone call.png"
import Facebook from "../../../Sources/Images/Facebook.png"
import Instegram from "../../../Sources/Images/Logo Instagram.png"
import Email from "../../../Sources/Images/Mail.png"

export default function Footer () {
    return (
      <div className="Footer_Section">        
        <div className="Logo">          
          <img className="Logo_image" src={Logo} alt="#"/>
        </div>
        <div className="Doormat_Navigation">
          <ul className="Navigation">
            <li><a href="#title">Doormat Navigation</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>                    
          </ul>
          </div>
          <div className="Adresses_Navigation">
            <ul className="Navigation">
              <li><a href="#title">Adresses</a></li>
              <li><img src={Location} alt="" /><a href="#location">Little Kemon, CHIKAGO</a></li>
              <li><img src={Phone} alt="" /><a href="#phone">+ 00 555 555 555</a></li>            
            </ul>
          </div>
          <div className="Socials Media">
            <ul className="Navigation">
              <li><a href="#title">Socials Media</a></li>
              <li><img src={Facebook} alt="" /><a href="#Facebook">Facebook</a></li>
              <li><img src={Instegram} alt="" /><a href="#Instegram">Instegram</a></li>
              <li id="Email"><img src={Email} alt="" /><a href="#Email">Email</a></li>            
            </ul>
          </div>
        </div>
    );
  };