import axios from "axios";

export const login = async (user) => {
  try {
    let res = await axios.post("http://localhost:5000/api/users/login", user);

    const token = res.data.token;

    localStorage.setItem("token", token);

    axios.defaults.headers.common["Authorization"] = token;

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const register = (user) => {
  return axios.post("http://localhost:5000/api/users/register", user);
};
