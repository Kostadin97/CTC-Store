import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Button, ButtonGroup } from "react-bootstrap";

import { UserContext } from "../../UserContext";

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
    <Col lg="4">
      <Card style={{ marginTop: "30px" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(30)}</Card.Text>
          <Link to={`/details/` + _id} className="card-link">
            View
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Category: {category}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default SingleProduct;
