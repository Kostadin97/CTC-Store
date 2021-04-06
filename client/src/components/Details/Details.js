import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as productService from "../../services/productService";

import Header from "../../components/Header/Header";

import axios from 'axios';

import "./Details.css";

const Details = (props) => {
  const user = localStorage.getItem("token");
  const isLoggedIn = user ? true : false;

  const [product, setProduct] = useState([]);
  const productId = props.match.params.id;

  useEffect(() => {
    productService.getOne(productId).then((product) => setProduct(product));
  }, []);

  const deleteProductHandler = () => {
    productService
      .deleteProduct(productId)
      .then(() => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveProductHandler = () => {
    const productId = props.match.params.id;
    const user = localStorage.getItem("token");
    const options = {
      url: `http://localhost:5000/api/products/save/${productId}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: user,
      },
    };

    axios(options).then((res) => {
      // props.history.push("/");
      console.log(res);
    });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container">
        <h1 className="single-title">{product.title}</h1>
        <div className="row single-content">
          <div className="col-md-5 info-div">
            <div className="project-info-box">
              <p>
                <b>Creator:</b> Kocko
              </p>
              <p>
                <b>Date:</b> {product.date ? product.date.slice(0, 9) : ""}
              </p>
              <p>
                <b>Category:</b> {product.category}
              </p>
              <p className="mb-0">
                <b>Price:</b> ${product.price}
              </p>
            </div>
          </div>

          <div className="col-md-7 img-div">
            <img
              src={product.imageUrl}
              alt="imgUrl"
              className="rounded"
              width="400px"
            />
          </div>
        </div>
        <div className="row buttons-div">
          <div className="col-md-2">
            <Link className="btn btn-dark" to={`/edit/` + product._id}>
              Edit
            </Link>
          </div>

          <div className="col-md-2">
            <button
              className="danger-btn btn btn-danger"
              onClick={deleteProductHandler}
            >
              Delete
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="danger-btn btn btn-danger"
              onClick={saveProductHandler}
            >
              Save
            </button>
          </div>
        </div>
        <div className="row single-content">
          <div className="col-md-12">
            <div className="project-info-box mt-0">
              <h5>DESCRIPTION</h5>
              <p className="mb-0">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
