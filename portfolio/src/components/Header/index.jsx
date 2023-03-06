import logo from "../../img/logo.svg";
import MobileNav from "../../components/MobileNav";
import "./header.css";

const header = () => {
  return (
    <header className="primary-header flex">
      <a href="#home" className="logo">
        <img src={logo} alt="the site's logo" />
      </a>
      <nav>
        <ul id="primary-navigation" className="primary-navigation flex">
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
        </ul>
      </nav>
      {/* <MobileNav /> */}
    </header>
  );
};

export default header;
