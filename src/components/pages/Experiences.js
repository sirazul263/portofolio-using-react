import React from "react";

const Experiences = ({ experience }) => {
  return (
    <div className="Experiences">
      <div className="service mt-5">
        <div className="service-content">
          <img src={experience.image} alt="" />
          <h6 className="e-title">{experience.title}</h6>
          <h5>{experience.org}</h5>
          <p className="e-text">{experience.details}</p>
          <small
            className="text-center"
            style={{ fontStyle: "italic", textAlign: "center" }}
          >
            {experience.duration}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
