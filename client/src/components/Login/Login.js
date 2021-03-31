import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as authService from "../../services/authService";

import Header from "../../components/Header/Header";

import "./Login.css";

const Login = ({ history }) => {
  const user = localStorage.getItem("token");
  const isLoggedIn = user ? true : false;

  const onSubmit = async (e) => {
    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    authService.login(user).then((res) => {
      if (res.data.success) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers["Authorization"] = token;
        history.push("/");
      }
    });
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="container">
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
