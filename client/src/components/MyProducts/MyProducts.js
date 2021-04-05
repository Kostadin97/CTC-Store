import { useEffect, useState } from "react";
import Header from ".././Header/Header";

import * as productService from "../../services/productService";

const MyProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((res) => {
      setProducts(res);
      // console.log(res);
    });
  }, []);
  console.log(products);
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
    </>
  );
};

export default MyProducts;
