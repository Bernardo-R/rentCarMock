import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import BackgroundImg from "../Images/about-background.png";

function Inventory() {
  const API = "https://643d8ccb6c30feced81531da.mockapi.io/cars";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  // this function will request data from API and update data State
  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Best selection in market</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="card-container">
          <div className="about-background-image-container">
            <img src={BackgroundImg} alt="" />
          </div>
          {/* mapping over the API data and displaying each object as cards */}
          {data.map((item, index) => (
            <div className="row">
              <Card
                className="cardInventory"
                style={{ width: "18rem" }}
                key={index}
              >
                <Card.Img variant="top" src={item.Image} />
                <Card.Body>
                  <Card.Title>
                    {item.Manufactor} {item.Model}
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="contained" className="card-btn">
                    Reserve
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Inventory;
