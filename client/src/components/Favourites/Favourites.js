import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { UserContext } from "../../UserContext";

import SingleProduct from "../SingleProduct/SingleProduct";

import * as productService from "../../services/productService";

const Favourites = (props) => {
  const [products, setProducts] = useState([]);
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    props.history.push("/login");
  }

  useEffect(() => {
    productService.getFavourites().then((res) => {
      if (res) {
        res.forEach((productId) => {
          productService.getOne(productId).then((result) => {
            setProducts((oldArray) => [...oldArray, result]);
          });
        });
      }
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
                  : "No products "}
              </Row>
            </CardGroup>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
