import React from "react";
import BannerBackground from "../Images/home-banner-background.png";
import BannerImage from "../Images/home-image.png";
import { FiArrowRight } from "react-icons/fi";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <div className='Home-container'>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Drive the Experience, Rent with Ease!
          </h1>
          <p className="primary-text">
          Unlock Your Journey to Excellence, with our Superior Fleet and Unparalleled Service!  
          </p>
          <button className="secondary-button">
            Reserve Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    <Contact />
    </>
  )
}

export default Home