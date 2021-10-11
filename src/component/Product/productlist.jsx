import React, { Component, createRef } from "react"
import Product from "./Product.jsx"
import ModalBox from "../Product/ModalBox"
import PortalComponent from "../Product/PortalComponent"
import { connect } from "react-redux"
import { getData, addData, deletData } from "../../Redux/Action/Action"
import { store } from "./../../index"

class productlist extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
    console.log(props)
    this.state = {
      ProductDetails: [],
    }
  }
  componentDidMount() {
    this.props.getData()
  }

  RemoveData = Id => {
    console.log("hey", Id)
    console.log("hey", this.state.ProductDetails)
    const UpdateData = this.state.ProductDetails.filter(
      product => product.Id !== Id
    )
    this.setState({
      ProductDetails: UpdateData,
    })
    console.log("hey", UpdateData)
  }

  //call addProduct function and pass object
  product = newProduct => {
    const prodLength = this.props.ProductDetails.length
    const Ntproduct = {
      Id: `${prodLength + 1}`,
      Name: `${newProduct.Name} ${prodLength + 1}`,
      Downloads: `${newProduct.Downloads} ${prodLength + 1}`,
      Image: newProduct.Image,
      Description: `${newProduct.Description} ${prodLength + 1}`,
    }

    this.props.addData(Ntproduct)

    console.log(store.getState().productDetails)
  }

  shouldPortalOpen = () => {
    this.setState({
      shouldPortalOpen: true,
    })
  }

  state = {
    PortalData: [
      {
        Name: `${this.props.portalDataName}`,
        Place: `${this.props.portalDataPlace}`,
        Description: `${this.props.portalDataDes}`,
      },
    ],
  }

  addProduct = addPortalProduct => {
    const prodLengthPortal = this.state.ProductDetails.length
    const PortalProduct = {
      Id: `${prodLengthPortal}`,
      Name: `${addPortalProduct.Name} ${prodLengthPortal + 1}`,
      Downloads: `${addPortalProduct.Downloads} ${prodLengthPortal + 1}`,
      Image: addPortalProduct.Image,
      Description: `${addPortalProduct.Description} ${prodLengthPortal + 1}`,
    }
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="button-wrapper">
            <div className="feature-Product">
              <div className="col-12 intro-layout text-center">
                <h1>Feature Products ({this.props.ProductDetails.length})</h1>
                <hr style={{ weight: 5, height: 2, color: "cyan" }} />
              </div>
            </div>
            <div className="button-wrappers">
              <button
                onClick={this.shouldPortalOpen}
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#addProductModal"
                data-whatever="@mdo"
              >
                Add Product
              </button>
              {this.state.shouldPortalOpen ? (
                <PortalComponent>
                  <ModalBox addProduct={this.product}></ModalBox>
                </PortalComponent>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          {store.getState().productDetails.map((product, index) => {
            return (
              <Product
                click={this.RemoveData.bind(this, product.Id)}
                key={product.Id}
                value={product}
              />
            )
          })}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ProductDetails: state.productDetails,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(getData())
    },
    addData: Ntproduct => dispatch(addData(Ntproduct)),

    deletData: deleteProduct => dispatch(deletData(deleteProduct)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(productlist)
