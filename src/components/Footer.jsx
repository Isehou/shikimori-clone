import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft_main">
        SPACE CONSULTING
        <nav className="ft_nav">
          <li>500 Terry Francois Street</li>
          <li>San Francisco, CA 94158</li>
          <li>
            Mail:{" "}
            <a href="#" className="ft_mail">
              info@mysite.com
            </a>
          </li>
          <li>Tel: 123-456-7890</li>
        </nav>
      </div>
      <div className="ft_main">
        MENU
        <nav className="ft_nav">
          <li>About</li>
          <li>Project</li>
          <li>Services</li>
          <li>Tools & Tips</li>
          <li>Contact</li>
        </nav>
      </div>
      <div className="ft_main">
        SOCIALS
        <ul className="social_icons">
          <li>
            <a href="#" className="facebook"></a>
          </li>
          <li>
            <a href="#" className="twitter"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
