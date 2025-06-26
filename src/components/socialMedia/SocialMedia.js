import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../Data";

export default function socialMedia() {
  return (
    <div className="social-media-div">
       {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
        >
          <i className="far fa-envelope-open"></i>
          <span></span>
        </a>
      ) : null} 

       {socialMediaLinks.google_scholar ? (
        <a
          href={socialMediaLinks.google_scholar}
          className="icon-button google_scholar"
          target="_blank"
        >
          {/* <i className="far fa-envelope-open"></i> */}
          {/* <i class="fa-brands fa-google-scholar"></i> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z"/></svg>
          <span></span> */}
        </a>
      ) : null}

      


      {socialMediaLinks.phone ? (
        <a
          href={"tel:" + socialMediaLinks.phone}
          className="icon-button phone"
          target="_blank"
        >
          <i className="fa fa-phone"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

     

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
