import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/authService";

export const Login = () => {
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let user = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      await login(user).then((res) => {
        if (res.data.success) {
          history.push("/");
        }
      });
    } catch (error) {
      alert("Error logging in please try again");
    }
  };

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
