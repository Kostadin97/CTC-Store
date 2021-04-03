import React from "react";

import Header from "../../components/Header/Header";

import * as productService from "../../services/productService";
import SingleProduct from "../SingleProduct/SingleProduct";

import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      products: [],
      categorizedProducts: [],
      currentCategory: "all",
    };
  }

  componentDidMount() {
    productService
      .getAll()
      .then((res) =>
        this.setState({ products: res, isLoggedIn: this.props.isLoggedIn })
      );
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;

    if (prevProps.match.params.category === category) {
      return;
    }
    productService.getAll(category).then((res) => {
      let categorizedProducts = [];
      res.forEach((result) => {
        if (result.category === category) {
          categorizedProducts.push(result);
        }
        if (category === "all") {
          categorizedProducts.push(result);
          console.log(this.props.match);
        }
        if (this.props.match.url === "/") {
          categorizedProducts.push(result);
        }
      });
      this.setState({
        products: categorizedProducts,
        currentCategory: category,
        isLoggedIn: this.props.isLoggedIn,
      });
    });
  }

  render() {
    return (
      <>
        <Header isLoggedIn={this.state.isLoggedIn} />
        <div className="row">
          <div className="col-md-4">
            <CategoryNavigation />
          </div>
          <div className="col-md-8">
            {this.state.isLoggedIn ? (
              <>
                <div className="container">
                  <div className="row">
                    {this.state.products
                      ? this.state.products.map((card) => (
                          <SingleProduct key={card._id} {...card} />
                        ))
                      : ""}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>Nothing here</div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default ProductsPreview;
