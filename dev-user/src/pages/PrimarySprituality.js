import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { API_ADMIN_URL, SPIRITUALITY_API } from "../utill/api.endpoints";
export default function PrimarySprituality() {
  const [SpritualityData, setSpritualityData] = useState([]);
  //Sprituality api
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
    Spritualitylist();
  }, []);
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Sprituality</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Sprituality</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="research-section mb-50">
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
                    <Link to="/spirituality">
                      <button className="qst-show btn-web hvr-float-shadow">
                        Get your solution
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
