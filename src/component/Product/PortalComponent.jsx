import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");
class PortalComponent extends React.Component {
  constructor() {
    super();
    this.modalDivElement = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.modalDivElement);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.modalDivElement);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalDivElement);
  }
}

export default PortalComponent;
