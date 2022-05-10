import React, { useEffect, useState, useRef } from "react";
import { useToggle } from "../hooks";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../Store/slices/toggle.slice";
import useAuth from "../hooks/Auth";
import { useNavigate } from "react-router";
// import Button from "react-bootstrap/Button";
import axios from "../utill/axios";
import { Modal } from "react-bootstrap";
import { Modal as Bmodal, Button } from "react-bootstrap";
import { API_ADMIN_URL, SUBADMIN_REGISTER_API } from "../utill/api.endpoints";
const SubadminRegister = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showmodal, setshowmodal] = useState(false);
  const [AlertData, setAlertData] = useState({
    title: "",
    body: "",
  });
  const [subadminame, setsubadminame] = useState("");
  const [subadminemail, setsubadminemail] = useState("");
  const [subadminpassword, setsubadminpassword] = useState("");
  const [roll, setroll] = useState(false);

  const handleClose = () => navigate("/admin/dashboard");
  const handleShow = () => setshowmodal(true);
  const formRef = useRef();

  // Registration
  const RegisterationApi = (event) => {
    event.preventDefault();
    console.log("jyotippp", `${API_ADMIN_URL}${SUBADMIN_REGISTER_API}`);

    const RegisterationOptions = {
      email: subadminemail,
      password: subadminpassword,
      name: subadminame,
      roll: roll,
    };
    console.log("helllo", RegisterationOptions);
    axios
      .post(`${API_ADMIN_URL}${SUBADMIN_REGISTER_API}`, RegisterationOptions)
      .then((res) => {
        console.log(res.data);
        // navigate("/admin/dashboard");
        // alert("Sub-admin Created");
        handleShow();
        setAlertData({ title: "Done", body: "Sub-admin Created" });
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
                <h6 className="font-weight-light">
                  Registration with Sub-Admin
                </h6>
                <form class="pt-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      class="form-control form-control-lg"
                      id=""
                      placeholder="Sub-admin name"
                      value={subadminame}
                      onChange={(subadminame) =>
                        setsubadminame(subadminame.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name=""
                      id=""
                      class="form-control form-control-lg"
                      placeholder="Sub-admin email"
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
                      name=""
                      class="form-control form-control-lg"
                      id=""
                      placeholder="Password here"
                      value={subadminpassword}
                      onChange={(subadminpassword) =>
                        setsubadminpassword(subadminpassword.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <select
                      class="form-control form-control-lg"
                      value={roll}
                      onChange={(roll) => {
                        setroll(roll.target.value);
                      }}
                    >
                      <option>Select</option>
                      <option>manodayam001</option>
                      <option>manodayam002</option>
                      <option>manodayam003</option>
                      <option>manodayam004</option>
                      <option>manodayam005</option>
                      <option>manodayam006</option>
                      <option>manodayam007</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={(e) => {
                      RegisterationApi(e);
                    }}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bmodal show={showmodal} className="h-75">
        <Bmodal.Body className="modal-body">
          {" "}
          <form class="forms-sample">
            <div class="form-group">
              <h4 style={{ textAlign: "center" }}>{AlertData.title} </h4>
              <h3 style={{ textAlign: "center", color: "#4B49AC" }}>
                {AlertData.body}
              </h3>
            </div>
          </form>
        </Bmodal.Body>
        <Bmodal.Footer>
          <Button className="modal-btn-ok" onClick={handleClose}>
            ok
          </Button>
        </Bmodal.Footer>
      </Bmodal>
    </>
  );
};

export default SubadminRegister;
