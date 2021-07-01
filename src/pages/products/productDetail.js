import React, { Component } from "react";
import Topbar from "../../component/Topbar";
import product1 from "../../assets/product1.png";

export default class productDetail extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="container productDetail">
          <div className="row">
            <div className="col-md-6">
              <img
                className="productDetail__image"
                src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-5">
              <h5 className="ml-5 mt-5 font-weight-bold d-inline ">Arabia</h5>
              <span className="ml-2">Muumimuki</span>
              <h6
                style={{ fontSize: "2.4rem" }}
                className="display-4 ml-5 mt-2"
              >
                Tumma Keltainen, Pikku Myy (1991-1996)
              </h6>
              <div className="row productDetail__price mt-5">
                <div className="col-10">
                  <h5 className="font-weight-bold productDetail__price">
                    Hinta-arvio 450,00EUR
                  </h5>
                </div>
                <div className="col-2"></div>
              </div>
              <button
                style={{ backgroundColor: "#A4B96D", color: "white" }}
                className="btn btn-lg ml-5  mt-3 productDetail__button px-3 py-3"
              >
                Lisaa Kokoelmaan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
