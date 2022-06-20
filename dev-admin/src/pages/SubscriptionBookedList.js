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
import { Modal } from "react-bootstrap";
import { Modal as Bmodal, Button } from "react-bootstrap";

import axios from "../utill/axios";
import subscriptions from "../Store/Connect/subscription";
import { Link } from "react-router-dom";
import LeftSideBar from "../Layout/LeftSideBar";

import getsubscription from "../Store/Connect/subscription";

// let Button = new AA()

const SubscriptionBookedList = (props) => {
  console.log(props);
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
  const formRef = useRef("");


  const list = () => {
    axios
      .post("/subscription/getsubscription")
      .then((res) => {
        console.log("res", res, typeof res);
        setData(res);
        setfilerdata(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  React.useEffect(() => {
    list();
    console.log(list());
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

  // const deleteData = (_id) => {
  //   appointment.delete(_id).then((res) => {
  //     alert(res?.message);
  //     list();
  //   });
  // };
  const update_status = async (status, id) => {
    try {
      let response = subscriptions.status({
        _id: id,
        status: status,
      });
      // alert("Status updated sucessfully");
      handleShow(setAlerdata);

      setAlerdata({ title: "Done", body: "Status updated sucessfully" });

      list();
    } catch (error) {
      // alert("Something went to  wrong");
      handleShow(setAlerdata);
      setAlerdata({ title: "Sorry", body: "Something went to  wrong" });

    }
  };
  const convertToDateTime = (time) => {
    const d = new Date(time);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };
  // const filterdata = list.filter((value) => {
  //   if (searchField == "") {
  //     return true

  //   } else {
  //     value.fullname.toLowerCase().includes(searchField.toLocaleLowerCase()) || value.email.toLowerCase().includes(searchField.toLocaleLowerCase()) || value.email.toLowerCase().includes(searchField.toLocaleLowerCase())
  //     return value

  //   }
  // })
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
        // value.doctor.name.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        //  value.doctor.email.toLowerCase().includes(searchField.toLocaleLowerCase())
      }
    });
    // setfilerdata(searchlist);
  };

  return (
    <>
      {/* <Addform ref={formRef} list={list} /> */}
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
                class={`nav-item nav-profile dropdown ${profileShow ? "show" : ""
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
                  class={`dropdown-menu dropdown-menu-right navbar-dropdown ${profileShow ? "show" : ""
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
                {/* <div class="col-md-12 grid-margin">
                    <div class="row">
                      <div class="col-12 col-xl-4 offset-10">
                        <button
                          type="button"
                          class=""
                          onClick={() => {
                            formRef.current.openForm();
                          }}
                        >
                          <i class="ti-plus"></i>Add
                        </button>
                      </div>
                    </div>
                  </div> */}

                <div class="col-lg-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Subscription booked list</h4>
                      <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Patient Details</th>
                              <th>Therapy Type</th>
                              <th>Self Assessment</th>
                              <th>Doctor for Assessment</th>
                              <th>Group Therapy</th>
                              <th>Personal Therapy</th>
                              <th>Benefitsdescriptiony</th>
                              <th>Create date:</th>
                              <th>Validity Date:</th>
                              <th>Price</th>



                              {/* <th style={{ width: "80px" }}>Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {filterdata &&
                              filterdata.map((v, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>
                                    <strong>Name: </strong>
                                    {v.user && v.user.name}
                                    <br />
                                    <strong>Email:</strong>
                                    {v.user && v.user.email}

                                  </td>
                                  <td>
                                    <strong>Type: </strong>
                                    {v.subscription && v.subscription.type}


                                  </td>
                                  <td>
                                    <strong>self </strong>
                                    { }



                                  </td>
                                  <td>
                                    <strong>Name: </strong>
                                    {v.doctorListing && v.doctorListing.name}
                                    <br />
                                    <strong>Email:</strong>


                                    {v.doctorListing && v.doctorListing.email} <br />
                                    
                                    <br/>
                                    <select className="mt-2" value={v.status || ''} onChange={(e) => { update_status(e.target.value, v._id) }}>
                                      <option value="pending">Pending</option>
                                      <option value="cancelled">
                                        cancelled
                                      </option>
                                      <option value="booked" >Booked</option>
                                    </select>
                                  </td>
                                  <td>
                                    <strong>Name: </strong>
                                    {v.subscription && v.subscription.name}
                                    <br />
                                    <strong>Email:</strong>
                                    {v.subscription && v.subscription.email} <br />
                                    <select className="mt-2" value={v.status || ''} onChange={(e) => { update_status(e.target.value, v._id) }}>
                                      <option value="pending">Pending</option>
                                      <option value="cancelled">
                                        cancelled
                                      </option>
                                      <option value="booked" >Booked</option>
                                    </select>
                                  </td>
                                  <td>
                                    <strong>Name: </strong>
                                    {v.subscription && v.subscription.name}
                                    <br />
                                    <strong>Email:</strong>
                                    {v.subscription && v.subscription.email} <br />
                                    <select className="mt-2" value={v.status || ''} onChange={(e) => { update_status(e.target.value, v._id) }}>
                                      <option value="pending">Pending</option>
                                      <option value="cancelled">
                                        cancelled
                                      </option>
                                      <option value="booked" >Booked</option>
                                    </select>
                                  </td>
                                  
                                  <td>
                                    <strong>Benefits: </strong>
                                    {v.subscription && v.subscription.benefitsdescription}
                                    <br />


                                  </td>
                                  <td>
                                    <strong>createdAt: </strong>
                                    {v.subscription && v.subscription.created}
                                    <br />


                                  </td>
                                  <td>
                                    <strong>Validity: </strong>
                                    {v.subscription && v.subscription.schedule}



                                  </td>
                                  <td>
                                    <strong>Price: </strong>
                                    {v.subscription && v.subscription.price}



                                  </td>

                                  {/*                                   
                                  {/* <td>
                                    <select className="mt-2" value={v.status || ''} onChange={(e) => { update_status(e.target.value, v._id) }}>
                                      <option value="pending">Pending</option>
                                      <option value="cancelled">
                                        cancelled
                                      </option>
                                      <option value="booked" >Booked</option>
                                    </select>
                                  </td> */}
                                  {/* <td>
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-info border-radius-0 add-btn"
                                      onClick={() => {
                                        formRef.current.openForm(v);
                                      }}
                                    >
                                      <i class="ti-pencil"></i>
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-danger add-btn"
                                      onClick={() => deleteData(v._id)}
                                    >
                                      <i class="ti-trash"></i>
                                    </button>
                                  </td> */}
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
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <footer class="footer">
              <div class="col-md-12 text-center">
                <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright © 2021 All Right Reserved Aanaxagorasr Software Pvt.
                  Ltd <a href="#" target="_blank"></a>{" "}
                </span>
              </div>
            </footer>
            {/* partial */}
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


export default SubscriptionBookedList;
