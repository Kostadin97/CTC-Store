import React from "react";
// import { Link } from "react-router-dom";

import "./SingleProduct.styles.css";

const styles = {
  width: "500px",
};

const SingleProduct = ({
  _id,
  title,
  description,
  imageUrl,
  price,
  category,
}) => (
  <div className="card" style={styles}>
    <img className="card-img-top" src={imageUrl} alt="Card image" />
    <div className="card-img-overlay">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{description.slice(0, 50)}</p>
      <a href="#" className="btn btn-primary">
        Details
      </a>
    </div>
  </div>
);

export default SingleProduct;
