import React from "react";
import { useEffect, useState, forwardRef, formRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

import {
  API_ADMIN_URL,
  // PRODUCT_API,
  APPOINTMENT_API,
} from "../utill/api.endpoints";

export default function Appointment() {
  const [appointName, setappointName] = useState("");
  const [appointMail, setappointMail] = useState("");
  const [appointNum, setappointNum] = useState("");
  const [appointmentSchedule, setappointmentSchedule] = useState("");
  const [appointDisorder, setappointDisorder] = useState("");
  const [appointMsg, setappointMsg] = useState("");


  //error
  const [appointNameError, setappointNameError] = useState("");
  const [appointMailError, setappointMailError] = useState("");
  const [appointNumError, setappointNumError] = useState("");
  const [appointmentScheduleError, setappointmentScheduleError] = useState("");
  const [appointDisorderError, setappointDisorderError] = useState("");
  const [appointMsgError, setappointMsgError] = useState("");
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" })

  let params = new URLSearchParams(window.location.search);
  console.log(params.get('docid'));
  // Appointments
  const Appointment = () => {

    if (appointName == "") {
      setappointNameError("Please Enter Your Name");
    }
    if (appointMail == "") {
      setappointMailError("Please Enter Your Email");
    }
    if (appointNum == "") {
      setappointNumError("Please Enter Mobile Number");
    }
    if (appointmentSchedule == "") {
      setappointmentScheduleError("Please Enter Your Schedule");
    }
    if (appointDisorder == "") {
      setappointDisorderError("You have to select any option");
    }
    if (appointMsg == "") {
      setappointMsgError("Enter Your Message");
    }
    console.log(`${API_ADMIN_URL}${APPOINTMENT_API}`);
    let user = JSON.parse(localStorage.getItem("user"));
    const appointmentOptions = {
      fullname: appointName,
      email: appointMail,
      mobileNmb: appointNum,
      disorder: appointDisorder,
      schedule: appointmentSchedule,
      msg: appointMsg,
      docid: params.get('docid'),
      userId:user._id

    };
    if(!validate(appointmentOptions)){
     return; 
    }
    

    axios
      .post(`${API_ADMIN_URL}${APPOINTMENT_API}`, appointmentOptions)

      .then((res) => {
        // console.log("====llll=====", res.data.data);
        // alert("Appointment Successfully");
        //  pathname="/counsultvideo"

        setAlerdata({ title: "booked Appointment", body: "Appointment booked successfully" })
        setshow(true)
        document.getElementById("appointform").reset();
        setappointName("");
        setappointMail("");
        setappointNum("");
        setappointmentScheduleError("");
        setappointDisorderError("");
        setappointMsgError("")

        

      })
      .catch((error) => {
        console.log(error);

      });

  };
  function validate(payload) {
    if (!payload)
      return false;
    if (payload.fullname && payload.email && payload.mobileNmb && payload.disorder && payload.schedule && payload.msg && payload.docid) {
      return true
    }
    return false
  }
  const handleClose = () => setshow(false);





  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Appointment</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Appointment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zoom-consult mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="doctor-form">
                <h3>Consult With Us</h3>
                <form action="" id="appointform">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Full name"
                          onChange={(appointName) =>
                            setappointName(appointName.target.value)
                          }
                        />
                        {appointName == "" ? (
                          <p className="text-danger">{appointNameError}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Email"
                          onChange={(appointMail) =>
                            setappointMail(appointMail.target.value)
                          }
                        />
                        {appointMail == "" ? (
                          <p className="text-danger">{appointMailError}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Mobile no."
                          onChange={(appointNum) =>
                            setappointNum(appointNum.target.value)
                          }
                        />
                        {appointNum == "" ? (
                          <p className="text-danger">{appointNumError}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="datetime-local"
                          onChange={(appointmentSchedule) =>
                            setappointmentSchedule(
                              appointmentSchedule.target.value
                            )
                          }
                        />
                        {appointmentSchedule == "" ? (
                          <p className="text-danger">
                            {appointmentScheduleError}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          className="text-secondary"
                          name=""
                          id=""
                          onChange={(appointDisorder) =>
                            setappointDisorder(appointDisorder.target.value)
                          }
                        >
                          <option value="Depression">Depression</option>
                          <option value="Anxiety">Anxiety</option>
                          <option value="Attention_Disorder">
                            Attention Disorder
                          </option>
                          <option value="Psychosis">Psychosis</option>
                          <option value="Obsessive_Compulsive_Disorder">
                            Obsessive Compulsive Disorder
                          </option>
                          <option value="Drug_Abuse">Drug Abuse</option>
                          <option value="Alcohol_Abuse">Alcohol Abuse</option>
                          <option value="Sexual_Dysfunction">
                            Sexual Dysfunction
                          </option>
                          <option value="Dementia">Dementia</option>
                          <option value="Bipolar">Bipolar</option>
                          <option value="schizophrenia">schizophrenia </option>
                        </select>
                        {appointDisorder == "" ? (
                          <p className="text-danger">{appointDisorderError}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group schedule-msg">
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="1"
                          placeholder="Enter your message here"
                          onChange={(appointMsg) =>
                            setappointMsg(appointMsg.target.value)
                          }
                        ></textarea>
                        {appointMsg == "" ? (
                          <p className="text-danger">{appointMsgError}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-12" onClick={Appointment}>
                      {/* <Link to="/counsultvideo"> */}
                      <buttton className="btn hvr-float-shadow">
                        Book appointment
                      </buttton>
                      {/* </Link> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="doctor-heading mt-25 mt-30">
                <h2>Schedule your appointment</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  ad repellendus laboriosam ea, dolorem odio culpa.
                </p>

                <div className="expert-details">
                  <span>01</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis cupiditate nostrum et quisquam aliquid ipsa ad
                    necessitatibus.
                  </p>
                </div>
                <div className="expert-details">
                  <span>02</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis cupiditate nostrum et quisquam aliquid ipsa ad
                    necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>{alertData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertData.body}</Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}






