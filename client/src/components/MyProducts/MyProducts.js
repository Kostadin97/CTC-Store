import { useEffect, useState } from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";

import SingleProduct from "../SingleProduct/SingleProduct";

import * as productService from "../../services/productService";

import "./MyProducts.css";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getCreatedByMe().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <Container>
      <Row style={{ marginTop: "80px" }}>
        <Col>
          <Container>
            <h1>My Products</h1>
            <CardGroup>
              <Row>
                {products
                  ? products.map((card) => (
                      <SingleProduct key={card._id} {...card} />
                    ))
                  : ""}
              </Row>
            </CardGroup>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProducts;
