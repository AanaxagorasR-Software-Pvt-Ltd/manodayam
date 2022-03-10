import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
import Login from "./Login";
import globalDataGroupCall from "../utill/rdxGroupCall";
import globalDataLive from "../utill/rdxLive";
import { useNavigate } from "react-router-dom";
import { Modal as Bmodal, Button } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import {
  API_ADMIN_URL,
  PRODUCT_API,
  BANNER_API,
  CATEGORY_API,
  SPIRITUALITY_API,
  ABOUT_API,
  DIGITAL_HUMAN_LIBRARY_DATA_API,
} from "../utill/api.endpoints";
const images = [];
export default function Home(props) {
  const [responseData, setResponseData] = useState([]);
  const [bannerData, setbannerData] = useState([]);
  const [categoryData, setcategoryData] = useState([]);
  const [SpritualityData, setSpritualityData] = useState([]);
  const [libraryData, setlibraryData] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [data, setData] = useState([]);
  // const [state, setState] = useState("All");
  let hist = useNavigate();
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
  const Productlist = () => {
    console.log(`${API_ADMIN_URL}${PRODUCT_API}`);
    const productlisting = {
      collectiontype: "products",
    };
    axios
      .post(`${API_ADMIN_URL}${PRODUCT_API}`, productlisting)
      .then((res) => {
        setResponseData(res.data.data);

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
  // category
  const Categorylist = () => {
    console.log(`${API_ADMIN_URL}${CATEGORY_API}`);
    const categorylisting = {
      collectiontypedata: "categories",
    };
    axios
      .post(`${API_ADMIN_URL}${CATEGORY_API}`, categorylisting)
      .then((res) => {
        setcategoryData(res.data.data);
        console.log("====category====", res.data.data);
        {
          window.localStorage.getItem("Token");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Sprituality
  const Spritualitylist = () => {
    console.log(`${API_ADMIN_URL}${SPIRITUALITY_API}`);
    const spiritualitylisting = {
      collectiontypedata: "spirituality",
    };
    axios
      .post(`${API_ADMIN_URL}${SPIRITUALITY_API}`, spiritualitylisting)
      .then((res) => {
        setSpritualityData(res.data.data);
        console.log("====Sprituality====", res.data.data);
        {
          window.localStorage.getItem("Token");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
  useEffect((props) => {
    Productlist(props);
    BannerData();
    Categorylist();
    Spritualitylist();
    libraryDatalist();
    aboutlist();
  }, []);
  var settings = {
    dots: false,
    arrows: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
  return (
    <>
      <Login humanId={humanId} />
      <div className="web-banner-slider">
        <Slider {...settings}>
          {bannerData.map((element) => (
            <div className="web-banner mb-50">
              <div className="container">
                <div className="web-banner-content">
                  <h1>{element.banner_text}</h1>
                  {/* <h1>Meet, Your Mentor or Coach-Digital Human Library</h1> */}
                  <button
                    className="qst-show btn-web hvr-float-shadow btn-web"
                    onClick={() => loginsubmit("/spirituality")}
                  >
                    register for assessment
                  </button>
                  <button
                    className="btn-web"
                    onClick={() => loginsubmit("/support")}
                  >
                    your support networks
                  </button>
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
                  Manodayam is a Mental Health and Wellnessorganization
                  providing Holistic solutions. It has Unique Value proposition
                  integrating continual mental health assessment and support
                  networks including Neuromodulation with Vedic methodology and
                  latest scientific techniques through mobile app.
                </p>
                <p>
                  These Solutions are driven by Artificial Intelligence (AI)
                  centric algorithms. and group of leading medical fraternity in
                  mental health space
                </p>
                <p>
                  Solutions to 17 Mental Health Conditions such as Depression,
                  Panic, Stress, PSTD, Alcoholism, Substance Abuse,
                  Schizophrenia, Bipolar, ADHD, Dementia, Alzheimer’s,
                  Parkinson’s, Juvenile Delinquency, Autism, Sexual Disorders,
                  Sleeplessness
                </p>
                <p>
                  Manodayam has Comprehensive team of Clinical Psychologist,
                  Psychiatrists, Care-givers Also we have Expertise in
                  Mathematical Modeling, Business Management, Big Data
                  Management, Statistical Analytics
                </p>
                <p>
                  Manodayam is in the process of Compliances to Clinical Trials,
                  Validationsand Data Protection
                </p>
                <img src="assets/image/rose.png" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <Slider {...settingsnext}>
                  <img src="assets/image/white9.jpeg" alt="" />
                  <img src="assets/image/seen1.jpeg" alt="" />
                  <img src="assets/image/seen3.jpeg" alt="" />
                  <img src="assets/image/seen4.jpg" alt="" />
                  <img src="assets/image/seen5.webp" alt="" />
                  <img src="assets/image/seen7.webp" alt="" />
                </Slider>
              </div>
            </div>
            {data.map((element) => (
              <div className="col-lg-4">
                <div>
                  <video
                    id="about-us-video"
                    controls
                    preload="auto"
                    poster={element.image}
                    data-setup=""
                    loop="auto"
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

      <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              <h5>Swayam- Do It Yourself</h5>
              <p>Swayam gives you power to heal and get you to wellness</p>
            </div>
          </div>

          <div className="service-slide">
            <Slider {...settingstwo}>
              {categoryData.map((element) => (
                <div className="col-lg-12">
                  <div className="service-card hvr-float-shadow">
                    {/* <img src={element.img} alt="" /> */}
                    <img src={element.img_url} alt="" />

                    <img src={element.img_url} className="img-bfr" alt="" />

                    <h3>{element.name}</h3>
                    {/* <Link
                      to={{
                        pathname: "/mentalHealth/" + element.slug,
                      }}
                    > */}
                    <buttton
                      className="btn-web hvr-float-shadow"
                      onClick={() =>
                        loginsubmit("/mentalHealth/" + element.slug)
                      }
                    >
                      Find Solution
                    </buttton>
                    <buttton
                      className="btn-web hvr-float-shadow"
                      onClick={() => loginsubmit("/all-mental-wellness")}
                    >
                      View More
                    </buttton>
                    {/* </Link> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="doctor-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="doctor-heading">
                <br />
                <h2>Swayam- Consult with Experts </h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  ad repellendus laboriosam ea, dolorem odio culpa.
                </p> */}
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
                    {/* <div className="form-group">
                      <input type="text" name="" id="" placeholder="Country" />
                    </div> */}
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select
                        name=""
                        id=""
                        // onChange={(event) => setState(event.target.value)}
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
                  {/* <div className="col-lg-12">
                    <div className="form-group ">
                      <select name="" id="">
                        <option value=""> Depression</option>
                        <option value="">Anxiety</option>
                        <option value="">Attention Disorder</option>
                        <option value="">Psychosis</option>
                        <option value="">Alcohol Abuse</option>
                        <option value="">Sexual Dysfunction</option>
                        <option value="">Dementia</option>
                        <option value="">Bipolar</option>
                        <option value="">Obsessive Compulsive Disorder</option>
                        <option value="">Drug Abuse</option>
                        <option value="">schizophrenia</option>
                      </select>
                    </div>
                  </div> */}

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
      <hr />
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
                        className="btn-web col-11"
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
                        data-target={isLoggedIn ? "#library-modal" : ""}
                        className="btn-web col-11 mt-2"
                      >
                        Personal therapy
                      </button>

                      <button
                        className="btn-web col-11 mt-2"
                        data-toggle="modal"
                        data-target={isLoggedIn ? "#library-modalgroup" : ""}
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
                        className="btn-web col-11"
                        onClick={() =>
                          loginsubmit(`/library?humanId=${element._id}`)
                        }
                      >
                        View More
                      </button>
                      {/* <a href={globalDataLive.liveLink} target="_blank"> */}
                      <button
                        className="btn-web col-11 mt-2"
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
      {/* Sprituality */}
      <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              <h5>Spirituality</h5>
              {/* <h2> You can heal and create  balance life style .Do it yourself</h2> */}
              <p>You can heal and create balance life style .Do it yourself</p>
            </div>
          </div>

          <div className="service-slide">
            <Slider {...settingstwo}>
              {SpritualityData.map((element) => (
                <div className="col-lg-12">
                  <div className="service-card spritual-card h-100">
                    <img src={element.img_url} alt="" />
                    <img src={element.img_url} className="img-bfr" alt="" />
                    {/* <img src={element.img} className="img-bfr" alt="" /> */}
                    <h3>{element.name}</h3>
                    <p>{element.description}</p>
                    <button
                      className="qst-show btn-web hvr-float-shadow"
                      onClick={() => loginsubmit("/spirituality")}
                    >
                      Get your solution
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
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
      {/* {ecosystem product} */}

      <div className="service-section mb-50">
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
