const url = "http://localhost:5000/api/products";

export const getAll = () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const create = (title, description, imageUrl, price, category) => {
  const newProduct = {
    title,
    description,
    imageUrl,
    price,
    category,
  };

  return fetch(`${url}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
};
