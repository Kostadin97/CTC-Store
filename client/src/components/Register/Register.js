import { useState } from "react";
import { Link } from "react-router-dom";

import * as authService from "../../services/authService";
import Error from "../../components/Error/Error";

const Register = ({ history }) => {
  const [error, setError] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();

    let user = {
      name: e.target.name.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    authService
      .register(user)
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  };

  return (
    <div className="container">
      <br />
      <Error error={error} />
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={registerHandler}>
        <div className="form-group">
          <input
            name="name"
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
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
        <div className="form-group">
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Sign Up" />
        <Link to="/login">Already have an account? Sign in here!</Link>
      </form>
    </div>
  );
};

export default Register;
