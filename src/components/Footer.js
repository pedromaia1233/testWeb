import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {

  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/jenniferduarteph/"><InstagramIcon /></a>
      <a href="https://www.facebook.com/jenniferduartephotography"><FacebookIcon /></a>
      <a href="https://twitter.com/jenniferduartph"><TwitterIcon /></a>
      </div>
      <p> &copy; 2021 jenniferduarteph.com</p>
    </div>
  );
}

export default Footer;

