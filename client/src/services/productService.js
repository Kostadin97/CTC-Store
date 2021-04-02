const url = "http://localhost:5000/api/products";

export const getAll = () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getOne = (id) => {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const create = (title, description, imageUrl, price, category) => {
  const token = localStorage.getItem("token");
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
      Authorization: token,
    },
    body: JSON.stringify(newProduct),
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
