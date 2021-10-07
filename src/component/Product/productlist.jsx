import React, { Component, createRef } from "react";
import Product from "./Product.jsx";

import productImage1 from "./../../assets/product-image-1.png";
import productImage2 from "./../../assets/product-image-2.png";
import productImage3 from "./../../assets/product-image-3.png";
// import Button from "./../Button/Button";
import ModalBox from "../Product/ModalBox";
import PortalComponent from "../Product/PortalComponent";
import { connect } from "react-redux";
import FormRange from "react-bootstrap/esm/FormRange";
import { getData, addData, deletData } from "../../Redux/Action/Action";
import { store } from "./../../index";

class productlist extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    console.log(props);
    this.state = {
      ProductDetails: [],
    };
  }
  componentDidMount() {
    // const newProduct = {
    //   Id: 3,
    //   Name: "Biz Page",
    //   Downloads: "3,24,206 Downloads",
    //   Image: productImage3,
    //   Description: "The is website !!",
    // };
    // this.product(newProduct);
    this.props.getData();
  }

  RemoveData = (Id) => {
    // alert("Hey", Id);
    console.log("hey", Id);
    console.log("hey", this.state.ProductDetails);
    const UpdateData = this.state.ProductDetails.filter(
      (product) => product.Id !== Id
    );
    this.setState({
      ProductDetails: UpdateData,
    });
    console.log("hey", UpdateData);
  };

  // componentDidMount() {
  //   const newProduct1 = {
  //     Id: 3,
  //     Name: "Biz Page",
  //     Downloads: "3,206 Downloads",
  //     Image: productImage3,
  //     Description: "The is website !!",
  //   };
  //   this.product1(newProduct1);
  // }
  // product1 = (newProduct1) => {
  //   const plength = this.state.ProductDetails.length;
  //   const n1pro = {
  //     Id: `${newProduct1.Id} ${newProduct1 + 1}`,
  //     Name: `${newProduct1.Name} ${newProduct1 + 1} `,
  //     Downloads: `${newProduct1.Downloads} ${newProduct1 + 1}`,
  //     Image: newProduct1.productImage1,
  //     Description: `${newProduct1.Description} ${newProduct1 + 1}`,
  //   };
  //   this.setState({
  //     ProductDetails: [...this.state.ProductDetails, n1pro],
  //   });
  // };
  // newProduct = {this.state.ProductDetails(../newProduct)}
  //call addProduct function and pass object
  product = (newProduct) => {
    const prodLength = this.props.ProductDetails.length;
    const Ntproduct = {
      Id: `${prodLength + 1}`,
      Name: `${newProduct.Name} ${prodLength + 1}`,
      Downloads: `${newProduct.Downloads} ${prodLength + 1}`,
      Image: newProduct.Image,
      Description: `${newProduct.Description} ${prodLength + 1}`,
    };

    this.props.addData(Ntproduct);

    // this.setState({
    //   //ProductDetails: [...this.state.ProductDetails, Ntproduct],
    //   shouldPortalOpen: false,
    // });
    console.log(store.getState().productDetails);
  };

  shouldPortalOpen = () => {
    this.setState({
      shouldPortalOpen: true,
    });
  };

  state = {
    PortalData: [
      {
        Name: `${this.props.portalDataName}`,
        Place: `${this.props.portalDataPlace}`,
        Description: `${this.props.portalDataDes}`,
      },
    ],
  };

  // componentDidMount() {
  // addPortalProduct = () => {
  //   const addPortalProduct = {
  //     Id: 3,
  //     Name: "Biz Page",
  //     Downloads: "3,24,206 Downloads",
  //     Image: productImage1,
  //     Description: "The is website !!",
  //   };
  // };
  // // }

  addProduct = (addPortalProduct) => {
    const prodLengthPortal = this.state.ProductDetails.length;
    const PortalProduct = {
      Id: `${prodLengthPortal}`,
      Name: `${addPortalProduct.Name} ${prodLengthPortal + 1}`,
      Downloads: `${addPortalProduct.Downloads} ${prodLengthPortal + 1}`,
      Image: addPortalProduct.Image,
      Description: `${addPortalProduct.Description} ${prodLengthPortal + 1}`,
    };
    //console.log();
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="button-wrapper">
            <div className="feature-Product">
              <div className="col-12 intro-layout text-center">
                <h1>Feature Products ({this.props.ProductDetails.length})</h1>
                <hr style={{ weight: 5, height: 2, color: "cyan" }} />
                {/* <div className="border">
                 
                </div> */}
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
                //onClickRemove={() => this.UpdateData.bind()}
                click={this.RemoveData.bind(this, product.Id)}
                key={product.Id}
                value={product}
              />
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProductDetails: state.productDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData());
    },
    addData: (Ntproduct) => dispatch(addData(Ntproduct)),

    deletData: (deleteProduct) => dispatch(deletData(deleteProduct)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(productlist);
