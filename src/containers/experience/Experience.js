import React from "react";
import "./Experience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../Data";
import { Fade } from "react-reveal";

const Experience = () => {
  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card) => {
                  return (
                    <ExperienceCard
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        color: card.color,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
};

export default Experience;
