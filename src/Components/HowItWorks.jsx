import React from "react";
import Car from "../Images/car.svg";
import calendar from "../Images/calendar.svg";
import creditCard from "../Images/creditCard.svg";

const HowItWorks = () => {
  const workInfoData = [
    {
      image: Car,
      title: "Select Your Vehicle",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: calendar,
      title: "Choose For How Long",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: creditCard,
      title: "Pay When Return",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
