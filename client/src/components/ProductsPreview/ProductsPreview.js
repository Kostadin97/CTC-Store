import React, { useEffect, useState } from "react";
import { Component } from "react";

import * as productService from "../../services/productService";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsPreview = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  useEffect(() => {
    productService.getAll().then((products) => setProducts(products));
  }, []);


  return (
    <div className="container">
      <div className="row">
        {products.map((card) => (
          <SingleProduct isLoggedIn={isLoggedIn} key={card._id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
