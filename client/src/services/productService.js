const url = "http://localhost:5000/api/products";

export const getAll = () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const create = (data) => {
  return fetch(`${url}/create`, data)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
