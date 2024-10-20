import "./HeroImageStyles.css";
import React from "react";
import IntroImg from "../assets/portfolioimg1.png";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>Hi, I am Agrima Jain</p>
        <h1>Software Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
          <a href={resume} download="Resume" className="btn">
            {" "}
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
