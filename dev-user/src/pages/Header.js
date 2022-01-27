import React from "react";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
export default function Header() {
  {
    console.log("******j*", localStorage.getItem("Token"));
  }
  const [update, setupdate] = useState(localStorage.getItem("Token"));
  return (
    <>
      {/* <Login /> */}
      <fixed className="fixed">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-4">
                <div className="top-logo">
                  <Link to="/">
                    <img src="assets/image/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-sm-8">
                <div className="header-contact">
                  <button
                    className="btn-web hvr-float-shadow"
                    data-toggle="tooltip"
                    title="Profile!"
                  >
                    <Link to="/profile">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </Link>
                  </button>
                  <button
                    className="btn-web hvr-float-shadow"
                    data-toggle="tooltip"
                    title="Cart!"
                  >
                    {" "}
                    <Link to="/cart">
                      <i
                        className="fa fa-cart-arrow-down"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </button>
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  <a href="telto:+91 7428409721">+91 7428409721</a>
                  <p>contact us for help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="web-header">
          <div className="container">
            <nav className="navbar navbar-expand-md">
              <a className="navbar-brand d-logo" href="#">
                <img src="assets/image/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars"></i>
                </span>
              </button>

              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav nav-custom">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/support" className="nav-link">
                      Support
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/library" className="nav-link">
                      Digital Human Library
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/research" className="nav-link">
                      Research
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav nav-custom ml-auto btn-nav">
                  <li className="nav-item">
                    <button
                      className="btn-web hvr-float-shadow ipad-none"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Login
                    </button>
                  </li>

                  {/* <li className="nav-item">
                    <button
                      className="btn-web hvr-float-shadow ipad-btn"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Login
                    </button>
                  </li> */}
                  <li className="nav-item">
                    <button
                      className="btn-web hvr-float-shadow ipad-none"
                      data-toggle="modal"
                      data-target="#registermodal"
                    >
                      Register
                    </button>
                  </li>
                  {/* <li className="nav-item">
                    <button
                      className="btn-web hvr-float-shadow"
                      data-toggle="modal"
                      data-target="#doctor-modal"
                    >
                      Doctor
                    </button>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </fixed>

      <a href="#" className="scrollToTop">
        <i className="fa fa-hand-pointer-o" aria-hidden="true"></i>
      </a>
    </>
  );
}
