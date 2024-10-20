import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import HeroImg2 from "../componenets/HeroImg2";
import Work from "../componenets/Work";

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2
        heading="PROJECTS."
        text="Some of my most recent works"
      ></HeroImg2>
      <Work style={{ color: "white" }}></Work>
      <Footer></Footer>
    </div>
  );
};

export default Project;
