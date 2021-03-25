import React from "react";
import { Link } from "react-router-dom";

import "./SingleProduct.styles.css";

const SingleProduct = ({
  _id,
  title,
  description,
  imageUrl,
  price,
  category,
}) => {
  return (
    <div className="col-sm" key={_id}>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {price}$</li>
          <li className="list-group-item">Category: {category}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            View
          </a>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
