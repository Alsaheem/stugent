import React from "react";
import { Link } from "react-router-dom";
import { authLogout } from "../../api/api";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logo.png" className="logo" alt />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item active mr-3">
                <Link to="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/listings">
                  <a className="nav-link">Featured Listings</a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <Link to="/register">
                  <a className="nav-link">
                    <i className="fas fa-user-plus" /> Register
                  </a>
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/login">
                  <a className="nav-link">
                    <i className="fas fa-sign-in-alt" />
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
