import React from "react";
import styles from "../styles/AdminInventory.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import BrowserUpdatedRoundedIcon from "@mui/icons-material/BrowserUpdatedRounded";

const AdminInventory = () => {
  const API = "https://643d8ccb6c30feced81531da.mockapi.io/cars";

  // using useState to update value in variables

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    // Initialize form input fields
    Model: "",
    Manufactor: "",
    Type: "",
  });

  const [updateData, setUpdateData] = useState({
    // Initialize form input fields
    Model: "",
    Manufactor: "",
    Type: "",
  });

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
  // this function will send data to API
  const handleCreate = async () => {
    try {
      // sending post request
      const response = await axios.post(API, formData);
      setData([...data, response.data]);
      setFormData({
        Model: "",
        Manufactor: "",
        Type: "",
      });
    } catch (error) {
      console.error("Error creating resource:", error);
    }
  };
  // this function will update data by id in API
  const handleUpdate = async () => {
    try {
      const { id, ...updatedFields } = updateData;
      const response = await axios.put(`${API}/${id}`, updatedFields);
      const updatedData = data.map((item) => {
        if (item.id === id) {
          return response.data;
        }
        return item;
      });
      setData(updatedData);
      setUpdateData({
        // id: "",
        Model: "",
        Manufactor: "",
        Type: "",
      });
    } catch (error) {
      console.error("Error updating resource:", error);
    }
  };
  //  this function will delete data by id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      // filter method is used on the data array,
      // and it returns a new array that includes only the elements where the id does not match the deleted id.
      const filteredData = data.filter((item) => item.id !== id);
      setData(filteredData);
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Maker</th>
            <th>Model</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* this logic will map the data hold in variable data and display it  */}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.Manufactor}</td>
              <td>{item.Model}</td>
              <td>{item.Type}</td>
              <td>
                {" "}
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* form to add */}
      <div className={styles.adminFormsWrapper}>
        <div className="card-admin addForm text-bg-light rounded-3">
          <h4>Add Vehicle</h4>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Maker"
              type="text"
              value={formData.Manufactor}
              onChange={(e) =>
                setFormData({ ...formData, Manufactor: e.target.value })
              }
            />
            <TextField
              id="outlined-model-input"
              label="Model"
              type="text"
              value={formData.Model}
              onChange={(e) =>
                setFormData({ ...formData, Model: e.target.value })
              }
            />
            <TextField
              id="outlined-type-input"
              label="Type"
              type="text"
              value={formData.Type}
              onChange={(e) =>
                setFormData({ ...formData, Type: e.target.value })
              }
            />
          </Box>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleCreate}
          >
            Add Vehicle
          </Button>
        </div>
        <div>
          {/* form to update a vehicle by id */}
          <div className="card-admin">
            <h4>Update Vehicle</h4>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-id-input"
                label="ID"
                type="text"
                value={updateData.id}
                onChange={(e) =>
                  setUpdateData({ ...updateData, id: e.target.value })
                }
                required
              />

              <TextField
                id="outlined-updateMaker-input"
                label="Maker"
                type="text"
                value={updateData.Manufactor}
                onChange={(e) =>
                  setUpdateData({ ...updateData, Manufactor: e.target.value })
                }
              />
              <TextField
                id="outlined-updateModel-input"
                label="Model"
                type="text"
                value={updateData.Model}
                onChange={(e) =>
                  setUpdateData({ ...updateData, Model: e.target.value })
                }
              />
              <TextField
                id="outlined-updateType-input"
                label="Type"
                type="text"
                value={updateData.Type}
                onChange={(e) =>
                  setUpdateData({ ...updateData, Type: e.target.value })
                }
              />
            </Box>
            <Button
              variant="contained"
              endIcon={<BrowserUpdatedRoundedIcon />}
              onClick={handleUpdate}
            >
              Update Vehicle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInventory;
