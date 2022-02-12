import React from "react";
import {
  API_ADMIN_URL,
  LOGIN_API,
  REGISTER_API,
  DOCTOR_API,
  DIGITAL_HUMAN_LIBRARY,
} from "../utill/api.endpoints";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Modal as Bmodal ,Button} from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { InstagramLogin } from "@amraneze/react-instagram-login";
import { LinkedIn } from "react-linkedin-login-oauth2";
import AppleSignin from "react-apple-signin-auth";
import { Card, Image } from "react-bootstrap";
var filter =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

const clientId = "jyotiaanaxa@gmail.com";
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

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const[show,setshow]=useState(false);
  const[alertData,setAlerdata]=useState({title:"",body:""})
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    // setShowloginButton(true);
    // setShowlogoutButton(true);
  };
  const responseInstagram = (response) => {
    console.log(response);
  };

  const LoginApi = (props) => {
    if (logineMail == "") {
      setLoginmailError("Enter yours mail");
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
        console.log("login", ((typeof res.data, res.data)));
        // console.log("**********", res.data.token);
        if (res.data.status) {
          localStorage.setItem("Token",res.data.Token);
          setAlerdata({title:"Login",body:"User Login Successfully"})
       setshow(true)
          window.$("#myModal").modal("hide");
          window.location.reload();

          // handleCloseModal();
        } else {
          setAlerdata({title:"Sorry",body:"Invalid user and Password"})
       setshow(true)
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
        console.log(res.data);
        setAlerdata({title:"Registration",body:"Uesr Registration successfully"})
       setshow(true)
        window.$("#registermodal").modal("hide");
        
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
        window.$("#doctor-modal").modal("hide");
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
      humanId: props.humanId,
    };
    if(!validate(humanLibraryOptions)){
      return; 
     }
    axios
      .post(`${API_ADMIN_URL}${DIGITAL_HUMAN_LIBRARY}`, humanLibraryOptions)
      .then((res) => {
        // console.log("====llll=====", res.data.data);
        setAlerdata({ title: "Connect", body: "We are Connect you soon" })
        setshow(true)
        document.getElementById("humandigital").reset();
        setlibraryName("");
        setlibraryNum("");
        setlibraryMail("");
        
        setlibraryDate("");
       setlibraryMsg("");
      

        if (res.status == 200) {
          // localStorage.setItem("Token", res.data.token);
          window.$("#library-modal").modal("hide");
        } else {
          setAlerdata({title:"Sorry",body:"Invalid Email and Password"})
          setshow(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function validate(payload) {
    if (!payload)
      return false;
    if (payload.fullname && payload.email && payload.phone && payload.date && payload.msg && payload.msg && payload.humanId) {
      return true
    }
    return false
  }
  const handleClose = () => setshow(false);
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

              {/* <div
                className="g-recaptcha"
                data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
              ></div> */}
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
              <form action="" id="humandigital">
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
                  <input type="hidden" value={props.humanId} />
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
                    Continue
                    {/* </Link> */}
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
                <div className="signup-detail">
                  <p className="crt-btn">Create a New Account</p>
                  <p>Or sign up with</p>

                  {/* {showloginButton ? ( */}
                  <GoogleLogin
                    clientId={clientId}
                    // className="rounded-circle"
                    className="btnGoogle"
                    icon={true}
                    buttonText="sign with google"
                    onSuccess={onLoginSuccess}
                    // onFailure={onLoginSuccess}
                    // cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        // style={{ width: 300, borderRadius: 50, height: 46 }}
                      >
                        <i
                          className="fa fa-google-plus"
                          style={{
                            width: 300,
                            borderRadius: 50,
                            height: 46,
                            marginLeft: 0,
                            marginTop: -13,
                            background: 'rgb(219, 50, 54)'
                            // background: `linear-gradient(  rgb(60, 186, 84), rgb(244, 194, 13) 20%, rgb(219, 50, 54) 60%, rgb(72, 133, 237) 100%)`,
                          }}
                        >
                          &nbsp;Continue with Google
                        </i>
                      </button>
                    )}
                    isSignedIn={true}
                    // icon="fa-facebook"
                    // style={{
                    //   width: 30,
                    //   height: 10,

                    // }}
                    style={{ width: 400, borderRadius: 50 }}
                  />
                  {/* <i className="fa fa-google"></i> */}
                  {/* </GoogleLogin> */}
                  {/* ) : null} */}
                  {/* <Card style={{ width: "90px", height: "10px" }}>
                  <Card.Header>
                    {!login && ( */}

                  <FacebookLogin
                    appId="921201001964201"
                    autoLoad={true}
                    fields="email, password"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    // icon="fa-facebook"
                    // style={{ width: "20px", height: "0px" }}
                    cssClass="btnFacebook"
                    style={{ width: 300, borderRadius: 50, height: 20 }}
                    icon={
                      <i
                        className="fa fa-facebook"
                        style={{
                          width: 300,
                          borderRadius: 50,
                          height: 46,
                          paddingLeft: 83,
                        }}
                      >
                        &nbsp;Continue with Facebook
                      </i>
                    }
                    textButton={false}
                  />
                  {/* <i className="fa fa-facebook"></i> */}
                  {/* </FacebookLogin> */}
                  {/* )} */}
                  {/* {login && <Image src={picture} roundedCircle />} */}
                  {/* </Card.Header>
                  {login && (
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text>{data.email}</Card.Text>
                    </Card.Body>
                  )}
                </Card> */}
                  {/* <i className="fa fa-facebook"></i> */}
                  <InstagramLogin
                    clientId="CLIENT_ID"
                    buttonText="Login"
                    onSuccess={responseInstagram}
                    onFailure={responseInstagram}
                    cssClass="btninsta"
                    // style={{marginLeft}}
                  />

                  <AppleSignin
                    /** Auth options passed to AppleID.auth.init() */
                    authOptions={{
                      clientId: "com.example.web",
                      scope: "email name",
                      redirectURI: "https://example.com",
                      // https://www.example.com/apple/callback
                      state: "state",
                      nonce: "nonce",
                    }}
                    uiType="dark"
                    className="apple-auth-btn"
                    noDefaultStyle={false}
                    buttonExtraChildren="Continue with Apple"
                    onSuccess={(response) => console.log(response)}
                    onError={(error) => console.error(error)}
                    skipScript={false}
                    iconProp={{ style: { marginTop: "10px" } }}
                    // render={(props) => (
                    //   <button {...props}>My Custom Button</button>
                    // )}
                    style={{ width: 300, borderRadius: 50 }}
                  />
                </div>

                {/* <div
                  className="g-recaptcha"
                  data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"
                ></div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Bmodal show={show} >
        <Bmodal.Header closeButton>
          <Bmodal.Title>{alertData.title}</Bmodal.Title>
        </Bmodal.Header>
        <Bmodal.Body>{alertData.body}</Bmodal.Body>
        <Bmodal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
         ok
          </Button>
        </Bmodal.Footer>
      </Bmodal>
    </>
  );
}
