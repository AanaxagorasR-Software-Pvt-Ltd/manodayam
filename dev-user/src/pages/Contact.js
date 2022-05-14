import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>contact Us</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-details">
                <h5>Change Your Life</h5>
                <h2>Contact Me Now</h2>
                <p>
                  Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
                  velit sed. Arcu vitae elementum vitae nunc.
                </p>

                <div className="pd-add">
                  <h4>Address</h4>
                  <p>
                    MEDTECH Incubation Center 3rd Floor, New library building ,
                    Sanjay Gandhi Postgraduate Institute of Medical Sciences
                    (SGPGI) New PMSSY Rd, Raibareli Rd,Lucknow,Uttar Pradesh
                  </p>
                </div>
                <div className="pd-add">
                  <h4>Phone Number & Email</h4>
                  <a href="">+91 8882832500</a>
                  <br />
                  <a href="">info@manodsyam.com</a>
                </div>
                <div className="pd-add">
                  {/* <h4>Follow Us On-</h4> */}
                  {/* <ul>
                    <li className="hvr-float-shadow">
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="hvr-float-shadow">
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="hvr-float-shadow">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="hvr-float-shadow">
                      <a href="">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6">
              <div className="contact-form">
                <h4>Send me a message!</h4>
                <form action="">
                  <div className="form-group">
                    <label for="">Name</label>
                    <input type="text" name="" id="" placeholder="Your name " />
                  </div>
                  <div className="form-group">
                    <label for="">Email</label>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Your email "
                    />
                  </div>
                  <div className="form-group">
                    <label for="">Phone</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your mobile no. "
                    />
                  </div>
                  <div className="form-group">
                    <label for="">Message</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Type your query here... "
                    ></textarea>

                    <button className="btn-web hvr-float-shadow">
                      send message
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <a href="#howwedo">
        <div
          data-placement="top"
          tabindex="0"
          data-toggle="tooltip"
          title="Previous page"
          className="bd-dark"
        >
          <li className="scrollToTop fa fa-chevron-left backbtn"></li>
        </div>
      </a>
    </>
  );
}
