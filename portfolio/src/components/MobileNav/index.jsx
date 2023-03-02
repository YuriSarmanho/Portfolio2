import hamburguerMenu from "../../img/hamburguerMenu.svg"
import "./mobileNav.css"

const MobileNav = () => {
  return <div className="mobileNav">
    <a href="#" className="hamburguerMenu-a"><img src={hamburguerMenu} alt="mobile menu button" className="hamburguerMenu"/></a>
  </div>;
};

export default MobileNav;
