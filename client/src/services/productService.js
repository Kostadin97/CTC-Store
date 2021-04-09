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

export const getFavourites = () => {
  const token = localStorage.getItem("token");
  return fetch(`${url}/favourites`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const saveProduct = (productId) => {
  const token = localStorage.getItem("token");
  const options = {
    url: `http://localhost:5000/api/products/save/${productId}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  return axios(options);
};

export const create = (newProduct) => {
  const token = localStorage.getItem("token");
  const options = {
    url: "http://localhost:5000/api/products/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: newProduct,
  };
  return axios(options);
};

export const edit = (id, data) => {
  const token = localStorage.getItem("token");
  const edittedProduct = {
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl,
    price: data.price,
    category: data.category,
  };
  const options = {
    url: `${url}/edit/${id}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: edittedProduct,
  };

  return axios(options);
};

export const deleteProduct = (id) => {
  return fetch(`${url}/delete/${id}`, {
    method: "DELETE",
  });
};
