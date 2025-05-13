import React from "react";
import "./Education.css";
import Button from "../../components/button/Button";
import { socialMediaLinks, particularEducation } from "../../Data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Fade } from "react-reveal";

const Educations = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="educations">
        <h1 className="project-title">Education</h1>
        <div className="repo-cards-div-main-edu">
          {particularEducation.projects.map((v, i) => {
            return <ProjectCard repo={v} key={i} />;
          })}
        </div>
        {/* <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        /> */}
      </div>
    </Fade>
  );
};

export default Educations;
