import React from "react";
import loginImg from "../assets/login_1.png";
const Register = () => {
  return (
    <>
      <div className="base-container">
        <div className="header">Registration Page</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button class="button login">Register</button>
        </div>
      </div>
    </>
  );
};
export default Register;
