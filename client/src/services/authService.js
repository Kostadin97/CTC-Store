import axios from "axios";

export const login = (user) => {
  return axios.post("http://localhost:5000/api/users/login", user);
};

export const register = (user) => {
  return axios.post("http://localhost:5000/api/users/register", user);
};
