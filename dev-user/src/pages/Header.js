import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal as Bmodal, Button } from "react-bootstrap";
export default function Header() {
  let hist = useNavigate();
  {
    console.log("******j*", localStorage.getItem("Token"));
  }
  const [update, setupdate] = useState(localStorage.getItem("Token"));
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [loginhide, setloginhide] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("Token");
    if (token) setloginhide(true);
  });

  const logoutfunction = () => {
    // let decision = window.confirm('Are you sure');
    setAlerdata({ title: "Logout", body: "Login out !!" });
    setshow(true);

    // setshow(true)
    // if (decision) {
    localStorage.removeItem("Token");
    localStorage.removeItem("user");
    window.location.reload();
    hist.push("/");

    // }
  };
  const loginsubmit = (url = 0) => {
    let local = localStorage.getItem("Token");
    if (local) {
      if (url !== 0) {
        hist(url);
      }
    } else {
      setAlerdata({ title: "Sorry", body: "Login and registration First" });
      setshow(true);
    }
  };
  const handleClose = () => setshow(false);

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
                    onClick={() => loginsubmit("/profile")}
                  >
                    {/* <Link to="/profile"> */}
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    {/* </Link> */}
                  </button>
                  <button
                    className="btn-web hvr-float-shadow"
                    data-toggle="tooltip"
                    title="Cart!"
                    onClick={() => loginsubmit("/cart")}
                  >
                    {/* <Link to="/cart"> */}
                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    {/* </Link> */}
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
                    {/* <Link to="/support" className="nav-link">
                    Support
                    </Link> */}
                    <a href="#support" className="nav-link">
                      Support
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#humanlibrary" className="nav-link">
                      Digital Human Library
                    </a>
                    {/* <Link to="/library" className="nav-link">
                      Digital Human Library
                    </Link> */}
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
                  {!loginhide && (
                    <li className="nav-item">
                      <button
                        className="btn-web hvr-float-shadow "
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Login
                      </button>
                    </li>
                  )}

                  {/* <li className="nav-item">
                    <button
                      className="btn-web hvr-float-shadow ipad-btn"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Login
                    </button>
                  </li> */}
                  {!loginhide && (
                    <li className="nav-item">
                      <button
                        className="btn-web hvr-float-shadow"
                        data-toggle="modal"
                        data-target="#registermodal"
                      >
                        Register
                      </button>
                    </li>
                  )}

                  {loginhide && (
                    <li className="nav-item">
                      <button
                        className="btn-web hvr-float-shadow"
                        onClick={logoutfunction}
                      >
                        Logout
                      </button>
                    </li>
                  )}
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
      <Bmodal show={show}>
        <Bmodal.Header closeButton>
          <Bmodal.Title className="modal-head">{alertData.title}</Bmodal.Title>
        </Bmodal.Header>
        <Bmodal.Body className="modal-body">{alertData.body}</Bmodal.Body>

        <Bmodal.Footer>
          <Button className="modal-btn-ok" onClick={handleClose}>
            ok
          </Button>
        </Bmodal.Footer>
      </Bmodal>
    </>
  );
}
