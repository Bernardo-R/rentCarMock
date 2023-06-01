import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';


function Crud() {
    const API = "https://643d8ccb6c30feced81531da.mockapi.io/cars";

    const [data,  setData] = useState([])

      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get(API);
          setData(response.data);
          // console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <>
        <h2>Select from our diverse inventory</h2>
          <div className="card-container">
            
            {data.map((item, index) => (
              <div className="row">
                <Card style={{ width: '18rem' }} key={index}>
                  <Card.Img variant="top" src={item.Image} />
                    <Card.Body>
                      <Card.Title>{item.Manufactor} {item.Model}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="contained" className="card-btn">Reserve</Button>
                    </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
    )
}

export default Crud;