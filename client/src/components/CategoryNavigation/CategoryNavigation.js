import { Link } from "react-router-dom";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
    </nav>
  );
};

export default CategoryNavigation;
