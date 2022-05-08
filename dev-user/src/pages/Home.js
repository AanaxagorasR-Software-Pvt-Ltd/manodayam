import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Modal as Bmodal, Button, Dropdown } from "react-bootstrap";
import logo from "./favicon.png";
import Ai from "./ai.jpeg";
import library from "./library.jpeg";
import sprituality from "./sprituality.jpeg";
import teledoctor from "./teledr.png";
import { FloatingLettersTextBuilder } from "react-animated-text-builders";
import voiceAssisstant from "../utill/rdxassisstant";

import {
  API_ADMIN_URL,
  // PRODUCT_API,
  BANNER_API,
  ABOUT_API,
  MASTERCATEGORY_API,
  SUBSCRIPTION_PLANE,
} from "../utill/api.endpoints";
const images = [];
export default function Home(props) {
  // const [responseData, setResponseData] = useState([]);
  const [bannerData, setbannerData] = useState([]);
  const [libraryData, setlibraryData] = useState([]);
  const [mastercategorys, setmastercategorys] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [data, setData] = useState([]);
  // const [state, setState] = useState("All");
  let hist = useNavigate();
  let params = new URLSearchParams(window.location.search);
  useEffect(() => {
    let local = localStorage.getItem("Token");
    if (local) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);
  // aboutlist
  const aboutlist = () => {
    console.log(`${API_ADMIN_URL}${ABOUT_API}`);
    const aboutlisting = {
      collectionAboutData: "about_us",
    };
    axios
      .post(`${API_ADMIN_URL}${ABOUT_API}`, aboutlisting)
      .then((res) => {
        setData(res.data.data);

        console.log("====pppppp====", res.data.data);
        {
          window.localStorage.getItem("Token");
        }
        // localStorage.setItem('Name', name);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // productlist
  // const Productlist = () => {
  //   console.log(`${API_ADMIN_URL}${PRODUCT_API}`);
  //   const productlisting = {
  //     collectiontype: "products",
  //   };
  //   axios
  //     .post(`${API_ADMIN_URL}${PRODUCT_API}`, productlisting)
  //     .then((res) => {
  //       setResponseData(res.data.data);

  //       console.log("====pppppp====", res.data.data);
  //       {
  //         window.localStorage.getItem("Token");
  //       }
  //       // localStorage.setItem('Name', name);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // Banner
  const BannerData = () => {
    console.log(`${API_ADMIN_URL}${BANNER_API}`);
    const bannerdata = {
      collectiontypedata: "banner",
    };
    axios
      .post(`${API_ADMIN_URL}${BANNER_API}`, bannerdata)
      .then((res) => {
        setbannerData(res.data.data);
        console.log("====bannerData====", res.data.data);
        {
          window.localStorage.getItem("Token");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect((props) => {
    // Productlist(props);
    BannerData();
    aboutlist();
  }, []);
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settingsnext = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //service slider
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
  const [humanId, setHumanId] = useState("");
  const submitformdata = (_id) => {
    setHumanId(_id);
    console.log(_id);
    console.log(humanId);
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
  const subchange = (e) => {
    let user = JSON.parse(localStorage.getItem("user"));
    hist(`/profile?usertype=${e}`);
    // axios
    //   .post(
    //     // ?humanId=${}`
    //     `${API_ADMIN_URL}${SUBSCRIPTION_PLANE}`,
    //   )
    //   .then((res) => {
    //     console.log("====mentalHealthData====", res.data);
    //     if (user) {
    //       hist(`/profile?catid=${e}`)
    //     } else {
    //       setAlerdata({ title: "Sorry", body: "Login and registration First" });
    //       setshow(true);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log();
  };
  const handleClose = () => setshow(false);

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
  const pleasetalk = (_id) => {
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
  const filtermentor = libraryData.filter((element) =>
    element?.type?.includes((element = "Mentor"))
  );
  const filtercoach = libraryData.filter((element) =>
    element?.type?.includes((element = "Life Coach"))
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
  const mastercategory = () => {
    console.log(`${API_ADMIN_URL}${MASTERCATEGORY_API}`);
    axios
      .get(`${API_ADMIN_URL}${MASTERCATEGORY_API}`)
      .then((res) => {
        setmastercategorys(res.data);
        console.log("====mentalHealthData====", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    mastercategory();
  }, []);
  return (
    <>
      <Login humanId={humanId} />
      <div className="web-banner-slider">
        <Slider {...settings}>
          {bannerData.map((element) => (
            <div className="web-banner mb-50">
              <div className="container">
                <div className="web-banner-content">
                  <marquee behavior="slide" direction="up">
                    <h1>{element.banner_text}</h1>
                  </marquee>
                  {/* <FloatingLettersTextBuilder
                    floatingSpeed={500}
                    lettersAppearanceDelay={250}
                    letterSpacing="20px"
                    animationMaxMargin="100px"
                    letterStyle={{
                      color: "#fff",
                      fontSize: "41px",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      marginTop: "105px",
                      fontFamily: "inherit",
                    }}
                  >
                    {element.banner_text}
                  </FloatingLettersTextBuilder> */}
                  <div className="d-flex">
                    <button
                      className="qst-show btn-web hvr-float-shadow btn-web"
                      onClick={() => loginsubmit("/spirituality")}
                    >
                      Register For Assessment
                    </button>
                    {/* <button
                      className="btn-web hvr-float-shadow btn-web"
                      onClick={() => loginsubmit("/support")}
                    >
                      Your Support Networks
                    </button> */}
                    <Dropdown>
                      <Dropdown.Menu className="scrollable-menu">
                        {mastercategorys.map((element) => (
                          <Dropdown.Item
                            as="p"
                            onClick={(e) => subchange(element._id)}
                          >
                            {element.mastercategory}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="qst-show btn-web hvr-float-shadow btn-web"
                      >
                        Choose Subscription plane
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="scrollable-menu">
                        {mastercategorys.map((element) => (
                          <Dropdown.Item
                            as="p"
                            onClick={(e) => subchange(element.mastercategory)}
                          >
                            {element.mastercategory}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div id="about" className="about-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <h5>ABOUT US</h5>
                <p>
                  We provide an Online holistic solution for Mental Health and
                  Wellness seekers through Web portal & Mobil App. This has been
                  initiated in collaboration with Mental Health Foundation of
                  India(MHFI) for technical, functional and strategic depth &
                  are backed & invested by STPI (Ministry of Electronics and
                  Information Technology , MieTY) Govt Of India, under DIGITAL
                  Health initiative called “ MediTech”.
                </p>

                <p>
                  We provide Unique Value proposition of integrating continual
                  mental health assessment and support networks including
                  Neuromodulation with Vedic methodology and latest scientific
                  techniques.
                </p>
                <p>
                  This platform is scaled to provide Solutions to Five different
                  Mental Health scenarios such as Depression, Panic, Stress,
                  Sleeplessness , Alcoholism, Substance Abuse, PSTD , Alzheimer
                  ,Bipolar, ADHD, Dementia, ,Alzheimer’s, Parkinson ,Juvenile
                  Delinquency, Autism & Sexual Disorders!! Though as per data
                  from Health experts and WHO , we have First seven scenarios as
                  majority of ongoing and potential scenarios.
                </p>
                <p>
                  These Solutions are driven by Artificial Intelligence
                  (AI)based on Patient-centric data including Genetic Markers,
                  Brain Scans and Complete Mental Health Mgmt.
                </p>
                <p>
                  We have a Comprehensive team of Experts like senior Clinical
                  Psychologist, Psychiatrists & Care-givers.
                </p>
                <p>
                  Expertise in Mathematical Modelling, Business Management, Big
                  Data Management, Statistical Analytics.
                </p>
                <p>
                  We have a special focus on Compliances to Clinical Trials,
                  Validations, Data Protection & Statute as a constant process.
                </p>
                {/* <Link to="/about-us">
                  <p className="text-primary font-italic">Read More</p>
                </Link> */}
                <img src="assets/image/rose.png" alt="" />
              </div>
            </div>
            <div>
              {data.map((element) => (
                <div className="col-lg-4">
                  <div>
                    <video
                      id="about-us-video-2"
                      controls
                      preload="auto"
                      poster={element.thumbnail_image}
                      data-setup=""
                      loop="auto"
                      className=""
                    >
                      <source src={element.video} type="video/mp4" />
                    </video>
                    <h6 className="about_title">{element.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* how we do */}
      <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              <h5>How We Do</h5>
              <div className="exam"></div>
              <p>
                Our Technology Architecture helps you to find the solutions to
                various possible mental/emotional scenarios which are or may be
                faced by you. Our Health experts have made sure that your
                THERAPIES are tailor made & driven basis SIX building blocks of
                our Online platform to help you find an apt solution for
                yourself
              </p>
            </div>
          </div>
          <div className="service-slide">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center mt-2">
                <div
                  className="flip-box mt-4 mr-4"
                  onClick={() => loginsubmits(voiceAssisstant.liveLink)}
                >
                  <div className="flip-box-inner ">
                    <div className="flip-box-front">
                      <p className="flip-para"> AI DRIVEN SELF-ASSESSMENT</p>
                    </div>
                    <div class="flip-box-back">
                      <img src={Ai} className="flip-img" alt="loading..." />
                    </div>
                  </div>
                </div>
                <div className="flip-box mr-2 ml-2">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/bookingAppoint")}
                  >
                    <div className="flip-box-front">
                      <p className="flip-para">
                        TELE-PSYCHIATRY CONNECT WITH DOCTORS
                      </p>
                    </div>
                    <div className="flip-box-back">
                      <img
                        src={teledoctor}
                        className="flip-img"
                        alt="loading..."
                      />
                    </div>
                  </div>
                </div>
                <div className="flip-box ml-4 mt-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/primary-library")}
                  >
                    <div className="flip-box-front">
                      <p className="flip-para"> DIGITAL HUMAN LIBRARY</p>
                    </div>
                    <div className="flip-box-back">
                      <img
                        src={library}
                        className="flip-img"
                        alt="loading..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="flip-box-center">
                  <div
                    className="flip-box-inner"
                    // onClick={() => loginsubmit("/primary-sprituality")}
                  >
                    <div className="flip-box-front">
                      <p className="flip-para-center">MANODAYAM</p>
                    </div>
                    <div className="flip-box-back">
                      <img
                        src={sprituality}
                        className="flip-img"
                        alt="loading..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <div className="flip-box mr-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/primary-sprituality")}
                  >
                    <div className="flip-box-front">
                      <p className="flip-para">
                        SPRITUALITY LIVE SESSIONS & ARCHIVED VIDEOS
                      </p>
                    </div>
                    <div className="flip-box-back">
                      <img
                        src={sprituality}
                        className="flip-img"
                        alt="loading..."
                      />
                    </div>
                  </div>
                </div>
                <div className="flip-box ml-2 mr-2 mt-3">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/self-awareness")}
                  >
                    <div className="flip-box-front">
                      <p className="flip-para pt-5">SELF AWARENESS</p>
                    </div>
                    <div className="flip-box-back">
                      <img
                        src={library}
                        className="flip-img"
                        alt="loading..."
                      />
                    </div>
                  </div>
                </div>
                <div className="flip-box ml-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/eco-system")}
                  >
                    <div className="flip-box-front">
                      <p className="flip-para"> MANODAYAM ECOSYSTEM</p>
                    </div>
                    <div className="flip-box-back">
                      <img
                        src={library}
                        className="flip-img"
                        alt="loading..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="doctor-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="doctor-heading">
                <br />
                <h2>Swayam- Consult with Experts </h2>
            
                <br />
                <div className="expert-details">
                  <span>01</span>
                  <p>
                    Meet the specialists who can take care of your requirement
                    in discreet mode
                  </p>
                </div>
                <div className="expert-details">
                  <span>02</span>
                  <p>
                    Do It Your Self-Please record your voice for 60 seconds and
                    you can assess yourself
                  </p>
                </div>
                <div className="expert-details">
                  <span>03</span>
                  <p>
                    Your reports will be available for your continual progress
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="doctor-form">
                <h3>Search Doctors For Appointment</h3>
                <form action="">
                  <div className="col-lg-12">
                 
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select
                        name=""
                        id=""
                      >
                        <option value="All State">All State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">
                          Dadar and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                  </div>
          

                  <div className="col-lg-12">
                    <buttton
                      className="btn hvr-float-shadow"
                      onClick={() => loginsubmit("/bookingAppoint")}
                    >
                      <span style={{ color: "#23adba" }}>Submit</span>
                    </buttton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* support */}
      <div id="support" className="about-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-content support-content">
                <h5>support</h5>
                <h2>Your Support Network</h2>
                <p>
                  Manodayam presents you a support network which helps in
                  scientifically providing various solutions.The support network
                  provides you latest scientific solutions and scientifically
                  backed age old spiritual theories. These theories are backed
                  up with scientific research in the field of Neuromodulation
                  and Neuro simulations.
                </p>

                <button
                  className="btn-web hvr-float-shadow mt-3"
                  onClick={() => loginsubmit("/support")}
                >
                  know more
                </button>
              </div>
            </div>
            <div className="col-lg-5 mt-25">
              <div className="about-img mt-30">
                <img src="assets/image/supportss.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Therapy */}
      <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              <h5>Menu (Therapy)</h5>
              <div className="exam"></div>
              <p>We present you therapies for your specific problems.</p>
              <p>
                Please click below (… these are various possible therapies …
                which will be guided by platform & Health experts)
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="doctor-form">
                <h3>Select Your Therapy</h3>
                <form action="">
                  <div className="col-lg-12"></div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select name="" id="">
                        <option value="All therapies">All therapies</option>
                        <option value="Anxiety P-1">Anxiety</option>
                        <option value="Anxiety P-2">Anxiety P-2</option>
                        <option value="Bipolar P-1">Bipolar P-1</option>
                        <option value="Bipolar P-2">Bipolar P-2</option>
                        <option value="Dementia P-1">Dementia P-1</option>
                        <option value="Dementia P-2">Dementia p-2</option>
                        <option value="Depression P-1">Depression P-1</option>
                        <option value="Depression P-2">Depression P-2</option>
                        <option value="Alcoholism P-1">Alcoholism P-1</option>
                        <option value="Alcoholism P-2">Alcoholism P-2</option>
                        <option value="Sexual Disorders P-1">
                          Sexual Disorders P-1
                        </option>
                        <option value="Sexual Disorders P-2">
                          Sexual Disorders P-2
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <buttton
                      className="btn hvr-float-shadow"
                      onClick={() => loginsubmit("/bookingAppoint")}
                    >
                      <span style={{ color: "#23adba" }}>Submit</span>
                    </buttton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {ecosystem product} */}
      {/* <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              <h5>Manodayam Ecosystem</h5>
              <p>
                Please see your support system such as genetics support, find
                brain mapping centers
              </p>
            </div>
          </div>

          <div className="service-slide mb-50">
            <Slider {...settingstwo}>
              {responseData.map((element) => (
                <div className="col-lg-11">
                  <div className="product-card">
                    <img className="product-img" src={element.img_url} alt="" />
                    <h3>{element.product_name}</h3>
                    <p>{element.description}</p>
                    <span>
                      <i className="fa fa-inr"></i>
                      {element.mrp}
                    </span>
                    <buttton
                      className="btn-web cart-btn"
                      onClick={() =>
                        loginsubmit("/ViewProduct/" + element.slug)
                      }
                    >
                      View More
                    </buttton>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}
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
