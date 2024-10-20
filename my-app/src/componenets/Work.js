import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";
import pro1 from "../assets/Pic1.jpeg";
import pro2 from "../assets/Pic2.jpeg";
import pro3 from "../assets/Pic3.jpeg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgscr}
              title={val.title}
              text={val.text}
              view={val.view}
            ></WorkCard>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
