import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ai from "./ai.jpeg";
import library from "./library.jpeg";
import sprituality from "./sprituality.jpeg";
import teledoctor from "./teledr.png";
import { Modal as Bmodal, Button, Dropdown } from "react-bootstrap";
import voiceAssisstant from "../utill/rdxassisstant";

export default function HowWeDo() {
  const [SpritualityData, setSpritualityData] = useState([]);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [show, setshow] = useState(false);

  let hist = useNavigate();
  const handleClose = () => setshow(false);

  // useEffect(() => {
  //   let local = localStorage.getItem("Token");
  //   if (local) {
  //     setisLoggedIn(true);
  //   } else {
  //     setisLoggedIn(false);
  //   }
  // }, []);
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
                <h3>How We Do</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>How We Do</li>
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
              <h5>How We Do</h5>
              <p>
                Our Technology Architecture helps you to find the solutions to
                various possible mental/emotional scenarios which are or may be
                faced by you. Our Health experts have made sure that your
                THERAPIES are tailor made & driven basis FOUR building blocks of
                our Online platform to help you find an apt solution for
                yourself
              </p>
            </div>
          </div>
          <div className="service-slide">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center mt-4">
                {/* <a href="http://localhost:3000/"> */}

                <div
                  className="flip-box"
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
                {/* </a> */}
                <div className="flip-box ml-2">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/bookingAppoint/")}
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
              </div>
              <div className="d-flex justify-content-center mt-2">
                <div className="flip-box">
                  <div
                    className="flip-box-inner"
                    onClick={() => loginsubmit("/primary-library/")}
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
                <div className="flip-box ml-2">
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
