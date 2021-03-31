import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as authService from "../../services/authService";

import Header from "../../components/Header/Header";

import "./Login.css";

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  let errorMessage = "";

  const onSubmit = (e) => {
    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    authService
      .login(user)
      .then((res) => {
        if (res.data.success) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          axios.defaults.headers["Authorization"] = token;
          setIsLoggedIn(true);
          props.history.push("/");
        }
      })
      .catch((err) => {
        let errorNotification = document.getElementById("error-div");
        errorMessage = err.response.data.msg;
        errorNotification.style.display = "block";
        errorNotification.style.background = "#f8d7da";
        errorNotification.style.border = "red";
        errorNotification.textContent = errorMessage;
      });
    };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container">
        <div id="error-div" class="alert alert-danger">
          {errorMessage || ""}
        </div>
        <h1 className="form-title">Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              name="username"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Sign In" />
          <Link to="/register">Don't have an account? Sign up here!</Link>
        </form>
      </div>
    </>
  );
};
export default Login;
