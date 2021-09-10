import React, { Component, createRef } from "react";
import productImage1 from "../../assets/product-image-1.png";

class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.inputRefName = createRef();
    this.inputRefPlace = createRef();
    this.inputRefDownload = createRef();
    this.inputRefDesription = createRef();
    //   this.state = {
    //     productName: "",
    //     place: "",
    //     description: "",
    //   };
    //   this.handleInputChange = this.handleInputChange.bind(this);
    // }

    // handleInputChange(event) {
    //   const target = event.target;
    //   const value = target.type === "checkbox" ? target.checked : target.value;
    //   const name = target.name;

    //   this.setState({
    //     [name]: value,
    //   });
    // }

    // addPortalProduct() {
    //   console.log(
    //     this.state.productName,
    //     this.state.place,
    //     this.state.description
    //   );
    //   this.setState({
    //     productName: "",
    //     place: "",
    //     description: "",
    //   });
  }
  addPortalProduct = (e) => {
    e.preventDefault();
    // this.inputRef.current.value;
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    const portalDataName = this.inputRefName.current.value;
    const portalDataPlace = this.inputRefPlace.current.value;
    const portalDataDowmload = this.inputRefDownload.current.value;
    const portalDataDes = this.inputRefDesription.current.value;

    const newProduct = {
      Name: portalDataName,
      Place: portalDataPlace,
      Downloads: portalDataDowmload,
      Description: portalDataDes,
      Image: productImage1,
    };
    this.props.addProduct(newProduct);

    console.log(portalDataName, portalDataPlace, portalDataDes);
  };

  render() {
    return (
      <div
        className="modal fade "
        id="addProductModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Add Product
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    name="productName"
                    type="text"
                    className="form-control"
                    // id="recipient-name"
                    // value={this.state.productName}
                    // onChange={this.handleInputChange}
                    ref={this.inputRefName}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="place-name" className="col-form-label">
                    Place:
                  </label>
                  <input
                    name="place"
                    type="text"
                    className="form-control"
                    // id="recipient-name"
                    // value={this.state.place}
                    // onChange={this.handleInputChange}
                    ref={this.inputRefPlace}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="place-name" className="col-form-label">
                    Downloads
                  </label>
                  <input
                    name="Downloads"
                    type="text"
                    className="form-control"
                    // id="recipient-name"
                    // value={this.state.place}
                    // onChange={this.handleInputChange}
                    ref={this.inputRefDownload}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    className="form-control"
                    // id="message-text"
                    // value={this.state.description}
                    // onChange={this.handleInputChange}
                    ref={this.inputRefDesription}
                  ></textarea>

                  {/* <!-- <input type="text" className="form-control" id="recipient-name"> --> */}
                </div>
              </form>

              <div className="modal-footer float-left">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e) => this.addPortalProduct(e)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<ModalBox />, document.getElementById("portal-root"));

export default ModalBox;
