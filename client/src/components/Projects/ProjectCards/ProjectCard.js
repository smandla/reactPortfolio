import React from "react";
import { Col } from "react-bootstrap";
import "./ProjectCard.css";
const ProjectCard = (props) => {
  return (
    <Col className="card_center">
      <div className="card_image">
        <img
          src={props.project.img}
          alt={props.project.projectName}
          className="img"
        />
        <div className="card_body">
          <h4>{props.project.projectName}</h4>
          <span>
            <a href={props.project.deployedUrl} class="button">
              Go To Project
            </a>
            <a href={props.project.githubUrl} class="button">
              Go To Source Code
            </a>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
