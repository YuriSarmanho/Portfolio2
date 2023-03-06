import hamburguerMenu from "../../img/hamburguerMenu.svg";
import "./mobileNav.css";

const MobileNav = () => {
  return (
    <div className="mobileNav-container">
      <a href="#" className="hamburguerMenu-a">
        <img
          src={hamburguerMenu}
          alt="mobile menu button"
          className="hamburguerMenu"
        />
      </a>
      <div className="mobileNav">
        <div className="close-btn">
          <button>X</button>
        </div>
        <div className="mobileNav-sections"></div>
        <div className="mobile-social"></div>
      </div>
    </div>
  );
};

export default MobileNav;
