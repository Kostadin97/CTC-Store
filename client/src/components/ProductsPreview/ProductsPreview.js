import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";

import * as productService from "../../services/productService";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsPreview = (props) => {
  const user = localStorage.getItem("token");
  const isLoggedIn = user ? true : false;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <>
          <div className="container">
            <div className="row">
              {products.map((card) => (
                <SingleProduct key={card._id} {...card} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div>Nothing here</div>
        </>
      )}
    </>
  );
};

export default ProductsPreview;
