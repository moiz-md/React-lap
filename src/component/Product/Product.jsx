import React from "react"
import "./Product.css"
import { useHistory, Link } from "react-router-dom"

export default function Product(props) {
  return (
    <>
      <div className="col-lg-4">
        <figure>
          <figcaption>
            <div className="Card-dimentions">
              <img src={props.value.Image} />

              <div className="Card-dimentions " id="Desc">
                <br></br>
                <div className="row">
                  <h3 className="text-left col-8">{props.value.Name}</h3>
                  <h5 className="text-right col-4">{props.value.Downloads}</h5>
                </div>
                <br></br>
                <div className="row">
                  <h6>{props.value.Description}</h6>
                </div>
              </div>
            </div>

            <div className=" buttons-body btn-group d-flex justify-content-between aling-items-center ">
              <Link
                to={`/StaticPage/${props.value.Id}`}
                className="btn  btn-lg btn-layout"
              >
                <i className="fa fa-eye"></i>Details
              </Link>
              <button
                type="button"
                className="btn btn-lg btn-layout"
                onClick={props.click}
              >
                <i className="fa fa-trash" aria-hidden="true"></i> Delete
              </button>
              <button type="button" className="btn btn-lg btn-layout">
                <i className="fa fa-shopping-cart"></i> Buy Now
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  )
}
