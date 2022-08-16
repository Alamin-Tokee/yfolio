import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../Data";
import CertificationCard from "../../components/certificationCard/CertificationCard";

const Certifications = () => {
  return (
    <Fade bottom duration={100} distance="20px">
      <div className="main" id="certications">
        <h1 className="cert-header-title">Certifications</h1>
        <div className="cert-main-div">
          <div className="cert-text-div">
            {certifications.certifications.map((cert) => {
              return <CertificationCard certificate={cert} />;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Certifications;
