import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkills";
import { skillsSection } from "../../Data";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img
              alt="Bharat Working"
              src={require("../../assets/images/skillsection.jpg")}
            ></img>
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title}</h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              <h1>Research Interest</h1>
              {skillsSection.skills.map((skills) => {
                return <p className="subTitle skills-text">{skills}</p>;
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
