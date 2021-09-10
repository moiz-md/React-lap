import React from "react";
// import React, { Component } from "react";
import "./Button.css";
import ModalBox from "../Product/ModalBox";
import PortalComponent from "../Product/PortalComponent";
import { render } from "@testing-library/react";
// import ReactDOM from "react-dom";

// const portalRoot = document.getElementById("portal-root");
class Button extends React.Component {
  // Button = (props) => {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button-wrapper">
        <div className="feature-Product">
          <div className="col-12 intro-layout text-center">
            <h1>Feature Products ({this.props.count})</h1>
            {/* <div className="border">
              <hr style={{ weight: 5, height: 2, color: "cyan" }} />
            </div> */}
          </div>
        </div>
        <div className="button-wrappers">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
          >
            Add Product{" "}
          </button>
          <PortalComponent>
            <ModalBox></ModalBox>
          </PortalComponent>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<ModalBox />, document.getElementById("portal-root"));

export default Button;
