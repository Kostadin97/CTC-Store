import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import * as productService from "../../services/productService";
import Header from "../../components/Header/Header";
import SingleProduct from "../SingleProduct/SingleProduct";

import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

import "./ProductsPreview.css";

const ProductsPreview = (props) => {
  const user = localStorage.getItem("token");
  const isLoggedIn = user ? true : false;

  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState([]);

  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setProducts(res);
        setCategorizedProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const category = props.match.params.category;

    productService.getAll(category).then((res) => {
      let categorizedProductsArray = [];
      res.forEach((result) => {
        if (result.category === category) {
          categorizedProductsArray.push(result);
        }
        if (category === "all") {
          categorizedProductsArray.push(result);
          console.log(props.match);
        }
        if (props.match.url === "/") {
          categorizedProductsArray.push(result);
        }
      });
      setCategorizedProducts(categorizedProductsArray);
    });
  }, [props.match.url]);

  return (
    <>
      <div className="row latest-products-div">
        <div className="col-md-12">
          {isLoggedIn ? (
            <>
              <div className="container">
                <h1>{}</h1>
                <CategoryNavigation />
                <div className="row">
                  {categorizedProducts
                    ? categorizedProducts.map((card) => (
                        <SingleProduct key={card._id} {...card} />
                      ))
                    : ""}
                </div>
              </div>
              <br />
              <br />
              <h1>Latest Products</h1>
              <div className="container">
                <div className="row">
                  {products
                    ? products.map((card) => (
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
      <br />
      <br />
    </>
  );
};
export default ProductsPreview;
