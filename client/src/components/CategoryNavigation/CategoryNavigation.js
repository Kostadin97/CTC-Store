import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <Nav className="justify-content-center category-nav">
      <Nav.Item>
        <Nav.Link className="category-link" as={Link} to="/categories/all">
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="category-link" as={Link} to="/categories/Clothes">
          Clothes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="category-link" as={Link} to="/categories/Shoes">
          Shoes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="category-link"
          as={Link}
          to="/categories/Technologies"
        >
          Technologies
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CategoryNavigation;
