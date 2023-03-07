import logo from "../../img/logo.svg";
import SocialMedia from "../SocialMedia";
import "./header.css";
import { useState } from "react";

const header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <header className="primary-header flex">
      <a href="#home" className="logo">
        <img src={logo} alt="the site's logo" />
      </a>

      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileNavActive(!mobileNavActive)}
        data-visible={!mobileNavActive}
      ></button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={!mobileNavActive}
          className="primary-navigation flex"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/contact" className="resume">
              Currículo
            </a>
          </li>
          <SocialMedia />
        </ul>
      </nav>
    </header>
  );
};

export default header;
