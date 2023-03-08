import circleBackground from "../../img/circleBackground.svg";
import "./about.css";

const About = () => {
  //fazer um display grid 1fr 1fr
  return (
    <section id="about" className="flex">
      <h2>Sobre mim</h2>

      <div className="about-container flex">
        <div className="about-left-side flex">
          <div className="about_img">
            <img
              src={circleBackground}
              alt="background circles"
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
            <p>array com as tech</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
