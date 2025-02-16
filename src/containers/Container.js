import React from "react";

import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Contact from "./contact/Contact";
import Certifications from "./certications/Certifications";
import Experience from "./experience/Experience";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import Publications from "./publications/Publications";

export const Container = () => {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Blogs />
      <Profile />
      <Footer />
      <Top />
    </div>
  );
};
