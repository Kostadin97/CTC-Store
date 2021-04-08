import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

import * as productService from "../../services/productService";
import Error from "../../components/Error/Error";
import "./Create.css";

const Create = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState("");

  if (user === false) {
    props.history.push("/login");
  }

  const onCreateproductSubmitHandler = async (e) => {
    e.preventDefault();

    const newProduct = {
      title: e.target.title.value,
      description: e.target.description.value,
      imageUrl: e.target.imageUrl.value,
      price: e.target.price.value,
      category: e.target.category.value,
    };

    await productService
      .create(newProduct)
      .then((res) => {
        if (res.data.success) {
          props.history.push("/");
        }
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  };

  return (
    <div className="container">
      <br />
      <Error error={error} />
      <h1 className="form-title">Add product</h1>
      <form onSubmit={onCreateproductSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <input
              name="title"
              type="text"
              className="form-control"
              id="text"
              placeholder="Title"
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
          ></textarea>
        </div>
        <div className="form-group">
          <input
            name="imageUrl"
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Image URL"
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
            />
          </div>
          <div className="form-group col-md-6">
            <select id="inputState" className="form-control" name="category">
              <option value="">Category...</option>
              <option value="Shoe">Shoe</option>
              <option value="Hat">Hat</option>
            </select>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Add Product" />
      </form>
    </div>
  );
};
export default Create;
