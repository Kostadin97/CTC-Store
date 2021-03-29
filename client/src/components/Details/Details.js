import { Component } from "react";

import * as productService from "../../services/productService";

import "./Details.css";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    productService
      .getOne(productId)
      .then((res) => this.setState({ product: res }));
  }

  render() {
    let date = this.state.product.date
      ? this.state.product.date.slice(0, 9)
      : "";
    return (
      <div className="container">
        <h1 className="single-title">{this.state.product.title}</h1>
        <div className="row single-content">
          <div className="col-md-5">
            <div className="project-info-box mt-0">
              <h5>DESCRIPTION</h5>
              <p className="mb-0">{this.state.product.description}</p>
            </div>

            <div className="project-info-box">
              <p>
                <b>Creator:</b> Kocko
              </p>
              <p>
                <b>Date:</b> {date}
              </p>
              <p>
                <b>Category:</b> {this.state.product.category}
              </p>
              <p className="mb-0">
                <b>Price:</b> ${this.state.product.price}
              </p>
            </div>
          </div>

          <div className="col-md-7">
            <img
              src={this.state.product.imageUrl}
              alt="imgUrl"
              className="rounded"
              width="400px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
