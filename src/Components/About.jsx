import React from "react";
import styles from "../styles/About.module.css";
import AboutBackground from "../Images/about-background.png";
import AboutCarImage from "../Images/about-car-img.png";
import HowItWorks from "./HowItWorks";

const About = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutCarImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
            Elevate Your Journey, Rent Excellence on Wheels!
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </div>
      <HowItWorks />
    </>
  );
};

export default About;
