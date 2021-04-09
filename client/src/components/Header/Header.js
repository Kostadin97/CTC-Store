import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import { Nav, Navbar, Button, Row, Col } from "react-bootstrap";

import axios from "axios";

import { UserContext } from "../../UserContext";

import "./Header.css";

import {activeClassHelper} from "../../Helpers/ActiveClassHelper";

const Header = (props) => {
  const history = useHistory();
  const location = props.location.pathname;
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    activeClassHelper(user, location);
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <Link className="nav-link nav-logo" to="/">
          C T C
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link" id="nav-home">
            Home
          </Nav.Link>

          {user ? (
            <>
              <Nav.Link
                as={Link}
                to="/create"
                className="nav-link"
                id="nav-create"
              >
                Create
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/my-products"
                className="nav-link"
                id="nav-myproducts"
              >
                My Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/favourites"
                className="nav-link"
                id="nav-favourites"
              >
                Favourites
              </Nav.Link>
            </>
          ) : (
            ""
          )}
        </Nav>
        <Nav>
          {user ? (
            <Nav.Link
              as={Button}
              id="logout-btn"
              onClick={logoutHandler}
              className="nav-link "
            >
              Logout
            </Nav.Link>
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

export default withRouter(Header);
