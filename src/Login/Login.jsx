import React, { Component } from "react"
import loginImg from "../assets/login_3.png"
import "./Style.css"

const Login = () => {
  return (
    <>
      <div className="base-container">
        <div className="header">Login Page</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button class="button login">Login</button>
        </div>
      </div>
    </>
  )
}
export default Login
