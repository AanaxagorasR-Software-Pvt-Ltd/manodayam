import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Modal as Bmodal, Button, Dropdown } from "react-bootstrap";
import logo from "./favicon.png";

import {
  API_ADMIN_URL,
  BANNER_API,
  ABOUT_API,
  MASTERCATEGORY_API,
  SUBSCRIPTION_PLANE,
  SUBSCRIPTION_PLANE_LISTA,
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
  const [subScriptiondata, setSubscriptiondata] = useState([]);

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
  const subscription = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(
        // ?humanId=${}`
        `${API_ADMIN_URL}${SUBSCRIPTION_PLANE_LISTA}?usertype=${params.get(
          "usertype"
        )}`
      )
      .then((res) => {
        console.log("res", res, typeof res);

        setSubscriptiondata(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  useEffect((props) => {
    subscription();
    BannerData();
    aboutlist();
  }, []);
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 200,
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
  const subchange2 = (e) => {
    let user = JSON.parse(localStorage.getItem("user"));
    // hist(`{e}`);
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
  const handlePlay = (evt) => {
    let allVideosElements = document.getElementsByTagName("video");
    let currentVideoElement = evt.target;
    for (let v of allVideosElements) {
      if (v !== currentVideoElement) {
        v.pause();
      }
    }
  };
  return (
    <>
      <Login humanId={humanId} />
      <div className="web-banner-slider">
        <Slider {...settings}>
          {bannerData.map((element) => (
            <div className="web-banner mb-50">
              <div className="container">
                <div className="web-banner-content">
                  {/* <marquee behavior="slide" direction="up">
                    <h1>{element.banner_text}</h1>
                  </marquee> */}
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

                  <h1 className="banner-text">{element.banner_text}</h1>
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
                  This platform is scaled to provide Solutions to different
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
                      onPlay={handlePlay}
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
      <div className="service-section mb-50" id="howwedo">
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
                <div className="flip-box mt-4 mr-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/self-awareness")}
                  >
                    <p className="flip-para">SELF AWARENESS</p>
                  </div>
                </div>
                <div
                  className="flip-box mr-2 ml-2"
                  onClick={() =>
                    loginsubmits("https://master.dmn3o3hk3w2r8.amplifyapp.com")
                  }
                >
                  <div className="flip-box-inner ">
                    {/* <div className="flip-box-front"> */}
                    <p className="flip-para"> AI DRIVEN SELF-ASSESSMENT</p>
                    {/* </div> */}
                    {/* <div class="flip-box-back">
                      <img src={Ai} className="flip-img" alt="loading..." />
                    </div> */}
                  </div>
                </div>

                <div className="flip-box ml-4 mt-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/primary-sprituality")}
                  >
                    <p className="flip-para">
                      SPRITUALITY LIVE SESSIONS & ARCHIVED VIDEOS
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="flip-box-center">
                  <div
                    className="flip-box-inner"
                    // onClick={() => loginsubmit("/primary-sprituality")}
                  >
                    {/* <div className="flip-box-front"> */}
                    <img src={logo} className="flip-img" alt="loading..." />
                    {/* <p className="flip-para-center">MANODAYAM</p> */}
                    {/* </div> */}
                    <div className="flip-box-back"></div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <div className="flip-box mr-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/primary-library")}
                  >
                    <p className="flip-para"> DIGITAL HUMAN LIBRARY</p>
                  </div>
                </div>
                <div className="flip-box ml-2 mr-2 mt-3">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/bookingAppoint")}
                  >
                    <p className="flip-para">
                      TELE-PSYCHIATRY CONNECT WITH DOCTORS
                    </p>
                  </div>
                </div>

                <div className="flip-box ml-4">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/eco-system")}
                  >
                    <p className="flip-para"> MANODAYAM ECOSYSTEM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <h3>Select Your Therapy Type / Subscription Plane</h3>
                <form action="">
                  <div className="col-lg-12"></div>
                  <div className="col-lg-12">
                    <Dropdown className="form-group">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="hvr-float-shadow"
                      >
                        Choose Therapy
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="contact-form-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <h4 className="text-center text-info">Change Your Life</h4> */}
              <div className="contact-details">
                <div className="pd-add">
                  <h2>Contact Me Now</h2>
                  <p>
                    Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
                    velit sed. Arcu vitae elementum vitae nunc.
                  </p>
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
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
