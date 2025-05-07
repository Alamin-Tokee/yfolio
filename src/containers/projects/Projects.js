import React from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { socialMediaLinks, particularProject } from "../../Data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <h1 className="project-title">Projects</h1>
        <div className="repo-cards-div-main">
          {particularProject.projects.map((v, i) => {
            return <ProjectCard repo={v} key={i} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Fade>
  );
};

export default Projects;
