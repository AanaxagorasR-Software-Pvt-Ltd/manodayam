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
import { API_ADMIN_URL, SUBADMIN_REGISTER_API } from "../utill/api.endpoints";

import LeftSideBar from "../Layout/LeftSideBar";

const SubadminLogin = () => {
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
  const [subadminame, setsubadminame] = useState("");
  const [subadminemail, setsubadminemail] = useState("");
  const [subadminpassword, setsubadminpassword] = useState("");
  const [roll, setroll] = useState("");
  const handleClose = () => setshowDeleteData(false);
  const handleShow = () => setshowDeleteData(true);
  const formRef = useRef();

  const LoginApi = () => {
    console.log("jyotippp", `${API_ADMIN_URL}${SUBADMIN_REGISTER_API}`);
    const RegisterationOptions = {
      email: subadminemail,
      password: subadminpassword,
      roll: roll,
    };

    axios
      .post(`${API_ADMIN_URL}${SUBADMIN_REGISTER_API}`, RegisterationOptions)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/dashboard");
        // alert("okokokokokokokok");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Login with Sub-Admin</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      //   {...register("email")}
                      id="exampleInputEmail1"
                      placeholder="Email"
                      value={subadminemail}
                      onChange={(subadminemail) => {
                        // console.log('subadminemail', subadminemail.target.value)
                        setsubadminemail(subadminemail.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      //   {...register("password")}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={subadminpassword}
                      onChange={(subadminpassword) =>
                        setsubadminpassword(subadminpassword.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="Manodayam Id"
                      className="form-control form-control-lg"
                      //   {...register("email")}
                      id="exampleInputEmail1"
                      placeholder="Manodayam id"
                      value={roll}
                      onChange={(roll) => setroll(roll.target.value)}
                    />
                  </div>
                  <div className="mt-3">
                    <input
                      type="button"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      value="LOGIN"
                      onClick={(e) => LoginApi(e)}
                    />
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

export default SubadminLogin;
