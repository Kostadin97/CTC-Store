import axios from "axios";
const url = "http://localhost:5000/api/products";
// const url = "http://localhost:5001/pets";

export const getAll = (category = "") => {
  let productsUrl =
    url + (category && category !== "all" ? `?category=${category}` : "");
  return fetch(productsUrl)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getCreatedByMe = () => {
  const token = localStorage.getItem("token");
  return fetch(`${url}/myproducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getOne = (id) => {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const create = (productData) => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:5000/api/products/create", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(productData),
  });
};

export const edit = (id, data) => {
  const edittedProduct = {
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl,
    price: data.price,
    category: data.category,
  };

  return fetch(`${url}/edit/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(edittedProduct),
  });
};

export const deleteProduct = (id) => {
  return fetch(`${url}/delete/${id}`, {
    method: "DELETE",
  });
};
