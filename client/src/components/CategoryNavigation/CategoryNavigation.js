import { Link } from "react-router-dom";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <ul className="category-nav nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/categories/all">
          All
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories/Hat">
          Hat
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories/Shoe">
          Shoe
        </Link>
      </li>
    </ul>
  );
};

export default CategoryNavigation;
