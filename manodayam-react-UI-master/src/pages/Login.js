import React from "react";
// import { Link } from "react-router-dom";
import {
  API_ADMIN_URL,
  LOGIN_API,
  REGISTER_API,
  DOCTOR_API,
  DIGITAL_HUMAN_LIBRARY,
} from "../utill/api.endpoints";
import { useState } from "react";
import axios from "axios";
var filter =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
export default function Login() {
  const [logineMail, setlogineMail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [ragisterationName, setragisterationName] = useState("");
  const [ragisterationMail, setragisterationMail] = useState("");
  const [ragisterationPassword, setragisterationPassword] = useState("");
  const [doctorName, setdoctorName] = useState("");
  const [doctoraddress, setdoctoraddress] = useState("");
  const [doctorphone, setdoctorphone] = useState("");
  const [doctorspeciality, setdoctorspeciality] = useState("");
  const [doctorotp, setdoctorotp] = useState("");
  const [libraryName, setlibraryName] = useState("");
  const [libraryNum, setlibraryNum] = useState("");
  const [libraryMail, setlibraryMail] = useState("");
  const [libraryDate, setlibraryDate] = useState("");
  const [libraryMsg, setlibraryMsg] = useState("");
  // const [phoneTenDigits, setphoneTenDigits] = useState("");

  // validation Error
  const [doctorNameError, setdoctorNameError] = useState("");
  const [doctoraddressError, setdoctoraddressError] = useState("");
  const [doctorphoneError, setdoctorphoneError] = useState("");
  const [doctorspecialityError, setdoctorspecialityError] = useState("");
  const [doctorotpError, setdoctorotpError] = useState(doctorphone);
  const [libraryNameError, setlibraryNameError] = useState("");
  const [libraryNumError, setlibraryNumError] = useState("");
  const [libraryMailError, setlibraryMailError] = useState("");
  const [libraryDateError, setlibraryDateError] = useState("");
  const [libraryMsgError, setlibraryMsgError] = useState("");

  // Login
  const LoginApi = () => {
    console.log(`${API_ADMIN_URL}${LOGIN_API}`);
    const loginOptions = {
      email: logineMail,
      password: loginPassword,
    };
    axios
      .post(`${API_ADMIN_URL}${LOGIN_API}`, loginOptions)
      .then((res) => {
        console.log("====llll=====", res.data);
        alert("Successfully Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Registration
  const RegisterationApi = () => {
    console.log(`${API_ADMIN_URL}${REGISTER_API}`);
    const RegisterationOptions = {
      email: ragisterationMail,
      password: ragisterationPassword,
      name: ragisterationName,
    };
    // console.log('dt', dt);
    // return;
    axios
      .post(`${API_ADMIN_URL}${REGISTER_API}`, RegisterationOptions)
      .then((res) => {
        console.log("====rrrr=====", res.data);
        alert("Account Created");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Doctor sighup
  const Doctorregistration = () => {
    if (doctorName == "") {
      setdoctorNameError("Enter Your Name");
    }

    if (doctoraddress == "") {
      setdoctoraddressError("Enter Your Address");
    }
    if (doctorphone == "") {
      setdoctorphoneError("Enter Your Phone");
    }
    if (filter.test(doctorphone)) {
      if (doctorphone.length == 10) {
      } else {
        alert("Please put 10  digit mobile number");
      }
    }
    if (doctorspecialityError == "") {
      setdoctorspecialityError("Fill Your Speciality");
    }
    if (doctorotpError == "") {
      setdoctorotpError("OTP Here");
    }

    console.log(`${API_ADMIN_URL}${DOCTOR_API}`);
    const doctorOptions = {
      name: doctorName,
      address: doctoraddress,
      phone: doctorphone,
      speciality: doctorspeciality,
      otp: doctorotp,
    };
    axios
      .post(`${API_ADMIN_URL}${DOCTOR_API}`, doctorOptions)
      .then((res) => {
        console.log("====rrrr=====", res.data);
        alert("successfully Done");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Digital Human Library
  const HumanLibrary = () => {
    if (libraryName == "") {
      setlibraryNameError("Please Enter Your Fullname");
    }
    if (libraryMail == "") {
      setlibraryMailError("Please Enter Your Email");
    }
    if (libraryNum == "") {
      setlibraryNumError("Please Enter Mobile Number");
    }
    if (filter.test(libraryNum)) {
      if (libraryNum.length == 10) {
      } else {
        alert("Please put 10  digit mobile number");
      }
    }
    if (libraryDate == "") {
      setlibraryDateError("Please Enter Date");
    }
    if (libraryMsg == "") {
      setlibraryMsgError("Enter Your Message");
    }
    console.log("hhhhhhhhh", `${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY}`);
    const humanLibraryOptions = {
      fullname: libraryName,
      email: libraryMail,
      phone: libraryNum,
      date: libraryDate,
      msg: libraryMsg,
    };
    axios
      .post(`${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY}`, humanLibraryOptions)
      .then((res) => {
        // console.log("====llll=====", res.data.data);
        alert("Will Connect You Soon");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
            >
              &times;
            </button>

            <div className="modal-body md-custom">
              <form className="login-hide" action="">
                <h3>Log in</h3>
                <div className="form-group">
                  <label for="">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email here"
                    // value={logineMail}
                    onChange={(logineMail) =>
                      setlogineMail(logineMail.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label for="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Type your paasword here"
                    // value={loginPassword}
                    onChange={(loginPassword) =>
                      setloginPassword(loginPassword.target.value)
                    }
                  />
                </div>

                <div className="form-inline">
                  <input type="checkbox" name="" id="" />
                  <p>Remember Me</p>

                  <p className="fgt-btn">Forgot Password?</p>
                </div>
                <div className="signup-btn">
                  <button
                    type="button"
                    className="sgn-btn btn btn-web hvr-float-shadow"
                    onClick={LoginApi}
                  >
                    {/* <Link to="/Home" > */}
                    Submit
                    {/* </Link> */}
                    {/* <Link to="/home" >Submit</Link> */}
                  </button>
                </div>
              </form>
              <div className="forgot-password">
                <h3>Reset your password</h3>
                <div className="form-group">
                  <label for="">Enter your recovery email here</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your recovery email here"
                  />
                </div>
                <p className="old-password">Or log in with old password</p>
                <div className="rcvry-btn">
                  <button className="rcv-btn sgn-btn btn btn-web hvr-float-shadow">
                    Send Message
                  </button>
                </div>
              </div>
              <form className="signup-hide" action="">
                <h3>Create A New Account</h3>
                <div className="form-group">
                  <label for="">Full Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your name here"
                  />
                </div>
                <div className="form-group">
                  <label for="">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Type your email here"
                  />
                </div>
                <div className="form-group">
                  <label for="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Type your password here"
                  />
                </div>
                <div className="form-group">
                  <label for="">Confirm Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm your password"
                  />
                </div>
                {/* <div>hello</div> */}
                <div className="signup-btn">
                  <button className="sgn-btn btn btn-web hvr-float-shadow">
                    Create Account
                  </button>
                  &nbsp;&nbsp;
                  <button className="lgn-btn sgn-btn btn btn-web hvr-float-shadow">
                    Log in
                  </button>
                </div>
              </form>
              <div className="signup-detail">
                <p className="crt-btn">Create a New Account</p>
                <p>Or sign up with</p>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-google"></i>
              </div>
              <div
                className="g-recaptcha"
                data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="doctor-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
            >
              &times;
            </button>

            <div className="modal-body md-custom">
              <form action="">
                <h3>Register Here</h3>
                <div className="form-group">
                  <label for="">Your Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your full name"
                    onChange={(doctorName) =>
                      setdoctorName(doctorName.target.value)
                    }
                  />
                  {doctorName == "" ? (
                    <p className="text-danger">
                      <small> {doctorNameError}</small>
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Your Address</label>
                  <input
                    // type="password"
                    name=""
                    id=""
                    placeholder="Address"
                    onChange={(doctoraddress) =>
                      setdoctoraddress(doctoraddress.target.value)
                    }
                  />
                  {doctoraddress == "" ? (
                    <p className="text-danger">
                      <small> {doctoraddressError}</small>
                    </p>
                  ) : null}
                </div>

                <div className="form-group">
                  <label for="">Your Phone No.</label>
                  <input
                    type="tel"
                    name=""
                    id="mobile"
                    placeholder="Phone no."
                    type="tel"
                    minlength="10"
                    maxlength="10"
                    onChange={(doctorphone) =>
                      setdoctorphone(doctorphone.target.value)
                    }
                  />
                  {doctorphone == "" ? (
                    <p className="text-danger">
                      <small> {doctorphoneError}</small>
                    </p>
                  ) : null}
                  {/* {doctorphone == doctorphone ? null : (
                    <p className="text-danger">
                      <small>{phoneTenDigits}</small>
                    </p>
                  )} */}
                </div>
                <div className="form-group">
                  <label for="">Your Speciality</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Speciality"
                    onChange={(doctorspeciality) =>
                      setdoctorspeciality(doctorspeciality.target.value)
                    }
                  />
                  {doctorspeciality == "" ? (
                    <p className="text-danger">
                      <small> {doctorspecialityError}</small>
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Enter OTP (One Time Password)</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="OTP"
                    onChange={(doctorotp) =>
                      setdoctorotp(doctorotp.target.value)
                    }
                  />
                  {doctorotp == "" ? (
                    <p className="text-danger">
                      <small> {doctorotpError}</small>
                    </p>
                  ) : null}
                </div>
                <div
                  className="Register text-center"
                  onClick={Doctorregistration}
                >
                  <button
                    type="button"
                    className="btn btn-web hvr-float-shadow"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="library-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
            >
              &times;
            </button>

            <div className="modal-body md-custom">
              <form action="">
                <h3>Talk with Us</h3>
                <div className="form-group">
                  <label for="">Your Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your full name"
                    onChange={(libraryName) =>
                      setlibraryName(libraryName.target.value)
                    }
                  />
                  {libraryName == "" ? (
                    <p className="text-danger">{libraryNameError}</p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Your Phone No.</label>
                  <input
                    type="tel"
                    name=""
                    id="mobile"
                    placeholder="Phone no."
                    minlength="10"
                    maxlength="10"
                    onChange={(libraryNum) =>
                      setlibraryNum(libraryNum.target.value)
                    }
                  />
                  {libraryNum == "" ? (
                    <p className="text-danger">{libraryNumError}</p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Your Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    onChange={(libraryMail) =>
                      setlibraryMail(libraryMail.target.value)
                    }
                  />
                  {libraryMail == "" ? (
                    <p className="text-danger">{libraryMailError}</p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Date</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="DD/MM/YYYY"
                    onChange={(libraryDate) =>
                      setlibraryDate(libraryDate.target.value)
                    }
                  />
                  {libraryDate == "" ? (
                    <p className="text-danger">{libraryDateError}</p>
                  ) : null}
                </div>
                <div className="form-group schedule-msg ">
                  <textarea
                    className="border border-secondary"
                    name=""
                    id=""
                    cols="30"
                    rows="1"
                    placeholder="Enter your message here"
                    onChange={(libraryMsg) =>
                      setlibraryMsg(libraryMsg.target.value)
                    }
                  ></textarea>
                  {libraryMsg == "" ? (
                    <p className="text-danger">{libraryMsgError}</p>
                  ) : null}
                </div>
                <div className="Register text-center" onClick={HumanLibrary}>
                  <button
                    type="button"
                    className="btn btn-web hvr-float-shadow"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="registermodal">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close close-btn"
              data-dismiss="modal"
            >
              &times;
            </button>

            <div className="modal-body md-custom">
              <form action="">
                <h3>Create A New Account</h3>
                <div className="form-group">
                  <label for="">Full Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your name here"
                    // value={ragisterationName}
                    onChange={(ragisterationName) =>
                      setragisterationName(ragisterationName.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label for="">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Type your email here"
                    // value={ragisterationMail}
                    onChange={(ragisterationMail) => {
                      // console.log('ragisterationMail', ragisterationMail.target.value)
                      setragisterationMail(ragisterationMail.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Type your password here"
                    // value={ragisterationPassword}
                    onChange={(ragisterationPassword) =>
                      setragisterationPassword(
                        ragisterationPassword.target.value
                      )
                    }
                  />
                </div>
                <div className="form-group">
                  <label for="">Confirm Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="signup-btn">
                  {/* <Link to="/Home"> */}

                  <button
                    type="button"
                    className="btn btn-web hvr-float-shadow"
                    onClick={RegisterationApi}
                  >
                    Submit
                  </button>
                  {/* </Link> */}
                </div>

                <br />
                <div
                  className="g-recaptcha"
                  data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
