import React from "react";
import { Link } from "react-router-dom";
export default function Consultvideo() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Talk With Your Doctor</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Talk With Your Doctor</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="zoom-consult mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-heading">
                <h5>Consult</h5>
                <h2>Talk With Your Doctor</h2>
                <p>
                  Commodo tempus sapien sit bibendum sit morbi auctor molestie
                  rutrum pellentesque eget vitae justo congue amet malesuada.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="video-screen">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="video-screens">
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <iframe
                            width="300"
                            height="315"
                            src="https://www.youtube.com/embed/FmsWxnxHW_o"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <iframe
                            width="300"
                            height="315"
                            src="https://www.youtube.com/embed/FmsWxnxHW_o"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="running-question">
                      <h4>Question for you</h4>
                      <div className="video-question zoom-question">
                        <h5>What are you afraid for?</h5>
                        <br />
                        <ul>
                          <li>
                            <button className="btn">Social Gathering?</button>
                          </li>
                          <li>
                            <button className="btn">
                              Having a problem related to study/job?
                            </button>
                          </li>
                          <li>
                            <button className="btn">Drugs</button>
                          </li>
                          <li>
                            <button className="btn">Fear of something</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="running-question">
                      <div className="video-question zoom-question">
                        <h5>What are you afraid for?</h5>
                        <br />
                        <div className="form-inline">
                          <input type="checkbox" name="" id="" />
                          <span>Drugs</span>
                        </div>
                        <div className="form-inline">
                          <input type="checkbox" name="" id="" />
                          <span>Social Gathering</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 p-none">
                <div className="footer-bottom">
                  <ul>
                    <li>
                      <i className="fa fa-microphone" aria-hidden="true"></i>
                      <h4>Mute</h4>
                    </li>
                    <li>
                      <i className="fa fa-video-camera" aria-hidden="true"></i>
                      <h4>Stop video</h4>
                    </li>
                    <li>
                      <i className="fa fa-shield" aria-hidden="true"></i>
                      <h4>Security</h4>
                    </li>
                    <li>
                      <i className="fa fa-user-plus" aria-hidden="true"></i>
                      <h4>Participants</h4>
                    </li>

                    <li className="leave-btn">
                      <button className="btn btn-danger">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
