import React from "react";
import "./Experience.css";
import Button from "../../components/button/Button";
import { socialMediaLinks, workExperiences } from "../../Data";
import ExperienceCard from "../../components/experiencesCard/ExperienceCard";
import { Fade } from "react-reveal";

const Educations = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="experiences">
        <h1 className="project-title">Experiences</h1>
        <div className="repo-cards-div-main-edu">
          {workExperiences.experience.map((v, i) => {
            return <ExperienceCard repo={v} key={i} />;
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
