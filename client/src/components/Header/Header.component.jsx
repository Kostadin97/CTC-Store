import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
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
              <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link className="nav-link" to="/login" >Login</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
