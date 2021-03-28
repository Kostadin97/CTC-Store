import React from "react";
import { Link } from "react-router-dom";

import * as authService from "../../services/authService";

import "./Login.css";

const Login = ({ history }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    authService
      .login(user)
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
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
  );
};
export default Login;
