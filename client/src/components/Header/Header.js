import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, Button, Row, Col } from "react-bootstrap";

import axios from "axios";

import { UserContext } from "../../UserContext";

import "./Header.css";

const Header = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    history.push("/");
  };

  return (
    <Row>
      <Col>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="nav-link nav-logo" to="/">
              CTC
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="nav-link active">
                Home
              </Nav.Link>

              {user ? (
                <>
                  <Nav.Link as={Link} to="/create" className="nav-link active">
                    Create
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/my-products"
                    className="nav-link active"
                  >
                    My Products
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/favourites"
                    className="nav-link active"
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
                <>
                  <Nav.Link
                    as={Button}
                    id="logout-btn"
                    onClick={logoutHandler}
                    className="nav-link active"
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
                    className="nav-link active"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    id="register-btn"
                    to="/register"
                    className="nav-link active"
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
