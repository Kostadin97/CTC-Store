import { useEffect, useState } from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";

import SingleProduct from "../SingleProduct/SingleProduct";

import * as productService from "../../services/productService";

const Favourites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getFavourites().then((res) => {
      res.forEach((productId) => {
        productService.getOne(productId).then((result) => {
          setProducts((oldArray) => [...oldArray, result]);
        });
      });
    });
  }, []);
  return (
    <Container>
      <Row style={{ marginTop: "80px" }}>
        <Col>
          <Container>
            <h1>Favourites</h1>
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

export default Favourites;
