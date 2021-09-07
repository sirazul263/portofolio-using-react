import React from "react";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1 className="hero-text text-center mb-3">
          Hi, I am
          <span> Md. Sirazul Islam</span>
        </h1>
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          voluptatum molestias nihil eveniet veniam ea omnis rerum asperiores
          id, odit atque sunt, doloremque aliquam maiores quas ducimus!
          Laudantium, quidem rem.
        </p>
        <div className=" d-flex align-items-center justify-content-center py-3">
          <a
            href="https://www.facebook.com/sirazul.islam.5243/"
            target="_blank"
            className="icons"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="icon mx-3 fb"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.instagram.com/sirazul.islam.263/"
            target="_blank"
            className="icons"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon mx-3 instagram"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/sirazul263/"
            target="_blank"
            className="icons"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon mx-3 linkedIn"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://github.com/sirazul263"
            target="_blank"
            className="icons"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon mx-3 github"
            ></FontAwesomeIcon>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
