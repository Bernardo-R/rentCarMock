import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Inventory = () => {
  const API = "https://643d8ccb6c30feced81531da.mockapi.io/cars";

    const [data,  setData] = useState([])
    const [formData, setFormData] = useState({
        // Initialize form input fields
        name: '',
        email: '',
        // Add other fields as needed
      });

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

      const handleCreate = async () => {
        try {
          const response = await axios.post(API, formData);
          setData([...data, response.data]);
          setFormData({
            name: '',
            email: '',
          });
        } catch (error) {
          console.error('Error creating resource:', error);
        }
      };

      const handleUpdate = async (id) => {
        try {
          const response = await axios.put(`${API}/${id}`, formData);
          const updatedData = data.map((item) => {
            if (item.id === id) {
              return response.data;
            }
            return item;
          });
          setData(updatedData);
        } catch (error) {
          console.error('Error updating resource:', error);
        }
      };

      const handleDelete = async (id) => {
        try {
          await axios.delete(`${API}/${id}`);
          const filteredData = data.filter((item) => item.id !== id);
          setData(filteredData);
        } catch (error) {
          console.error('Error deleting resource:', error);
        }
      };



  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Maker</th>
            <th>Model</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.Manufactor}</td>
              <td>{item.Model}</td>
              <td>{item.Type}</td>
              <td> <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <div>
          <Box 
          component="form" sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },}} 
          noValidate
          autoComplete="off">
          <TextField
            id="outlined-maker-input"
            label="Manufactor"
            type="text"
            autoComplete="Honda"
          />
          <TextField
            id="outlined-model-input"
            label="Model"
            type="text"
            autoComplete="Honda"
          />
          <TextField
            id="outlined-type-input"
            label="Type"
            type="text"
            autoComplete="Honda"
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>


          </Box>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Inventory