import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal as Bmodal, Button, Dropdown } from "react-bootstrap";
import Slider from "react-slick";
import { API_ADMIN_URL, CATEGORY_API } from "../utill/api.endpoints";
export default function SelfAwareness() {
  const [categoryData, setcategoryData] = useState([]);
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  let hist = useNavigate();

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

  // useEffect(() => {
  //   let local = localStorage.getItem("Token");
  //   if (local) {
  //     setisLoggedIn(true);
  //   } else {
  //     setisLoggedIn(false);
  //   }
  // }, []);
  useEffect((props) => {
    Categorylist();
  }, []);
  const handleClose = () => setshow(false);

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
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Self Awareness</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Self Awareness</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section mb-50">
        <div className="container">
          <div className="col-lg-12">
            <div className="service-heading">
              {/* <h5>Swayam- Do It Yourself</h5> */}
              <p>Swayam gives you power to heal and get you to wellness</p>
            </div>
          </div>
          <div className="service-slide">
            <Slider {...settingstwo}>
              {categoryData.map((element) => (
                <div className="col-lg-12">
                  <div className="service-card hvr-float-shadow">
                    <img src={element.img_url} alt="" />
                    <img src={element.img_url} className="img-bfr" alt="" />
                    <h3>{element.name}</h3>
                    <buttton
                      className="btn-web hvr-float-shadow"
                      onClick={() =>
                        loginsubmit("/mentalHealth/" + element.slug)
                      }
                    >
                      View More
                    </buttton>
                    {/* <buttton
                      className="btn-web hvr-float-shadow"
                      onClick={() => loginsubmit("/all-mental-wellness")}
                    >
                      
                    </buttton> */}
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
