import React, { Component } from "react";
import user from "../assets/user.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-section ">
        <h1>About Us Page</h1>
        <p>
          <i className="fa fa-mobile"> MICROTECH /</i>
          About Us
        </p>
      </div>

      <div className="container emp-profilt">
        <div className="row">
          <div className=" profile col-md-3">
            <img src={user} alt="" />
          </div>

          <div className="col-md-4">
            <div className="profile-head">
              <h3>Ansari Md Moiz</h3>
              <h4>Web Developer</h4>
              <h6 className="profile-rating mt-3 mb-5">
                RANKINGS: <sapn>9/10</sapn>
              </h6>

              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    INFO
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-Timeline-tab"
                    data-toggle="pill"
                    href="#pills-Timeline"
                    role="tab"
                    aria-controls="pills-Timeline"
                    aria-selected="true"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <button class="button">Edit Profile</button>
          </div>
        </div>
        <div className="col-md-12 pl-5 tab-content about-info">
          <div
            class="tab-pane fade show active fontWrap"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row ">
              <div className="col-md-6 ">
                <h5>User ID</h5>
              </div>
              <div className="col-md-6">
                <p>1432</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <h5>Name</h5>
              </div>

              <div className="col-md-6">
                <p>Ansari Md Moiz</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h5>E-mail</h5>
              </div>

              <div className="col-md-6">
                <p>work.moiz@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h5>Mobile No</h5>
              </div>

              <div className="col-md-6">
                <p>123456789</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade show"
            id="pills-Timeline"
            role="tabpanel"
            aria-labelledby="pills-Timeline-tab"
          >
            <div className="col-md-12">
              <h3 className="Wrap">About Us:</h3>

              <p className="has-drop-cap">
                For over 10 years, MICROTECH Enterprises have been creating
                high-performance websites, mobile apps, and software that
                deliver ultimate digital experiences for financial services and
                insurance companies, nonprofits organization and government
                agencies. We believe that creating user-friendly websites with
                Google guidelines and mobile responsive is the key feature for
                achieving more business prospects. Not only designing a website
                but optimizing the website on Google Search engine is a must,
                for that is an expert will help you in getting your business
                website on the first page of Google.
                <p>
                  We believe that creating user-friendly websites with Google
                  guidelines and mobile responsive is the key feature for
                  achieving more business prospects. Not only designing a
                  website but optimizing the website on Google Search engine is
                  a must, for that is an expert will help you in getting your
                  business website on the first page of Google.
                </p>
              </p>
            </div>
            <div className="col-md-12">
              <h3 className="Wrap">Who We Are:</h3>
              <p className="size">
                We are a passionate team of IT professionals, web designers,
                multimedia creators, and marketers. To assist our clients in
                addressing their critical business challenges with the help of
                our comprehensive IT solutions is our prime driving force. For
                us, each project is a process of craftsmanship. We strive to
                deliver any project such that it should be elegant yet
                effective, easy to manage yet scalable, modular yet integrated.
              </p>
              <p>
                Our 4 years of experience has revealed many insights and
                strategies, proven to work in the online industry. Websites
                today are the cornerstone upon which all other marketing
                strategies can pivot and feed visitors, aiding in building a
                profitable business and global brand online.
              </p>
              <p>
                We produce unique solutions that work on all levels from a great
                visual medium using multi-platform animations, excellent code
                development for search engine optimization to ongoing online
                marketing, continually bringing in visitors that lead to
                increased inquiries and sales. Websites are now more than just
                information portals, they are your cyber business for clients
                and yourself to interact and engage with on a regular basis.
              </p>
              <p>
                We Offering services from graphic to web design, we can help
                your business gain the attention it deserves. Services including
                corporate branding, advertising, website, and brochure design
                are among the many solutions we offer to aid your business in
                reaching its greatest potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
