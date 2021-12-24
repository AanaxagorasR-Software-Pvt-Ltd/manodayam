import React from "react";
import { Link } from "react-router-dom";
export default function Spirituality() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Spirituality</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>spirituality</li>
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
                <h5>Sprituality</h5>
                {/* <h2>What Are We All So Afraid Of?</h2> */}
                <h3>What do you worry about?</h3>
              </div>
            </div>
            <div className="col-lg-6 offset-3">
              <div className="video-question">
                <ul>
                  <li>
                    <button className="btn spr-btn">Social Gathering?</button>
                  </li>
                  <li>
                    <button className="btn spr-btn">
                      Having a problem related to study/job?
                    </button>
                  </li>
                  <li>
                    <button className="btn spr-btn">Drugs</button>
                  </li>
                  <li>
                    <button className="btn spr-btn">Fear of something</button>
                  </li>
                </ul>
                <button className="ctn-btn btn btn-web cnt-btn hvr-float-shadow">
                  <a href="http://localhost:3002">Continue &nbsp;</a>
                </button>
              </div>
            </div>

            {/* <div className="col-lg-12">
              <div className="related-videos">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="related-video-heading">
                      <h2>Videos For You</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum mollitia non officiis, ea deserunt saepe!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/BVJkf8IuRjE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/xsEJ6GeAGb0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/lhlw44iN-LA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/BVJkf8IuRjE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/xsEJ6GeAGb0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/lhlw44iN-LA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/BVJkf8IuRjE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/xsEJ6GeAGb0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/lhlw44iN-LA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/BVJkf8IuRjE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/xsEJ6GeAGb0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-card">
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/lhlw44iN-LA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
