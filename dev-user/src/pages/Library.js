import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  API_ADMIN_URL,
  DIGITAL_HUMAN_LIBRARY_DATA_API,
} from "../utill/api.endpoints";
export default function Library(props) {
  const [libraryData, setlibraryData] = useState([]);
  const libraryDatalist = () => {
    console.log(`${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY_DATA_API}`);
    const libraryDatalisting = {
      collectiondata: "library_content",
    };
    axios
      .post(
        `${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY_DATA_API}`,
        libraryDatalisting
      )
      .then((res) => {
        setlibraryData(res.data.data);
        console.log("====libraryContent====", res.data.data);
      }).catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    libraryDatalist();
  }, []);
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
              {libraryData.map((element) => (
                <div className="library-card">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="library-video">

                        <video
                          id="my-video"
                          class="video-js"
                          controls
                          preload="auto"
                          poster={element.thumbnail_image}
                          data-setup=""
                          loop="auto"
                        >
                          <source
                            src={element.video}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>

                    <div className="col-lg-6 offset-1">
                      <div className="library-person">
                        <div className="row">
                          <div className="col-3">
                            <img src="image/doctor-img.jpg" alt="" />
                          </div>
                          <div className="col-9">
                            <h3>{element.title}</h3>
                            <h5>Motivational Speaker</h5>
                          </div>
                        </div>
                        <p>{element.description}</p>
                        {/* <button
                          className="btn-web hvr-float-shadow"
                          data-toggle="modal"
                          data-target="#library-modal"
                        >
                          Talk With him
                        </button>
                        <button className="btn-web hvr-float-shadow">
                          <i className="fa fa-inr"></i> 1299
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
