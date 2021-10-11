import { logDOM } from "@testing-library/react"
import React from "react"
import logo from "../../assets/logo.png"
import { Link, Route, Router, Switch } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="navbar-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-custom ">
          {/* <a className="navbar-brand" href="#">ALLIANCEINDUSTRIES</a> */}
          <img src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact <span className="glyphicon glyphicon-user"></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login <span className="glyphicon glyphicon-log-in"></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Registration">
                  Registration{" "}
                  <span className="glyphicon glyphicon-search"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
// function Homez() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is my Page</p>
//     </div>
//   );
// }

export default Navbar
