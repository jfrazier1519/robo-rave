import React from "react";
import logo from "../../assets/favicon.png"; // Adjust the path as necessary
import "./Navbar.css";

const Navbar = () => {
  const onHandleLogin = () => {};

  return (
    <nav className="navbar bg-custom text-white outline">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {" "}
          {/* Logo at the far left */}
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
        </div>

        <div className="search-container ">
          {" "}
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div className="login-container d-flex justify-content-end">
          {" "}
          {/* Log In button at the far right */}
          <button
            className="btn btn-primary"
            type="button"
            onClick={onHandleLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
