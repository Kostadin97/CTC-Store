import * as productService from "../../services/productService";

import Header from "../../components/Header/Header";

import "./Create.css";
import axios from "axios";
import { useState } from "react";

const Create = (props) => {
  const user = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  let errorMessage = "";

  if (isLoggedIn === false) {
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

    const options = {
      url: "http://localhost:5000/api/products/create",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user,
      },
      data: newProduct,
    };

    await axios(options)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        props.history.push("/create");
        let errorNotification = document.getElementById("error-create");
        errorMessage = err.response.data.msg;
        errorNotification.style.display = "block";
        errorNotification.style.background = "#f8d7da";
        errorNotification.style.border = "red";
        errorNotification.textContent = errorMessage;
        setTimeout(() => {
          errorNotification.style.display = "block";
          errorNotification.style.background = "whitesmoke";
          errorNotification.style.border = "none";
          errorNotification.textContent = "";
        }, 5000);
      });
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <div className="container">
        <div id="error-create" className="alert alert-danger">
          {errorMessage || ""}
        </div>
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
export default Create;
