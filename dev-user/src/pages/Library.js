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
  let hist = useNavigate();
  const libraryDatalist = () => {
    console.log(`${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY_DATA_API}`);
    const libraryDatalisting = {
      collectiondata: "library_content",
    };
    axios
      .post(
        // ?humanId=${}`
        `${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY_DATA_API}`, libraryDatalisting)
      .then((res) => {
        setlibraryData(res.data.data);
        console.log("====libraryContent====", res.data.data);
      }).catch((error) => {
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

      <div className="about-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-heading">
                <h5>Library</h5>
                <h2>Digital Human Library</h2>
                 
              </div>
            </div>

            <div className="col-lg-10 offset-1 ">
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
                      <div className="ml-3 mt-3">
                        {/* <button
                          className="btn-web col-11"
                          onClick={() => loginsubmits(`/library?humanId=${element._id}`)}

                        >
                          View More
                        </button> */}
                        {/* <a href={globalDataLive.liveLink} target="_blank"> */}
                        <button
                          className="btn-web col-11 mt-2"

                          onClick={() => loginsubmits(globalDataLive.liveLink)}
                        >
                          Please Join Live Session
                        </button>
                        {/* </a> */}
                        <button
                          // onClick={() =>loginsubmit()}
                          onClick={() => pleasetalk(element._id)}
                          data-toggle="modal"
                          data-target={isLoggedIn ? "#library-modal" : ""}
                          className="btn-web col-11 mt-2"
                        >
                          Please Talk
                        </button>
                        {/* <button
                        // onClick={() =>loginsubmit()}
                        onClick={() => submitformdata(element._id)}
                        data-toggle="modal"
                        data-target="#library-modal"
                        className="btn-web col-11 mt-2"
                      >
                        Please Talk
                      </button> */}
                        {/* <a
                        href={globalDataGroupCall.groupCallLink}
                        target="_blank"
                      > */}
                        <button
                          className="btn-web col-11 mt-2"
                          onClick={() =>
                            loginsubmits(globalDataGroupCall.groupCallLink)
                          }
                        >
                          Join Group
                        </button>
                        {/* </a> */}
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
