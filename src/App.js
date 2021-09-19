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
import Footer from "./Footer/footer";
import AboutUs from "./About/AboutUs";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Register from "./Registration/Register";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        {/* for navbar */}
        <div className="row">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Banner />
                <Productlist />
                <div className="align-bottom">
                  <Footer />
                </div>
              </Route>
              <Route path="/StaticPage/:Id" component={StaticPage}></Route>
              <Route path="/about" component={AboutUs}></Route>
              <Route path="/Contact" component={Contact}></Route>
              <Route path="/Login" component={Login}></Route>
              <Route path="/Registration" component={Register}></Route>
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
