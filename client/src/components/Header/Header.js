import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";

import { UserContext } from "../../UserContext";

import "./Header.css";

const Header = (props) => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="nav-link" to="/">
          CTC
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>

          {user ? (
            <>
              <Nav.Link as={Link} to="/create" className="nav-link">
                Create
              </Nav.Link>
              <Nav.Link as={Link} to="/my-products" className="nav-link">
                My Products
              </Nav.Link>
              <Nav.Link as={Link} to="/favourites" className="nav-link">
                Favourites
              </Nav.Link>
            </>
          ) : (
            ""
          )}
        </Nav>
        <Nav>
          {user ? (
            <>
              <Nav.Link
                as={Button}
                id="logout-btn"
                onClick={logoutHandler}
                className="nav-link"
              >
                Logout
              </Nav.Link>
              <Nav.Link
                as={Link}
                id="profile"
                to="/profile"
                className="nav-link active"
              >
                Profile
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                as={Link}
                id="login-btn"
                to="/login"
                className="nav-link"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                id="register-btn"
                to="/register"
                className="nav-link"
              >
                Register
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
