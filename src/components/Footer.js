import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {

  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/jenniferduarteph/"><InstagramIcon /></a>
      <a href="https://www.facebook.com/jenniferduartephotography"><FacebookIcon /></a>
         <TwitterIcon/> 
         <LinkedInIcon />
      </div>
      <p> &copy; 2021 jenniferduarteph.com</p>
    </div>
  );
}

export default Footer;

