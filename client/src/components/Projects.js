import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { Container } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      projectName: "Wordle",
      img: "./images/wordle.png",
      githubUrl: "www.google.com",
      deployedUrl: "www.google.com",
    },
    {
      projectName: "StockWatch",
      img: "./images/stockwatch.png",
      githubUrl: "www.google.com",
      deployedUrl: "www.google.com",
    },
    {
      projectName: "Rooting For You",
      img: "./images/rootingforyou.png",
      githubUrl: "www.google.com",
      deployedUrl: "www.google.com",
    },
    {
      projectName: "StockWatch",
      img: "./images/stockwatch1.png",
      githubUrl: "www.google.com",
      deployedUrl: "www.google.com",
    },
  ];
  return (
    <Container>
      <h2 className="project_title">Projects</h2>
      <section className="project_wrapper">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </section>
    </Container>
  );
};

export default Projects;
