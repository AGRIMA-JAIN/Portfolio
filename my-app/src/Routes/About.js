import React from "react"; //rafce short form
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import HeroImg2 from "../componenets/HeroImg2";
import AboutContent from "../componenets/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2
        heading="ABOUT."
        text="I am a master’s student in Information Systems at Northeastern University with expertise in full-stack development and AI. I have experience building scalable web applications using MERN stack, and have led projects involving computer vision and neural networks. My passion lies in creating innovative solutions that enhance user experiences and drive value."
      ></HeroImg2>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  );
};

export default About;
