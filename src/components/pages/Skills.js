import React from "react";

const Skills = ({ skills, progress }) => {
  return (
    <div className="Skills">
      <div className="skills-containers">
        <h5 className="skill-title">{skills}</h5>

        <div className="skill-bar d-flex align-items-center">
          <p className="skill-text">{progress}</p>
          <div className="skill-progress">
            <div className="progress">
              <div
                className="inner-progress"
                style={{ width: `${progress}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
