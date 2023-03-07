import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import "./socialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-media flex">
      <ul className="social-media-container ">
        <li className="flex">
          <AiFillGithub className="social-icon" />
          <a href="https://github.com/YuriSarmanho" target="_blanck">yuriSarmanho</a>
        </li>
        <li className="flex">
          <AiFillLinkedin className="social-icon" />
          <a href="https://www.linkedin.com/in/yuri-sarmanho-monteiro-939a52182/" target="_blanck">
            yuriSarmanho
          </a>
        </li>
        {/* <li className="flex">
          <BsWhatsapp className="social-icon" />
          <a href="https://wa.me/5591991780812" target="_blanck">{"(91)99178-0812"}</a>
        </li> */}
        <li className="flex">
          <AiOutlineInstagram className="social-icon" />
          <a href="https://www.instagram.com/yuri.sarmanho/" target="_blanck">yuri.sarmanho</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
