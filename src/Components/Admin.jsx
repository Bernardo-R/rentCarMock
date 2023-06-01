import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  
    return (
      <div className="main">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h3 className="my-4">Admin</h3>
                  <svg
                    className="mx-auto my-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <input
                    type="text"
                    id=""
                    className="form-control my-4 py-2"
                    placeholder="username"
                  ></input>
                  <input
                    type="password"
                    id=""
                    className="form-control my-4 py-2"
                    placeholder="password"
                  ></input>
                  <div className="text-center mt-3">
                    <Link to={"/admin-inventory"}><button className="btn btn-primary">Log In</button></Link> 
                    {/* <a href="#" className="nav-link mt-3 link-hover">
                      Already have an account ?
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Admin;