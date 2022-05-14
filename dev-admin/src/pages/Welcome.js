import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/Auth";
import { useNavigate } from "react-router";
// import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Modal as Bmodal, Button } from "react-bootstrap";

import LeftSideBar from "../Layout/LeftSideBar";

const Welcome = () => {
  const [data, setData] = React.useState([]);
  const [admintype, setadmintype] = useState("");
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showDeleteData, setshowDeleteData] = useState(false);
  const [alertDeleteData, setAlerDeleteData] = useState({
    title: "",
    body: "",
  });
  const handleClose = () => setshowDeleteData(false);
  const handleShow = () => setshowDeleteData(true);
  const formRef = useRef();
  const handleChange = () => {
    if (admintype == "admin") {
      navigate("/admin/login");
    } else if (admintype == "subadmin") {
      navigate("/admin/subadmin-login");
    }
  };

  return (
    <>
      {/* <Addform ref={formRef} list={list} /> */}
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="images/logo.png" alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Select Your Roll</h6>
                <div class="col-md-14">
                  <select
                    class="form-control"
                    value={admintype}
                    onChange={(e) => setadmintype(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="admin">Admin</option>
                    <option value="subadmin">Sub-Admin</option>
                  </select>
                </div>
                <div onClick={handleChange()}></div>
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

export default Welcome;
