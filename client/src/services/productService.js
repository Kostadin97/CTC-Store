const url = "http://localhost:5000/api/products";

export const getAll = () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
