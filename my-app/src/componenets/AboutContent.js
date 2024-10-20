import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import pict1 from "../assets/D.jpeg";
import pict2 from "../assets/D2.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>
          Software Engineer | HappyMonk AI Labs | Bengaluru, IN | August 2022 -
          November 2023
        </h1>
        <ul>
          <li>
            Developed a responsive homepage with HTML, CSS, SCSS, Bootstrap, and
            React.js, improving load times and user engagement.
          </li>
          <li>
            Led the creation of APIs with Node.js for enhanced data flow and
            user interactivity.
          </li>
          <li>
            Implemented a Face Re-Identification model, boosting accuracy and
            reducing false positives.
          </li>
          <li>
            Executed activity detection using neural networks and YOLOv5,
            achieving high detection accuracy.
          </li>
          <li>
            Supervised interns, fostering collaboration within an Agile
            framework.
          </li>
        </ul>

        <h1>
          Associate Software Engineer | HappyMonk AI Labs | Bengaluru, IN | July
          2021 - July 2022
        </h1>
        <ul>
          <li>
            Developed a license plate detection system with YOLOv5 and OCR,
            enhancing accuracy and speed.
          </li>
          <li>
            Created a saree detection system using AI-based CNNs for improved
            classification.
          </li>
          <li>
            Used GANs for image preprocessing, enhancing clarity and resolution.
          </li>
          <li>
            Annotated and augmented datasets to improve model performance.
          </li>
        </ul>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={pict1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={pict2} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
