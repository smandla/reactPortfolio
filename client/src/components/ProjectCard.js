import React from "react";
import "./ProjectCard.css";
const ProjectCard = (props) => {
  console.log(props.project);
  return (
    <div className="project_card">
      <img className="project_img" src={props.project.img} />
    </div>
  );
};

export default ProjectCard;
