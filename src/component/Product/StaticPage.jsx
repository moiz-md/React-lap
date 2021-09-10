import React, { Component } from "react";
import { store } from "../..";

class StaticPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    //console.log("Console log ");
    //this.setState({ productList: store.getState().productList.filter((item) => (item.Id == [this.props.match.params.Id])) });
    fetch("http://localhost:3000/ProductDetails.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log({ Productslist: data.filter((item) => (item.Id==[this.props.match.params.Id])) });

        this.setState({
          productList: data.filter(
            (item) => item.Id == [this.props.match.params.Id]
          ),
        });
        console.log("Console log " + this.state.productList[0].Name);
      })
      .catch((error) => {
        throw error;
      });
    this.setState({ isSelected: true });
  }

  render() {
    console.log("state", this.state.productList);
    //  console.log(this.props.match.params.Id);
    return (
      <div>
        {this.state.productList.map((product, index) => {
          return (
            <div className="col-12 col-sm-12 col-lg-4" data-id={product.Id}>
              <img src={`../../assets/${product.Image}`} alt="" />
              <div className="card-body d-flex justify-content-between align-items-center">
                <h4>
                  <span> {product.Name} </span>
                </h4>

                <h5>
                  <span> {product.Downloads} </span>
                </h5>
              </div>

              <div> {product.Description} </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default StaticPage;
