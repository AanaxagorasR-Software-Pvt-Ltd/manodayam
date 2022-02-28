import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { API_ADMIN_URL, DOCTOR_LIST_API } from "../utill/api.endpoints";
export default function BookingAppoint() {
  const [doctorData, setdoctorData] = useState([]);

  let params = new URLSearchParams(window.location.search);
  const doctorlist = () => {
    console.log(`${API_ADMIN_URL}${DOCTOR_LIST_API}`);
    const doctorlisting = {
      collectionDoctor: "doctorListing",
    };
    axios
      .post(`${API_ADMIN_URL}${DOCTOR_LIST_API}?state=${params.get('State')}`, doctorlisting)
      .then((res) => {
        setdoctorData(res.data.data);
        console.log("====pppppp====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    doctorlist(props);
  }, []);
  
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Doctor Lists</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/appointment">Booking / &nbsp;</Link>
                  </li>
                  <li>Doctor Booking</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="./assets/image/doctor4.jpeg" alt="" /> */}
      {doctorData.map((element) => (
        <div className="about-section mb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-img h-50 w-50 ml-8">
                  <img src={element.img_url} alt="" />
                </div>
              </div>
              <div className="col-lg-7 mr-8">
                <div className="about-content support-content">
                  <h5>{element.name}</h5>
                  <h2>{element.specialist}</h2>
                  <p>{element.experience}</p>
                  <p>{element.location}</p>
                  <h2>{element.email}</h2>

                  <button className="btn-web hvr-float-shadow">
                    <Link to={`/appointment?docid=${element._id}`}>Book Your Appointment</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
