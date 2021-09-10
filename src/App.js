import React, { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button';
// @import "~bootstrap/scss/bootstrap";
// import "./App.css";
import Banner from "./component/Banner/banner";
// import Button from "./Navbar/Button/Button.jsx";
import "./component/Navbar/main.css";
import Navbar from "./component/Navbar/navbar";
import Productlist from "./component/Product/productlist.jsx";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";
import StaticPage from "./component/Product/StaticPage.jsx";
import Product from "./component/Product/Product.jsx";
class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        {/* for navbar */}
        <div className="row">
          <BrowserRouter>
            <Navbar />
            <Banner />
            <Switch>
              <Route exact path="/">
                <Productlist />
              </Route>
              <Route path="/StaticPage/:Id" component={StaticPage}></Route>
            </Switch>
          </BrowserRouter>
        </div>
        {/* for banner */}
        {/* <div className="row">
          <Banner />
        </div> */}
        {/* for feature product */}
        {/* <div className="row">
          <Button />
        </div> */}
        {/* for content */}
        {/* <div className="row">
          <div className="col">
            <Productlist />
          </div> */}
        {/* <div className="col-sm-4">
            <Productlist />
          </div>
          <div className="col-sm-4">
            <Productlist />
          </div> */}
        {/* </div> */}
      </div>

      // <div className="App">
      //   <Navbar />
      //   <Banner />
      //   <Button />
      //   <Productlist />
      //   {/* <h1>Learn React {name}</h1> */}
      // </div>
    );
  }
}

// const name = "Ansari Moiz";

// function Homez() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is my Page</p>
//     </div>
//   );
// }

export default App;
