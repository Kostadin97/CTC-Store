import { useEffect, useState } from "react";

import Header from "../Header/Header";
import SingleProduct from "../SingleProduct/SingleProduct";

import * as productService from "../../services/productService";

import "./MyProducts.css";

const MyProducts = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getCreatedByMe().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} {...props} />
      <div className="row latest-products-div">
        <div className="col-md-12">
          <h1>My Products</h1>
          <div className="container">
            <div className="row">
              {products
                ? products.map((card) => (
                    <SingleProduct key={card._id} {...card} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
