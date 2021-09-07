import React from "react";
import Experiences from "../pages/Experiences";
import ImageSection from "../pages/ImageSection";
import Skills from "../pages/Skills";
import Title from "../Title/Title";
import service from "../../media/service.png";
const About = () => {
  const experience = [
    {
      id: 1,
      title: "React Developer",
      org: " at eDakpeon (E-commerce)",
      details: "Working as an React developer ",
      duration: "August-2021 to Present",
      image: service,
    },
    {
      id: 2,
      title: "Internship ",
      org: " at PeopleNTech Ltd.",
      details: "Learned basic web technologies",
      duration: "September-2021 to October-2021",
      image: service,
    },
  ];
  return (
    <div className="About">
      <Title title={"About Me"} span={"About me"}></Title>
      <ImageSection></ImageSection>
      <Title title={"experiences"} span={"experiences"}></Title>
      <div className="experience-container mb-5 d-flex justify-content-between">
        {experience.map((exp) => (
          <Experiences experience={exp} key={exp.id}></Experiences>
        ))}
      </div>

      <Title title={"my skills"} span={"my skills"}></Title>

      <div className="skills-container mt-5">
        <div className="skills-section mb-5">
          <h5>Frontend</h5>
          <div className="skills mt-3">
            <Skills skills={"HTML-5"} progress={"80%"}></Skills>
            <Skills skills={"CSS-3"} progress={"75%"}></Skills>
            <Skills skills={"BootStrap-5"} progress={"70%"}></Skills>
            <Skills skills={"Material-UI"} progress={"50%"}></Skills>
            <Skills skills={"JavaScript"} progress={"70%"}></Skills>
            <Skills skills={"React.js"} progress={"80%"}></Skills>
            <Skills skills={"Next.js"} progress={"40%"}></Skills>
          </div>
        </div>
        <div className="skills-section mb-5">
          <h5>Backend</h5>
          <div className="skills mt-3">
            <Skills skills={"Node.js"} progress={"70%"}></Skills>
            <Skills skills={"Express.js"} progress={"65%"}></Skills>
            <Skills skills={"PHP"} progress={"60%"}></Skills>
          </div>
        </div>
        <div className="skills-section mb-5">
          <h5>Database</h5>
          <div className="skills mt-3">
            <Skills skills={"MongoDb"} progress={"70%"}></Skills>
            <Skills skills={"MySQL"} progress={"60%"}></Skills>
          </div>
        </div>
        <div className="skills-section mb-5">
          <h5>Programming Languages</h5>
          <div className="skills mt-3">
            <Skills skills={"C"} progress={"80%"}></Skills>
            <Skills skills={"C++"} progress={"70%"}></Skills>
            <Skills skills={"Java"} progress={"70%"}></Skills>
            <Skills skills={"Python"} progress={"50%"}></Skills>
          </div>
        </div>
        <div className="skills-section mb-5">
          <h5>Developing Tools</h5>
          <div className="skills mt-3">
            <Skills skills={"Git"} progress={"80%"}></Skills>
            <Skills skills={"VsCode"} progress={"70%"}></Skills>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
