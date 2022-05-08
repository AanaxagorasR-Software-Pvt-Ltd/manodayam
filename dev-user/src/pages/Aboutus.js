import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import sample from "./sample.mp4";
import { API_ADMIN_URL, ABOUT_API } from "../utill/api.endpoints";
export default function Aboutus() {
  const [data, setData] = useState([]);

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
  useEffect((props) => {
    aboutlist();
  }, []);
  return (
    <>
      <div className="aboutus-banner mb-50">
        {/* <video className="aboutus-banner mb-50" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>About Us</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>About us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/* <div className="about-img">
                <img src="assets/image/MentalHealth.jpg" alt="" />
              </div> */}
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
                    >
                      <source src={element.video} type="video/mp4" />
                    </video>
                    <h6 className="about_title">{element.title}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-7">
              <div className="about-content aboutus-content">
                <h2>About Us</h2>
                <p className="about-text">
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
                <img src="assets/image/rose.png" alt="" />
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
