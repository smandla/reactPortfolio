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
      githubUrl: "https://github.com/smandla/wordle-clone",
      deployedUrl: "https://blissful-rosalind-a3611c.netlify.app/",
    },
    {
      projectName: "StockWatch",
      img: "./images/stockwatch.png",
      githubUrl: "https://github.com/smandla/stockwatch",
      deployedUrl: "https://smandla.github.io/stockwatch/",
    },
    {
      projectName: "Rooting For You",
      img: "./images/rootingforyou.png",
      githubUrl: "https://github.com/smandla/rootingForYou",
      deployedUrl: "https://rooting-for-youu.herokuapp.com/",
    },
    {
      projectName: "Hangman",
      img: "./images/hangman.png",
      githubUrl: "https://github.com/smandla/hangman",
      deployedUrl: "https://smandla.github.io/hangman/",
    },
    {
      projectName: "Weather Dashboard",
      img: "./images/weather1.png",
      githubUrl: "https://github.com/smandla/weather_dashboard",
      deployedUrl: "https://smandla.github.io/weather_dashboard/",
    },
    {
      projectName: "Text Editor",
      img: "./images/texteditor.png",
      githubUrl: "https://github.com/smandla/texteditor",
      deployedUrl: "https://jate-text-editor-19.herokuapp.com/",
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
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </Slider>
    </Container>
  );
};

export default Projects;
