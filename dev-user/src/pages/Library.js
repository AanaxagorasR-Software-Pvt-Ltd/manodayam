import React from "react";
import { Link } from "react-router-dom";
export default function Library() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Digital Human Library</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Digital Human Library</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-heading">
                <h5>Library</h5>
                <h2>Digital Human Library</h2>
                <p>
                  Commodo tempus sapien sit bibendum sit morbi auctor molestie
                  rutrum pellentesque eget vitae justo congue amet malesuada.
                </p>
              </div>
            </div>

            <div className="col-lg-10 offset-1">
              <div className="library-card">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="library-video">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/sHO5bL02fOQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-1">
                    <div className="library-person">
                      <div className="row">
                        <div className="col-3">
                          <img src="image/doctor-img.jpg" alt="" />
                        </div>
                        <div className="col-9">
                          <h3>Jim Rohn</h3>
                          <h5>Motivational Speaker</h5>
                        </div>
                      </div>
                      <p>
                        Emanuel James "Jim" Rohn was born in Yakima, Washington,
                        to Emmanuel and Clara Rohn. The Rohns owned and worked a
                        farm in Caldwell, Idaho, where Jim grew up, being the
                        only child.{" "}
                      </p>
                      <p>
                        Rohn left college after just one year and started his
                        professional life by working as a human resource manager
                        for department store Sears.
                      </p>
                      <button
                        className="btn-web hvr-float-shadow"
                        data-toggle="modal"
                        data-target="#library-modal" 
                      >
                        Talk With him
                      </button>
                      <button className="btn-web hvr-float-shadow">
                        <i className="fa fa-inr"></i> 1299
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 offset-1">
              <div className="library-card">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="library-video">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/sHO5bL02fOQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-1">
                    <div className="library-person">
                      <div className="row">
                        <div className="col-3">
                          <img src="image/doctor-img.jpg" alt="" />
                        </div>
                        <div className="col-9">
                          <h3>Jim Rohn</h3>
                          <h5>Motivational Speaker</h5>
                        </div>
                      </div>
                      <p>
                        Emanuel James "Jim" Rohn was born in Yakima, Washington,
                        to Emmanuel and Clara Rohn. The Rohns owned and worked a
                        farm in Caldwell, Idaho, where Jim grew up, being the
                        only child.{" "}
                      </p>
                      <p>
                        Rohn left college after just one year and started his
                        professional life by working as a human resource manager
                        for department store Sears.
                      </p>
                      <button
                        className="btn-web hvr-float-shadow"
                        data-toggle="modal"
                        data-target="#library-modal" > Talk With him</button>
                      <button className="btn-web hvr-float-shadow">free</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 offset-1">
              <div className="library-card">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="library-video">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/sHO5bL02fOQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-1">
                    <div className="library-person">
                      <div className="row">
                        <div className="col-3">
                          <img src="image/doctor-img.jpg" alt="" />
                        </div>
                        <div className="col-9">
                          <h3>Jim Rohn</h3>
                          <h5>Motivational Speaker</h5>
                        </div>
                      </div>
                      <p>
                        Emanuel James "Jim" Rohn was born in Yakima, Washington,
                        to Emmanuel and Clara Rohn. The Rohns owned and worked a
                        farm in Caldwell, Idaho, where Jim grew up, being the
                        only child.{" "}
                      </p>
                      <p>
                        Rohn left college after just one year and started his
                        professional life by working as a human resource manager
                        for department store Sears.
                      </p>
                      <button
                        className="btn-web hvr-float-shadow"
                        data-toggle="modal"
                        data-target="#library-modal"
                      >
                        Talk With him
                      </button>
                      <button className="btn-web hvr-float-shadow">
                        <i className="fa fa-inr"></i> 1989
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
