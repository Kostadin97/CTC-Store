import { useEffect, useState } from "react";
import axios from "axios";

import * as productService from "../../services/productService";

import Header from "../../components/Header/Header";
import "./Edit.css";

const Edit = (props) => {
  const user = localStorage.getItem("token");
  const isLoggedIn = user ? true : false;

  const [product, setProduct] = useState({});
  const productId = props.match.params.id;

  useEffect(() => {
    productService.getOne(productId).then((result) => setProduct(result));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const edittedProduct = {
      title: e.target.title.value,
      description: e.target.description.value,
      imageUrl: e.target.imageUrl.value,
      price: e.target.price.value,
      category: e.target.category.value,
    };

    productService.edit(productId, edittedProduct).then(() => {
      props.history.push("/");
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container">
        <h1 className="form-title">Edit product</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                name="title"
                type="text"
                className="form-control"
                id="text"
                // placeholder="Title"
                value={product.title || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Description"
              value={product.description || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              name="imageUrl"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Image URL"
              value={product.imageUrl || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                name="price"
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Price"
                value={product.price || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <select
                id="inputState"
                className="form-control"
                name="category"
                value={product.category || ""}
                onChange={handleChange}
              >
                <option>Category...</option>
                <option value="shoes">Shoes</option>
                <option value="hats">Hats</option>
                <option value="jackets">Jackets</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Product"
          />
        </form>
      </div>
    </>
  );
};
export default Edit;