import "./HeroImg2Styles.css";
import IntroImg from "../assets/Designer.jpeg";
import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <img className="into-img" src={IntroImg} alt="IntroImg"></img>
          <h1 style={{ color: "white" }}>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
