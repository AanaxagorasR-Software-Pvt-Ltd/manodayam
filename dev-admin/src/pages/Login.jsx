// import React, { useEffect } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { UserLogin } from "../Store/Services/Login";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { logoutClean } from "../Store/slices/login.slice";
// import LoadingContainer from "../Components/Loading";

// const schema = yup.object().shape({
//   email: yup.string().email().required("please provide valid email."),
// });
// const Login = (props) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading } = useSelector((store) => store.userLogin);

//   const { user } = useSelector((store) => store.userLogin) ?? { user: null };
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmitHandler = (data) => {
//     dispatch(UserLogin(data));
//   };
//   useEffect(() => {
//     if (user && user?.status && user.loginStatus === "undone") {
//       dispatch(logoutClean(user));
//       navigate("/admin/dashboard");

//     }
//   }, [user]);

//   const toRegister = () => {
//     navigate("/admin/register");
//   };

//   console.log("propd", loading);
//   return (
//     <div className="container-fluid page-body-wrapper full-page-wrapper">
//       <div className="content-wrapper d-flex align-items-center auth px-0">
//         <div className="row w-100 mx-0">
//           <div className="col-lg-4 mx-auto">
//             <div className="auth-form-light text-left py-5 px-4 px-sm-5">
//               {/* <div className="text-danger">

//                 Back
//               </div> */}
//               <div className="brand-logo">
//                 <img src="images/logo.png" alt="logo" />
//               </div>
//               <h4>Hello! let's get started</h4>
//               <h6 className="font-weight-light">Sign in to continue.</h6>
//               <form className="pt-3" onSubmit={handleSubmit(onSubmitHandler)}>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control form-control-lg"
//                     {...register("email")}
//                     id="exampleInputEmail1"
//                     placeholder="Username"
//                   />
//                   {errors.email && (
//                     <span className="validationError">
//                       {errors?.email?.message}
//                     </span>
//                   )}
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     name="password"
//                     {...register("password")}
//                     className="form-control form-control-lg"
//                     id="exampleInputPassword1"
//                     placeholder="Password"
//                   />
//                 </div>

//                 {/* <div className="mt-3">
//                   <Link to="/admin/dashboard">
//                     <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
//                       Sign In
//                     </button>
//                   </Link>
//                 </div> */}
//                 <div className="mt-3">
//                   <input
//                     type="submit"
//                     className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
//                     href="javascript:void(0)"
//                     value="LOGIN"
//                   />
//                 </div>
//                 <div className="my-2 d-flex justify-content-between align-items-center">
//                   <div className="form-check">
//                     <label className="form-check-label text-muted">
//                       <input type="checkbox" className="form-check-input" />
//                       Keep me signed in
//                     </label>
//                   </div>
//                   <Link
//                     to="/admin/forgotpassword"
//                     className="auth-link text-black"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <div className="mb-2" style={{ display: "none" }}>
//                   <button
//                     type="submit"
//                     className="btn btn-block btn-facebook auth-form-btn"
//                   >
//                     <i className="ti-facebook mr-2"></i>Connect using facebook
//                   </button>
//                 </div>
//                 <div className="text-center mt-4 font-weight-light">
//                   Don't have an account?{" "}
//                   <a
//                     href="javascript:void(0)"
//                     onClick={toRegister}
//                     className="text-primary"
//                   >
//                     Create New Account
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { leftSideBarMenu } from "../Layout/menuList";
import { useToggle } from "../hooks";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../Store/slices/toggle.slice";
import useAuth from "../hooks/Auth";
import { useNavigate } from "react-router";
// import Button from "react-bootstrap/Button";
import banner from "../Store/Services/banner";
import axios from "../utill/axios";
import { Modal } from "react-bootstrap";
import { Modal as Bmodal, Button } from "react-bootstrap";
import { API_ADMIN_URL, LOGIN_API } from "../utill/api.endpoints";

import LeftSideBar from "../Layout/LeftSideBar";

const Login = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profileShow, setProfileShow] = useToggle(false);
  const [showDeleteData, setshowDeleteData] = useState(false);
  const [alertDeleteData, setAlerDeleteData] = useState({
    title: "",
    body: "",
  });
  const [adminemail, setadminemail] = useState("");
  const [adminpassword, setadminpassword] = useState("");
  const [roll, setroll] = useState("");
  const handleClose = () => setshowDeleteData(false);
  const handleShow = () => setshowDeleteData(true);
  const formRef = useRef();

  const LoginApi = () => {
    console.log("jyotippp", `${API_ADMIN_URL}${LOGIN_API}`);
    const subadminlogin = {
      email: adminemail,
      password: adminpassword,
      roll: roll,
    };

    axios
      .post(`${API_ADMIN_URL}${LOGIN_API}`, subadminlogin)
      .then((res) => {
        console.log("newhello", res);
        if (res.status !== false) {
          localStorage.setItem("Roll", res.user.roll);
          navigate("/admin/dashboard");
        } else {
          localStorage.removeItem("Roll");
          alert("You have no account, please register first");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
    const toRegister = () => {
    navigate("/admin/register");
  };
  const toBack = () => {
    navigate("/admin/welcome");
  };
  return (
    <>
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
            <h3 className="fa fa-arrow-left mb-2 back-btn" onClick={toBack}>
                &nbsp;Back
              </h3>
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Admin Login</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      value={adminemail}
                      onChange={(adminemail) => {
                        setadminemail(adminemail.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={adminpassword}
                      onChange={(adminpassword) =>
                        setadminpassword(adminpassword.target.value)
                      }
                    />
                  </div>

                  {/* <div class="form-group">
                    <select
                      class="form-control"
                      value={roll}
                      onChange={(roll) => {
                        setroll(roll.target.value);
                      }}
                    >
                      <option>Select</option>
                      <option>admin</option>
                    </select>
                  </div> */}
                  <div className="mt-3">
                    <input
                      type="button"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      value="LOGIN"
                      onClick={(e) => LoginApi(e)}
                    />
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <a
                      href="javascript:void(0)"
                      onClick={toRegister}
                      className="text-primary"
                    >
                      Create New Account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Bmodal show={showDeleteData} className="h-75">
        <Bmodal.Body className="modal-body">
          {" "}
          <form class="forms-sample">
            <div class="form-group">
              <h4 style={{ textAlign: "center" }}>{alertDeleteData.title} </h4>
              <h3 style={{ textAlign: "center", color: "#4B49AC" }}>
                {alertDeleteData.body}
              </h3>
            </div>
          </form>
        </Bmodal.Body>
        <Bmodal.Footer>
          <Button className="modal-btn-ok" onClick={handleClose}>
            ok
          </Button>
        </Bmodal.Footer>
      </Bmodal> */}
    </>
  );
};

export default Login;
