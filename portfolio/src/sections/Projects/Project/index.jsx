import fileIcon from "../../../img/fileIcon.svg";
import linkIcon from "../../../img/linkIcon.svg";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import "./project.css";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-header flex">
        <img src={fileIcon} alt="File icon" className="project_file-icon" />
        <div className="project-links">
          <a href="#">
            <AiFillGithub className="github-icon" />
          </a>
          <a href="#">
            <RxExternalLink/>
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>MovieStar</h3>
        <div className="project-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambl.
        </div>
      </div>
    </div>
  );
};

export default Project;
