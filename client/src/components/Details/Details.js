import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as productService from "../../services/productService";

import "./Details.css";

const Details = (props) => {
  const [product, setProduct] = useState([]);
  const [hasSaved, setHasSaved] = useState(null);
  const productId = props.match.params.id;

  useEffect(() => {
    productService.getFavourites().then((products) => {
      if (products.includes(productId)) {
        setHasSaved(true);
      } else {
        setHasSaved(false);
      }
    });
  }, []);

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

    productService
      .saveProduct(productId)
      .then(() => {
        props.history.push(`/details/${productId}`);
        setHasSaved(true);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
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
        {!hasSaved ? (
          <div className="col-md-2">
            <button
              className="danger-btn btn btn-danger"
              onClick={saveProductHandler}
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <p>You have saved that product.</p>
          </>
        )}
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
  );
};

export default Details;
