import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <Link className="menuItem" to="https://prince-portfolio.vercel.app/">
            About
          </Link>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Introducing "Streamify" - the ultimate streaming web app that brings
          entertainment at your fingertips! Explore a vast library of movies, TV
          shows, and music, and enjoy seamless streaming with HD quality.
          Discover your favorite content and indulge in endless hours of
          entertainment, all in one convenient platform.
        </div>
        <div className="socialIcons">
          <Link
            to="https://www.facebook.com/paras.grover.7758"
            className="icon"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.instagram.com/prince_grover01/"
            className="icon"
          >
            <FaInstagram />
          </Link>
          <Link to="https://twitter.com/ParasGrove01" className="icon">
            <FaTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/in/paras-grover-949233204/"
            className="icon"
          >
            <FaLinkedin />
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
