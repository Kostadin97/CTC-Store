import axios from "react-axios";

export const login = async (user) => {
  try {
    let res = await axios.Post("http://localhost:500/api/users/login", user);

    const token = res.data.token;

    localStorage.setItem("token", token);

    axios.defaults.headers.common["Authorization"] = token;

    return res;
  } catch (error) {
    console.log(error);
  }
};
