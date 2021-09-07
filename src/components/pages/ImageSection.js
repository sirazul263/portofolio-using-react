import React from "react";
import img from "../../media/profile.jpg";
import { Button } from "react-bootstrap";
const ImageSection = () => {
  return (
    <div className="imageSection d-flex mt-5">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span> Md. Sirazul Islam</span>
        </h4>
        <p className="about-text">
          A fresh University graduate and a professional front-end developer.
          Looking for a full time job.
        </p>
        <div className="about-details d-flex justify-content-between">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Present Address</p>
            <p>Permanent Address</p>
          </div>
          <div className="right-section">
            <p>
              {" "}
              <span className="me-2" style={{ color: "white" }}>
                :
              </span>{" "}
              Md. Sirazul Islam
            </p>
            <p>
              {" "}
              <span className="me-2" style={{ color: "white" }}>
                :
              </span>{" "}
              25
            </p>
            <p>
              {" "}
              <span className="me-2" style={{ color: "white" }}>
                :
              </span>{" "}
              Bangladeshi
            </p>
            <p>
              {" "}
              <span className="me-2" style={{ color: "white" }}>
                :
              </span>{" "}
              Bangla, Hindi, English
            </p>
            <p>
              {" "}
              <span className="me-2" style={{ color: "white" }}>
                :
              </span>{" "}
              Jigatola, Dhaka, Bangladesh
            </p>
            <p>
              {" "}
              <span className="me-2" style={{ color: "white" }}>
                :
              </span>{" "}
              Panchuria, Rajbari, Dhaka
            </p>
          </div>
        </div>
        <Button className="btn btn-primary download mt-1">DOWNLOAD CV</Button>
      </div>
    </div>
  );
};

export default ImageSection;
