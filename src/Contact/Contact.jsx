import React, { Component } from "react";
import phone from "../assets/iphone1.png";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>For Support: moizmails@gmail.com | 9892747013</p>
        </div>
        <div className="containers">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Adress</h3>
                <p>Mumbai, India</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+91 9892747013</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>work.moiz@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" className="" required="required" />
                <span>Full Name</span>
              </div>

              <div className="inputBox">
                <input type="text" className="" required="required" />
                <span>Email</span>
              </div>

              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type Your Message.....</span>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  className=""
                  value="Send"
                  // onSubmit={(e) => onSubmitForm(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
