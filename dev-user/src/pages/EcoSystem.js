import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { Modal as Bmodal, Button, Dropdown } from "react-bootstrap";
import { API_ADMIN_URL, PRODUCT_API } from "../utill/api.endpoints";
export default function EcoSystem() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  let hist = useNavigate();
  const handleClose = () => setshow(false);

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
  // useEffect(() => {
  //   let local = localStorage.getItem("Token");
  //   if (local) {
  //     setisLoggedIn(true);
  //   } else {
  //     setisLoggedIn(false);
  //   }
  // }, []);
  useEffect((props) => {
    Productlist(props);
  }, []);
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Manodayam Ecosystem</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Manodayam Ecosystem</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section mb-50">
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
