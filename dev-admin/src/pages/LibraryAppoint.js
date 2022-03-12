import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

import { useToggle } from "../hooks";

import { useDispatch } from "react-redux";
import { isToggle } from "../Store/slices/toggle.slice";
import useAuth from "../hooks/Auth";
import { useNavigate } from "react-router";
import { Modal as Bmodal, Button } from "react-bootstrap";

import axios from "../utill/axios";
import library_appoint from "../Store/Connect/library_appoint";

import LeftSideBar from "../Layout/LeftSideBar";
const LibraryAppoint = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profileShow, setProfileShow] = useToggle(false);
  const [searchField, setSearchField] = useState("");
  const [filterdata, setfilerdata] = React.useState([]);
  const [showdata, setshowdata] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });

  const handleClose = () => setshowdata(false);
  const handleShow = () => setshowdata(true);
  const list = () => {
    axios
      .get("/library-singlecall")
      .then((res) => {
        console.log("res", res, typeof res);
        setData(res);
        setfilerdata(res);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  useEffect(() => {
    list();
  }, []);

  const handleSideBar = () => {
    dispatch(isToggle());
  };
  const logoutUser = () => {
    logout()
      .then((re) => {
        navigate("/admin/login");
      })
      .catch((er) => {
        console.log("some error");
      });
  };
  const update_status = async (status, id) => {
    try {
      let response = library_appoint.status({
        _id: id,
        status: status,
      });
      // alert("Satuts updated sucessfully");
      handleShow(setAlerdata);
      setAlerdata({ title: "Done", body: "Status updated sucessfully" });
      list();
    } catch (error) {
      // alert("Something went to  wrong");
      handleShow(setAlerdata);
      setAlerdata({ title: "Sorry", body: "Something went to  wrong" });
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const searchlist = data.filter((value) => {
      if (searchField == "") {
        return true;
      } else {
        return (
          value.fullname
            .toLowerCase()
            .includes(searchField.toLocaleLowerCase()) ||
          value.email.toLowerCase().includes(searchField.toLocaleLowerCase())
        );
      }
    });
    setfilerdata(searchlist);
  };
  const convertToDateTime = (time) => {
    const d = new Date(time);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };
  return (
    <>
      <div class="container-scroller">
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo mr-5" href="index.html">
              <img src="images/logo.png" class="mr-2" alt="logo" />
            </a>
            <a class="navbar-brand brand-logo-mini" href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <button
              class="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
              onClick={handleSideBar}
            >
              <span class="icon-menu"></span>
            </button>
            <ul class="navbar-nav mr-lg-2">
              <li class="nav-item nav-search d-none d-lg-block">
                <div class="input-group">
                  <div
                    class="input-group-prepend hover-cursor"
                    id="navbar-search-icon"
                  >
                    <span class="input-group-text" id="search">
                      <i class="icon-search"></i>
                    </span>
                  </div>
                  <form onSubmit={onsubmit}>
                    <input
                      type="text"
                      class="form-control"
                      id="navbar-search-input"
                      placeholder="Search now"
                      aria-label="search"
                      aria-describedby="search"
                      value={data.status}
                      onChange={(event) => {
                        setSearchField(event.target.value);
                      }}
                    />
                  </form>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav navbar-nav-right">
              <li class="nav-item dropdown">
                <a
                  class="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i class="icon-bell mx-0"></i>
                  <span class="count"></span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <p class="mb-0 font-weight-normal float-left dropdown-header">
                    Notifications
                  </p>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-success">
                        <i class="ti-info-alt mx-0"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal">
                        Application Error
                      </h6>
                      <p class="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-warning">
                        <i class="ti-settings mx-0"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal">
                        Settings
                      </h6>
                      <p class="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-info">
                        <i class="ti-user mx-0"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal">
                        New user registration
                      </h6>
                      <p class="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li
                class={`nav-item nav-profile dropdown ${
                  profileShow ? "show" : ""
                }`}
                onClick={setProfileShow}
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                  aria-expanded={`${profileShow}`}
                >
                  <img src="images/faces/face28.jpg" alt="profile" />
                </a>
                <div
                  class={`dropdown-menu dropdown-menu-right navbar-dropdown ${
                    profileShow ? "show" : ""
                  }`}
                  aria-labelledby="profileDropdown"
                >
                  <a class="dropdown-item">
                    <i class="ti-settings text-primary"></i>
                    Settings
                  </a>
                  <a class="dropdown-item" onClick={logoutUser}>
                    <i class="ti-power-off text-primary"></i>
                    Logout
                  </a>
                </div>
              </li>
              <li class="nav-item nav-settings d-none d-lg-flex">
                <a class="nav-link" href="#">
                  <i class="icon-ellipsis"></i>
                </a>
              </li>
            </ul>
            <button
              class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span class="icon-menu"></span>
            </button>
          </div>
        </nav>
        <div class="container-fluid page-body-wrapper">
          <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <LeftSideBar />
            </ul>
          </nav>
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">One to one Appointment list</h4>
                      <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Motivator Details</th>
                              <th>Patient Details</th>
                              {/* <th>Issue</th> */}
                              <th>Schedule Date</th>
                              <th> Status</th>

                              {/* <th style={{ width: "80px" }}>Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {data &&
                              filterdata.map((v, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>
                                    <strong>Name: </strong>
                                    {v.library && v.library.title}
                                    <br />
                                    <strong>Email:</strong>
                                    {v.library && v.library.expert_email}
                                    <br />
                                  </td>

                                  <td>
                                    <strong>Name: </strong> {v.fullname}
                                    <br />
                                    <strong>Email:</strong> {v.email} <br />
                                    <strong>Phone:</strong> {v.phone} <br />
                                    <strong>Message:</strong> {v.msg}
                                  </td>
                                  {/* <td>{v.date}</td> */}
                                  <td>{convertToDateTime(v.date)}</td>

                                  {/* <td>
                                    {v.status === "pending"
                                      ? "Pending"
                                      : v.status === "booked"
                                        ? "Booked"
                                        : "Cancelled"}
                                  </td> */}
                                  <td>
                                    <select
                                      className="mt-2"
                                      value={v.status || ""}
                                      onChange={(e) => {
                                        update_status(e.target.value, v._id);
                                      }}
                                    >
                                      <option value="pending">Pending</option>
                                      <option value="cancelled">
                                        cancelled
                                      </option>
                                      <option value="booked">Booked</option>
                                    </select>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer class="footer">
              <div class="col-md-12 text-center">
                <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright © 2021 All Right Reserved Aanaxagorasr Software Pvt.
                  Ltd <a href="#" target="_blank"></a>{" "}
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <Bmodal show={showdata} className="h-75">
        <Bmodal.Body className="modal-body">
          {" "}
          <form class="forms-sample">
            <div class="form-group">
              <h4 style={{ textAlign: "center" }}>{alertData.title} </h4>
              <h3 style={{ textAlign: "center", color: "#4B49AC" }}>
                {alertData.body}
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


export default LibraryAppoint;
