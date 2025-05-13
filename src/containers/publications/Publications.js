import React from "react";
import "./Publications.css";
import Button from "../../components/button/Button";
import { socialMediaLinks, particularPublication } from "../../Data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Fade } from "react-reveal";

const Publications = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <h1 className="project-title">Publications</h1>
        <div className="repo-cards-div-main-pub">
          {particularPublication.projects.map((v, i) => {
            return <ProjectCard repo={v} key={i} />;
          })}
        </div>
        <Button
          text={"More Publications"}
          className="project-button"
          href={socialMediaLinks.google_scholar}
          newTab={true}
        />
      </div>
    </Fade>
  );
};

export default Publications;
