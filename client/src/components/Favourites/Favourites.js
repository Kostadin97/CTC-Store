import React from "react";
import { Component } from "react";

import * as productService from "../../services/productService";
import SingleProduct from "../SingleProduct/SingleProduct";

class Favourites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedProducts: [],
    };
  }

  componentDidMount() {
    productService.getAll().then((res) => this.setState({ products: res }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.savedProducts.map((card) => (
            <SingleProduct key={card._id} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Favourites;
