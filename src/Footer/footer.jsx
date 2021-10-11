import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                <i>BUYING LAPTOP TO BE SIMPLE </i> Welcome to [MICROTECH], your
                number one source for all things [product: - Laptop, PC]. We're
                dedicated to giving you the very best of [Laptop, PC], with a
                focus on [three characteristics, ie: dependability, customer
                service and uniqueness.]
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Apple MacBook Pro</a>
                </li>
                <li>
                  <a href="#">DELL</a>
                </li>
                <li>
                  <a href="#">HP</a>
                </li>
                <li>
                  <a href="#">Lenovo</a>
                </li>
                <li>
                  <a href="#">ASUS</a>
                </li>
                <li>
                  <a href="#">Apple iMac</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Member</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <a href="#"> Ansari Moiz</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
