import React, { Component, createRef } from "react"
import productImage1 from "../../assets/product-image-1.png"
import "../../Login/Style.css"

class ModalBox extends Component {
  constructor(props) {
    super(props)
    this.inputRefName = createRef()
    this.inputRefPlace = createRef()
    this.inputRefDownload = createRef()
    this.inputRefDesription = createRef()
  }
  addPortalProduct = e => {
    e.preventDefault()
    const portalDataName = this.inputRefName.current.value
    const portalDataDowmload = this.inputRefDownload.current.value
    const portalDataDes = this.inputRefDesription.current.value

    const newProduct = {
      Name: portalDataName,
      Downloads: portalDataDowmload,
      Description: portalDataDes,
      Image: productImage1,
    }
    this.props.addProduct(newProduct)

    console.log(portalDataName, portalDataDes)
  }

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
                    ref={this.inputRefName}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="place-name" className="col-form-label">
                    Price:
                  </label>
                  <input
                    name="Downloads"
                    type="text"
                    className="form-control"
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
                    ref={this.inputRefDesription}
                  ></textarea>
                </div>
              </form>

              <div className="modal-footer float-left Dess">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={e => this.addPortalProduct(e)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBox
