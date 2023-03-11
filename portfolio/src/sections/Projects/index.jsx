import React from "react";
import Project from "./Project";
import "./projects.css";

const Projects = () => {
  const projectsData = [
    {
      name: "hamburguerMenu",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 0,
    },
    {
      name: "MovieStar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 1,
    },
    {
      name: "Calculadora",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 2,
    },
    {
      name: "Quiz",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 3,
    },
    {
      name: "Conversor de Medida",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 4,
    },
    {
      name: "CadastroFirebase",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 5,
    },
    {
      name: "CadastroFirebase",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 5,
    },
    {
      name: "CadastroFirebase",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl.",
      pageLink: "#",
      githubLink: "#",
      id: 5,
    },
  ];

  return (
    <section id="projects" className="flex">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            pageLink={project.pageLink}
            githubLink={project.githubLink}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
