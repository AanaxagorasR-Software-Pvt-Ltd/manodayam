import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import globalDataGroupCall from "../utill/rdxGroupCall";
import globalDataLive from "../utill/rdxLive";
import { useNavigate } from "react-router-dom";
import {
  API_ADMIN_URL,
  DIGITAL_HUMAN_LIBRARY_DATA_API,
} from "../utill/api.endpoints";
export default function Library(props) {
  const [libraryData, setlibraryData] = useState([]);
  const [show, setshow] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [humanId, setHumanId] = useState("");

  // console.log(params.get('humanId'));
  let params = new URLSearchParams(window.location.search);
  let hist = useNavigate();
  const libraryDatalist = () => {
    console.log(`${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY_DATA_API}`);
    const libraryDatalisting = {
      collectiondata: "library_content",
    };
    axios
      .post(
        // ?humanId=${}`

        `${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY_DATA_API}?humanId=${params.get(
          "humanId"
        )}`,
        libraryDatalisting
      )

      .then((res) => {
        setlibraryData(res.data.data);
        console.log("====libraryContent====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let local = localStorage.getItem("Token");
    libraryDatalist();
    if (local) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);
  const loginsubmits = (url = 0) => {
    let local = localStorage.getItem("Token");
    if (local) {
      if (url !== 0) {
        window.open(url, "_blank");
      }
    }
  };
  const pleasetalk = (_id) => {
    let local = localStorage.getItem("Token");
    if (local) {
      setHumanId(_id);
      console.log(_id);
      console.log(humanId);
      return true;
    } else {
      return false;
    }
  };
  const joingroup = (_id) => {
    let local = localStorage.getItem("Token");
    if (local) {
      setHumanId(_id);
      console.log(_id);
      console.log(humanId);
      return true;
    } else {
      return false;
    }
  };
  // const filtermentor = libraryData.filter((element) =>
  //   element?.type?.includes((element = "Mentor"))
  // );
  // let filtermentor = libraryData.filter((element) =>
  //   element?.type?.includes((element = "Life Coach"))
  // );

  return (
    <>
      <Login humanId={humanId} />
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
      {libraryData.map((element) => (
        <div className="about-section mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-heading">
                  <h5>Human Digital Library</h5>
                  <h2>{element.type}</h2>
                </div>
              </div>

              <div className="col-lg-10 offset-1 ">
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
                          <source src={element.video} type="video/mp4" />
                        </video>
                      </div>
                      <div className="ml-3 mt-3">
                        <div>
                        <Link to="/">
                          <button
                            // onClick={() =>loginsubmit()}
                            // onClick={() => Home}
                            className="btn-web col-11 mt-2"
                          >
                            <i className="fas fa fa-arrow-left"> </i> &nbsp;
                            Go Back
                          </button>
                          </Link>
                        </div>
                      </div>

                      {/* <div className="ml-3 mt-3">
                          <div>
                            <button
                              // onClick={() =>loginsubmit()}
                              onClick={() => pleasetalk(element._id)}
                              data-toggle="modal"
                              data-target={isLoggedIn ? "#library-modal" : ""}
                              className="btn-web col-11 mt-2"
                            >
                              Personal therapy
                            </button>

                            <button
                              className="btn-web col-11 mt-2"
                              data-toggle="modal"
                              data-target={
                                isLoggedIn ? "#library-modalgroup" : ""
                              }
                              onClick={() => joingroup(element._id)}
                            >
                              Group therapy
                            </button>
                          </div>
                          <button
                            className="btn-web col-11 mt-2"
                            onClick={() =>
                              loginsubmits(globalDataLive.liveLink)
                            }
                          >
                            Join Live Session
                          </button>
                      </div> */}
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
