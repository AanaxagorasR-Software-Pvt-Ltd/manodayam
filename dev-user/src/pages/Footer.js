import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="footer-logo pd-add">
                <img src="assets/image/logo.png" alt="" />
                <ul>
                  <li class="hvr-float-shadow">
                    <a href="https://www.facebook.com" target="_blank">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="hvr-float-shadow">
                    <a href="https://www.instagram.com" target="_blank">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="hvr-float-shadow">
                    <a href="https://www.twitter.com" target="_blank">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="hvr-float-shadow">
                    <a href="https://www.linkedin.com" target="_blank">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="footer-navs">
                <ul>
                  {/* <li>
                    <Link to="/Home">Home</Link>
                  </li> */}
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <Link to="/support">Support Network</Link>
                  </li>
                  <li>
                    <Link to="/research">Research</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="copyright-section">
                <p>Copyright &copy; 2021 All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
