import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";

import "./Header.css";

const Header = (props) => {
  console.log(props);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        CTC
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="nav-item active">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/favourites" className="nav-link">
                  Favourites
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {isLoggedIn ? (
            <li id="logout-btn" className="nav-item active">
              <button
                id="logout-btn"
                onClick={logoutHandler}
                className="nav-link"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link id="login-btn" to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link id="register-btn" to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
