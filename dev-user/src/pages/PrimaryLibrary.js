import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import globalDataLive from "../utill/rdxLive";
import Slider from "react-slick";
import Login from "./Login";
import {
  API_ADMIN_URL,
  DIGITAL_HUMAN_LIBRARY_DATA_API,
} from "../utill/api.endpoints";
export default function PrimaryLibrary() {
  const [libraryData, setlibraryData] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [humanId, setHumanId] = useState("");
  const [show, setshow] = useState(false);
  let hist = useNavigate();

  //library api
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
        {
          window.localStorage.getItem("Token");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const settingstwo = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect((props) => {
    libraryDatalist();
  }, []);
  useEffect(() => {
    let local = localStorage.getItem("Token");
    if (local) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);
  const pleasetalk = (_id) => {
    // let local = localStorage.getItem("Token");
    // if (local) {
      setHumanId(_id);
      console.log(_id);
      console.log(humanId);
      return true;
    // } else {
      // setAlerdata({ title: "Sorry", body: "Login and registration First" });
      // setshow(true);
      // return false;
    // }
  };
  const filtercoach = libraryData.filter((element) =>
    element?.type?.includes((element = "Life Coach"))
  );
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
  const loginsubmits = (url = 0) => {
    let local = localStorage.getItem("Token");
    if (local) {
      if (url !== 0) {
        window.open(url, "_blank");
      }
    } else {
      setAlerdata({ title: "Sorry", body: "Login and registration First" });
      setshow(true);
    }
  };
  const filtermentor = libraryData.filter((element) =>
    element?.type?.includes((element = "Mentor"))
  );
  const joingroup = (_id) => {
    let local = localStorage.getItem("Token");
    if (local) {
      setHumanId(_id);
      console.log(_id);
      console.log(humanId);
      return true;
    } else {
      setAlerdata({ title: "Sorry", body: "Login and registration First" });
      setshow(true);
      return false;
    }
  };
  const handleClose = () => setshow(false);

  return (
    <>
      <Login  humanId={humanId} />
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Human Digital Library</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Human Digital Library</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="research-section mb-50">
        {/* Digital Human Library */}
        <div id="humanlibrary" className="library-section mb-50">
          <div className="container">
            {/* <div className="row"> */}
            <div className="col-lg-12">
              <div className="service-heading">
                {/* <h5>Digital Human Library</h5> */}
                <h3>Digital Human Library</h3>
                <h5>Life Coaches</h5>

                <p>
                  Find yourself coach, He/She can help you to overcome your
                  inhibitions, learn from their experiences
                </p>
              </div>
            </div>
            <div className="service-slide">
              <Slider {...settingstwo}>
                {filtercoach.map((element) => (
                  <div className="col-lg-13">
                    <div className="library-card">
                      {/* <div className="row"> */}
                      <div className="col-lg-16 offset-1">
                        <div className="library-person">
                          <div className="d-flex">
                            <div className="">
                              <div className="col-9">
                                <img src={element.image} alt="" />
                              </div>
                              <div className="mr-8">
                                <h3>{element.title}</h3>
                                <h5>{element.motivator_status}</h5>
                              </div>
                            </div>
                            <div className="col-lg-7 mr-4">
                              <video
                                id="my-library-video"
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
                          </div>
                        </div>
                      </div>
                      <div className="ml-3">
                        <button
                          className="btn-web col-11 hvr-float-shadow"
                          onClick={() =>
                            loginsubmit(`/library?humanId=${element._id}`)
                          }
                        >
                          View More
                        </button>
                        <button
                          // onClick={() =>loginsubmit()}
                          onClick={() => pleasetalk(element._id)}
                          data-toggle="modal"
                          data-target= "#library-modal" 
                          className="btn-web col-11 mt-2 hvr-float-shadow"
                        >
                          Personal therapy
                          
                        </button>
                         

                        <button
                          className="btn-web col-11 mt-2 hvr-float-shadow"
                          data-toggle="modal"
                          data-target="#library-modalgroup"
                          onClick={() => joingroup(element._id)}
                        >
                          Group therapy
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* </div> */}
          </div>
          
        </div>
        <hr />
        <div className="library-section mb-50">
          <div className="container">
            {/* <div className="row"> */}
            <div className="col-lg-12">
              <div className="service-heading">
                <h5>Mentors</h5>
                <p>
                  Find yourself mentor, He/She can help you to overcome your
                  inhibitions, learn from their experiences
                </p>
              </div>
            </div>
            <div className="service-slide">
              <Slider {...settingstwo}>
                {filtermentor.map((element) => (
                  <div className="col-lg-13">
                    <div className="library-card">
                      {/* <div className="row"> */}
                      <div className="col-lg-16 offset-1">
                        <div className="library-person">
                          <div className="d-flex">
                            <div className="">
                              <div className="col-9">
                                <img src={element.image} alt="" />
                              </div>
                              <div className="mr-8">
                                <h3>{element.title}</h3>
                                <h5>{element.video_type}</h5>
                              </div>
                            </div>
                            <div className="col-lg-7 mr-4">
                              {/* <div className="library-video"> */}
                              <video
                                id="my-library-video"
                                class="video-js"
                                controls
                                preload="auto"
                                poster={element.thumbnail_image}
                                data-setup=""
                                loop="auto"
                              >
                                <source src={element.video} type="video/mp4" />
                              </video>
                              {/* </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-3">
                        <button
                          className="btn-web col-11 hvr-float-shadow"
                          onClick={() =>
                            loginsubmit(`/library?humanId=${element._id}`)
                          }
                        >
                          View More
                        </button>
                        {/* <a href={globalDataLive.liveLink} target="_blank"> */}
                        <button
                          className="btn-web col-11 mt-2 hvr-float-shadow"
                          onClick={() => loginsubmits(globalDataLive.liveLink)}
                        >
                          Join Live Session
                        </button>
                        {/* </a> */}
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* </div> */}
          </div>
        </div>
        <br />
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
