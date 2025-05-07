import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../Data";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

const Greeting = () => {
  return (
    <Fade botom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="man"
              src={require("../../assets/images/greetingsection.jpg")}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
