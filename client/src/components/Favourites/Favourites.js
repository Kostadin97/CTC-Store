import { useEffect, useState } from "react";

import Header from "../Header/Header";
import SingleProduct from "../SingleProduct/SingleProduct";

import * as productService from "../../services/productService";

const Favourites = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let resultArray = [];
    productService.getFavourites().then((res) => {
      res.forEach((productId) => {
        productService
          .getOne(productId)
          .then((result) => {
            // setProducts(result);
            resultArray.push(result);
          })
          .then(() => {
            setProducts(resultArray);
          })
          .catch((err) => console.log(err));
      });
    });
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} {...props} />
      <div className="row latest-products-div">
        <div className="col-md-12">
          <h1>Favourites</h1>
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

export default Favourites;
