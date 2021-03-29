import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand ctc" href="#">
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
            <Link className="nav-link" to="/">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/263/263115.svg?token=exp=1616881778~hmac=75d3ac23d17d4e143d55be689f8de629"
                width="30px"
                alt="Home"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/748/748113.svg?token=exp=1616882258~hmac=53a054465428359d8b0e4e59b7e83e56"
                width="30px"
                alt="Create"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favourites">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/833/833300.svg?token=exp=1617051826~hmac=739af9c45a0cb65d211b7f8b0bf5fcc2"
                width="30px"
                alt="Favourites"
              />
            </Link>
          </li>
        </ul>
      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/747/747376.svg?token=exp=1616883858~hmac=a248d2d49cbf8b6d53c386ffc263e5c8"
              width="30px"
              alt="Profile"
            />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/992/992680.svg?token=exp=1616884012~hmac=f1c1b152306c3c016a52a7d72b927e47"
              width="30px"
              alt="Logout"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
