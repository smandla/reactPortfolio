import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { Container } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      projectName: "StockWatch",
      img: "./images/stockwatch1.png",
      githubUrl: "www.google.com",
      deployedUrl: "www.google.com",
    },
    {
      projectName: "StockWatch",
      img: "./images/stockwatch1.png",
      githubUrl: "www.google.com",
      deployedUrl: "www.google.com",
    },
    {
      projectName: "StockWatch",
      img: "./images/stockwatch1.png",
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
