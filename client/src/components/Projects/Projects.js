import React from "react";
import ProjectCard from "./ProjectCards/ProjectCard";
import "./Projects.css";
import { Container, Row, Tab } from "react-bootstrap";
import Slider from "react-slick";
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container className="project_card">
      <h2 className="project_title">Projects</h2>
      <Slider {...settings}>
        {/* <section className="project_wrapper"> */}
        {/* <div> */}
        {projects.map((project) => {
          return (
            // <div>
            <ProjectCard project={project} />
            // </div>
          );
        })}
        {/* </section> */}
      </Slider>
    </Container>
  );
};

export default Projects;
