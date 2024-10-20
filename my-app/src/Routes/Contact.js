import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import HeroImg2 from "../componenets/HeroImg2";
import Form from "../componenets/Form";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="CONTACT." text="Lets have a chat."></HeroImg2>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
