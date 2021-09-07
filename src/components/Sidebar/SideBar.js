import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import profile from "../../media/profile.jpg";
const SideBar = () => {
  return (
    <div className="bar ">
      <Nav className="nav d-flex flex-column justify-content-between align-items-center">
        <div className="profile mt-5 pb-3">
          <img src={profile} alt="" />
        </div>
        <ul className="nav-items list-unstyled">
          <li className="nav-item ">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/achievements" exact activeClassName="active">
              Achievements
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer pt-3">
          <p className="text-white text-center"> @ {new Date().toDateString}</p>
        </footer>
      </Nav>
    </div>
  );
};

export default SideBar;
