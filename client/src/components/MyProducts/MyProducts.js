import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { UserContext } from "../../UserContext";

import SingleProduct from "../SingleProduct/SingleProduct";

import * as productService from "../../services/productService";

import "./MyProducts.css";

const MyProducts = (props) => {
  const [products, setProducts] = useState([]);
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    props.history.push("/login");
  }

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
