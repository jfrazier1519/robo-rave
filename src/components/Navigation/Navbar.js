import React from "react";
import logo from "../../assets/favicon.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="navbar sticky-top bg-custom text-white outline">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-middle mx-2"
          />
          Robo Rave
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
