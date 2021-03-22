import React from "react";
import { Component } from "react";

import * as productService from "../../services/productService";

import SingleProduct from "../SingleProduct/SingleProduct.component";

import "./ProductsPreview.styles.scss";

class ProductsPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    productService.getAll().then((res) => this.setState({ products: res }));
  }

  render() {
    return (
      <div class="container">
        <h1>Latest Products</h1>
        <div class="row">
          {this.state.products.map((p) => (
            <div className="col-lg-6">
              <SingleProduct key={p._id} {...p} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsPreview;
