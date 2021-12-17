import React from "react";
import {
  API_ADMIN_URL,
  LOGIN_API,
  REGISTER_API,
  DOCTOR_API,
  DIGITAL_HUMAN_LIBRARY,
} from "../utill/api.endpoints";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";
var filter =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
const clientId = "Your-Client-Id";
export default function Login(props) {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    // setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  // const navigate = useNavigate();

  const [logineMail, setlogineMail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [registrationName, setregistrationName] = useState("");
  const [registrationMail, setregistrationMail] = useState("");
  const [registrationPassword, setregistrationPassword] = useState("");
  // const [registrationConfirmPsd, setregistrationConfirmPsd] = useState("");
  const [doctorName, setdoctorName] = useState("");
  const [doctoraddress, setdoctoraddress] = useState("");
  const [doctoremail, setdoctoremail] = useState("");
  const [doctorspeciality, setdoctorspeciality] = useState("");
  const [doctorpassword, setdoctorpassword] = useState("");
  const [libraryName, setlibraryName] = useState("");
  const [libraryNum, setlibraryNum] = useState("");
  const [libraryMail, setlibraryMail] = useState("");
  const [libraryDate, setlibraryDate] = useState("");
  const [libraryMsg, setlibraryMsg] = useState("");

  // validation Error
  const [doctorNameError, setdoctorNameError] = useState("");
  const [doctoraddressError, setdoctoraddressError] = useState("");
  const [doctoremailError, setdoctoremailError] = useState("");
  const [doctorspecialityError, setdoctorspecialityError] = useState("");
  const [doctorpasswordError, setdoctorpasswordError] = useState("");
  const [libraryNameError, setlibraryNameError] = useState("");
  const [libraryNumError, setlibraryNumError] = useState("");
  const [libraryMailError, setlibraryMailError] = useState("");
  const [libraryDateError, setlibraryDateError] = useState("");
  const [libraryMsgError, setlibraryMsgError] = useState("");
  const [LoginmailError, setLoginmailError] = useState("");
  const [loginPasswordError, setloginPasswordError] = useState("");
  const [registrationNameError, setregistrationNameError] = useState("");
  const [registrationMailError, setregistrationMailError] = useState("");
  const [registrationPasswordError, setregistrationPasswordError] =
    useState("");
  // const [modalIsOpen, setmodalIsOpen] = useState();
  // function handleCloseModal() {
  //   // document.getElementByClassName("close-btn").onClick();
  //   // alert('hhhhh');
  //   return <div className="close-btn"></div>;
  // }
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(true);
    // setShowlogoutButton(true);
  };

  // const onLoginFailure = (res) => {
  //   console.log("Login Failed:", res);
  // };

  // const onSignoutSuccess = () => {
  //   alert("You have been logged out successfully");
  //   console.clear();
  //   setShowloginButton(true);
  //   setShowlogoutButton(false);
  // };
  // Login
  const LoginApi = (props) => {
    if (logineMail == "") {
      setLoginmailError("Enter your mail");
    }
    if (loginPassword == "") {
      setloginPasswordError("Enter Your Password");
    }
    console.log(`${API_ADMIN_URL}${LOGIN_API}`);
    const loginOptions = {
      email: logineMail,
      password: loginPassword,
    };
    axios
      .post(`${API_ADMIN_URL}${LOGIN_API}`, loginOptions)
      .then((res) => {
        // console.log("====llll=====", ((typeof res.data, res.data)));
        console.log("**********", res.data.token);
        if (res.status == 200) {
          // localStorage.setItem("Token", res.data.token);
          alert("Done");
          window.$('#myModal').modal('hide')

          // handleCloseModal();
        } else {
          alert("enter correct mail or password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Registration
  const RegisterationApi = () => {
    if (registrationName == "") {
      setregistrationNameError("Enter your name");
    }
    if (registrationMail == "") {
      setregistrationMailError("Enter your mail");
    }
    if (registrationPassword == "") {
      setregistrationPasswordError("Enter your password");
    }

    console.log(`${API_ADMIN_URL}${REGISTER_API}`);
    const RegisterationOptions = {
      email: registrationMail,
      password: registrationPassword,
      name: registrationName,
    };
   
    axios
      .post(`${API_ADMIN_URL}${REGISTER_API}`, RegisterationOptions)
      .then((res) => {
        console.log("====rrrr=====", res.data);
        alert("Account Created");
        window.$('#registermodal').modal('hide')

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
    if (doctoremail == "") {
      setdoctoremailError("Enter Your email");
    }
    // if (filter.test(doctoremail)) {
    //   if (doctoremail.length == 10) {
    //   } else {
    //     alert("Please put 10  digit mobile number");
    //   }
    // }
    if (doctorspecialityError == "") {
      setdoctorspecialityError("Fill Your Speciality");
    }
    if (doctorpassword == "") {
      setdoctorpassword("OTP Here");
    }

    console.log(`${API_ADMIN_URL}${DOCTOR_API}`);
    const doctorOptions = {
      name: doctorName,
      address: doctoraddress,
      email: doctoremail,
      speciality: doctorspeciality,
      password: doctorpassword,
    };
    axios
      .post(`${API_ADMIN_URL}${DOCTOR_API}`, doctorOptions)
      .then((res) => {
        console.log("====rrrr=====", res.data);
        alert("successfully Done");
        window.$('#doctor-modal').modal('hide')

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
        alert("We Will Connect You Soon");
        if (res.status == 200) {
          // localStorage.setItem("Token", res.data.token);
          window.$('#library-modal').modal('hide')

        } else {
          alert("enter correct mail or password");
        }
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
                    value={logineMail}
                    onChange={(logineMail) =>
                      setlogineMail(logineMail.target.value)
                    }
                  />
                  {logineMail == "" ? (
                    <p className="text-danger">
                      <small> {LoginmailError}</small>
                    </p>
                  ) : null}
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
                  {loginPassword == "" ? (
                    <p className="text-danger">
                      <small> {loginPasswordError}</small>
                    </p>
                  ) : null}
                </div>

                <div className="form-inline">
                  <input type="checkbox" name="" id="" />
                  <p>Remember Me</p>

                  <p className="fgt-btn">Forgot Password?</p>
                </div>
                <div className="signup-btn">
                  <div
                    className="signup-btn sgn-btn btn btn-web
                    hvr-float-shadow"
                  >
                    <Link to="/" onClick={LoginApi}>
                      Submit
                    </Link>
                  </div>
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
                {showloginButton ? (
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onLoginSuccess}
                    // onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    // icon="fa-facebook"
                  />
                ) : null}
                {/* <Card style={{ width: "150px", height: "10px"}}> */}
                {/* <Card.Header> */}
                {!login && (
                  <FacebookLogin
                    appId="921201001964201"
                    autoLoad={true}
                    fields="name,email"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    // icon="fa-facebook"
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
                {login && <Image src={picture} roundedCircle />}
                {/* </Card.Header>
                  {login && (
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text>{data.email}</Card.Text>
                    </Card.Body>
                  )}
                </Card> */}
                {/* <i className="fa fa-facebook"></i> */}
                {/* <i className="fa fa-google"></i> */}
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
                  <label for="">Your Mail</label>
                  <input
                    type="tel"
                    name=""
                    // id="mobile"
                    placeholder="Mail id"
                    type="tel"
                    // minLength="10"
                    // maxLength="10"
                    onChange={(doctoremail) =>
                      setdoctoremail(doctoremail.target.value)
                    }
                  />
                  {doctoremail == "" ? (
                    <p className="text-danger">
                      <small> {doctoremailError}</small>
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
                  <label for="">Password</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Password"
                    onChange={(doctorpassword) =>
                      setdoctorpassword(doctorpassword.target.value)
                    }
                  />
                  {doctorpassword == "" ? (
                    <p className="text-danger">
                      <small> {doctorpasswordError}</small>
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
                    minLength="10"
                    maxLength="10"
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
                    type="date"
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
                    // value={registrationName}
                    onChange={(registrationName) =>
                      setregistrationName(registrationName.target.value)
                    }
                  />
                  {registrationName == "" ? (
                    <p className="text-danger">
                      <small> {registrationNameError}</small>
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Type your email here"
                    // value={registrationMail}
                    onChange={(registrationMail) => {
                      // console.log('registrationMail', registrationMail.target.value)
                      setregistrationMail(registrationMail.target.value);
                    }}
                  />
                  {registrationMail == "" ? (
                    <p className="text-danger">
                      <small> {registrationMailError}</small>
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Type your password here"
                    // value={registrationPassword}
                    onChange={(registrationPassword) =>
                      setregistrationPassword(registrationPassword.target.value)
                    }
                  />
                  {registrationPassword == "" ? (
                    <p className="text-danger">
                      <small>{registrationPasswordError}</small>
                    </p>
                  ) : null}
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
