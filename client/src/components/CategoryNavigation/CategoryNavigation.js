import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <Nav className="justify-content-center category-nav">
      <Nav.Item>
        <Nav.Link
          className="category-link"
          as={Link}
          to="/categories/all"
          id="all-category"
        >
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="category-link"
          as={Link}
          to="/categories/Clothes"
          id="clothes-category"
        >
          Clothes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="category-link"
          as={Link}
          to="/categories/Shoes"
          id="shoes-category"
        >
          Shoes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="technologies-category"
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
