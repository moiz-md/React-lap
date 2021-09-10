import React, { Component } from "react";
import { store } from "../..";



class StaticPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      renderDetail:[]
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
        let  renseritem = []
        
        for (const [ key,value] of Object.entries(this.state.productList[0].details)) {
          renseritem.push(value)
         }
         console.log("DETAILS", this.state.productList[0].details, renseritem);
      this.setState({renderDetail:renseritem}) 
      })
      .catch((error) => {
        throw error;
      });
    this.setState({ isSelected: true });
 
  

     
  }

   

  render() {
    console.log("state", this.state.renderDetail);
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

        
              {this.state.renderDetail.map(el => {
                return <ul><li>{el}</li></ul>
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default StaticPage;
