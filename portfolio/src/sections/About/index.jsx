import circleBackground from "../../img/circleBackground.svg";
import mobileCircleBackground from "../../img/circleBackgroundMobile.svg";
import seta from "../../img/seta.svg";
import "./about.css";

const About = () => {
  const mySkils = {
    techs: ["Js", "HTML", "CSS", "SASS", "PHP","Figma"],
  };

  return (
    <section id="about" className="flex">
      <h2>Sobre mim</h2>
      <div className="about-container flex">
        <div className="about-left-side flex">
          <div className="about_img_desktop">
            <img
              src={circleBackground}
              alt="background circles"
              className="background-circles"
            />
          </div>
          <div className="about_img_mobile">
            <img
              src={mobileCircleBackground}
              alt="background mobile circles"
              className="background-circles"
            />
          </div>
        </div>

        <div className="about-right-side flex">
          <div className="myDescription">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and
            </p>
          </div>

          <div className="workingTech">
            <p>Algumas tecnologias com que eu venho trabalhando:</p>
            <br />
            <div className="skills-container">
              {mySkils.techs.map((tech) => (
                <div className="skill flex">
                  <img src={seta} /> <p>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
