import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Row, CardGroup } from "react-bootstrap";

import { UserContext } from "../../UserContext";

import * as productService from "../../services/productService";

import SingleProduct from "../SingleProduct/SingleProduct";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

import * as activeCategoryHelper from "../../Helpers/ActiveClassHelper";

import "./ProductsPreview.css";

const ProductsPreview = (props) => {
  const { user, setUser } = useContext(UserContext);

  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState([]);

  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setProducts(res);
        setCategorizedProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const category = props.match.params.category;
    activeCategoryHelper.activeCategoryHelper(props.location.pathname)

    productService.getAll(category).then((res) => {
      let categorizedProductsArray = [];
      res.forEach((result) => {
        if (result.category === category) {
          categorizedProductsArray.push(result);
        }
        if (category === "all") {
          categorizedProductsArray.push(result);
        }
        if (props.match.url === "/") {
          categorizedProductsArray.push(result);
        }
      });
      setCategorizedProducts(categorizedProductsArray);
    });
  }, [props.match.url]);

  return (
    <Container style={{ marginTop: "30px" }}>
      {user ? (
        <>
          <Row>
            <Col>
              <Container>
                <h1 style={{ marginBottom: "30px" }}>Products by Category</h1>
                <CategoryNavigation />
                <Row style={{ marginTop: "30px" }}>
                  {categorizedProducts
                    ? categorizedProducts.map((card) => (
                        <SingleProduct key={card._id} {...card} />
                      ))
                    : ""}
                </Row>
              </Container>
            </Col>
          </Row>
          <Row style={{ marginTop: "80px" }}>
            <Col>
              <Container>
                <h1>Latest Products</h1>
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
        </>
      ) : (
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <Container>
              <h1>Latest Products</h1>
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
      )}
    </Container>
  );
};
export default ProductsPreview;
