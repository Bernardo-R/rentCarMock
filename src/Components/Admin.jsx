import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const singIn = (e) => {
    // Firebase stuff...
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.uid === "z75JPHMF9hY19qdjDu8prYUNLVn1") {
          console.log("Admin Logged In");
          console.log(navigate);
          navigate("/admin-inventory");
        } else {
          console.log("Not Admin");
        }
        // console.log(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h2 className="my-4">Admin</h2>
              <form onSubmit={singIn}>
                <div className="my-4 py-2">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="email"
                  />
                  <span>hint:admin@test.com</span>
                </div>
                <div className="my-4 py-2">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
                  />
                  <span>hint:admin123</span>
                </div>

                <div className="text-center mt-3">
                  {/* <Link to="/admin-inventory"> */}
                  <button type="submit" className="btn btn-primary">
                    Log In
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
