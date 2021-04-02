import React from "react";
import { Link } from "react-router-dom";

import "./SingleProduct.css";

const SingleProduct = ({
  _id,
  title,
  description,
  imageUrl,
  price,
  category,
}) => {
  return (
    <div className="col-md-4 card-div" key={_id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <img
          id="products-preview-img"
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {price}$</li>
          <li className="list-group-item">Category: {category}</li>
        </ul>
        <div className="card-body">
          <Link to={`/details/` + _id} className="card-link">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
