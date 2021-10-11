import React, { Component } from "react"
import Banner from "./component/Banner/banner"
import "./component/Navbar/main.css"
import Navbar from "./component/Navbar/navbar"
import Productlist from "./component/Product/productlist.jsx"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import StaticPage from "./component/Product/StaticPage.jsx"
import Footer from "./Footer/footer"
import AboutUs from "./About/AboutUs"
import Contact from "./Contact/Contact"
import Login from "./Login/Login"
import Register from "./Registration/Register"

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
      </div>
    )
  }
}

export default App
