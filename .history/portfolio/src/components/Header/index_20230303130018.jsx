import logo from "../../img/logo.svg";
import MobileNav from "../../components/MobileNav";
import { useState } from "react";
import "./header.css";

const header = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <header>
      <a href="#home" onClick={() => setActiveNav("#home")} className="logo">
        <img src={logo} alt="the site's logo" />
      </a>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="#home" onClick={() => setActiveNav("#about")} className="nav-a">
              Home
            </a>
          </li>
          <li className="nav-li">
            <a href="#about" onClick={() => setActiveNav("#about")} className="nav-a">
              About
            </a>
          </li>
          <li className="nav-li">
            <a href="#projects" onClick={() => setActiveNav("#projects")} className="nav-a">
              Projects
            </a>
          </li>
          <li className="nav-li">
            <a href="#contact" onClick={() => setActiveNav("#contact")} className="nav-a">
              Contact
            </a>
          </li>
          <li className="nav-li">
            <a href="/contact" className="nav-a resume">
              Currículo
            </a>
          </li>
        </ul>
      </nav>
      <MobileNav />
    </header>
  );
};

export default header;
