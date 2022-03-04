import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Made with <i className="fas fa-heart heart"></i>&nbsp;
        <a href="https://www.linkedin.com/in/mayank-puri-752033185/" target="__blank">
          by Mayank Puri
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/mayankk.09/" target="__blank">
          <i className="fab fa-instagram fa-2x instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/mayank-puri-752033185/" target="__blank">
          <i className="fab fa-linkedin fa-2x linkedin" ></i>
        </a>
        <a href="https://github.com/mayank0911" target="__blank">
          <i className="fab fa-github fa-2x github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
