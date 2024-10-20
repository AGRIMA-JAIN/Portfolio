import "./FooterStyles.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4 style={{ color: "white", marginRight: "2rem" }}>
              <FaHome
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              98 Forest Hill Boston, MA-02130
            </h4>
          </div>
          <div className="phone">
            <h4 style={{ color: "white" }}>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +1(857)340-3093
            </h4>
          </div>
          <div className="email">
            <h4 style={{ color: "white" }}>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              jain.ag@northeastern.edu
            </h4>
          </div>
        </div>
        {/* </div> */}
        <div className="right">
          <h4 style={{ color: "white" }}>About</h4>
          <p>This is Agrima Jain, Software Developer/Data Scientist</p>
          <div className="social">
            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
