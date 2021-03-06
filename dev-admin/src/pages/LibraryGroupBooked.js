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
import libraryGroup from "../Store/Connect/libraryGroup";
import globalDataLibraryCall from "../rdxLibraryCall";

import LeftSideBar from "../Layout/LeftSideBar";
// let Button = new AA()

const LibraryGroupBooked = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profileShow, setProfileShow] = useToggle(false);
  const createRoomRef = useRef();
  const changeStatusRef = useRef();
  const [searchField, setSearchField] = useState("");
  const [filterdata, setfilerdata] = React.useState([]);
  const [showDeleteData, setshowDeleteData] = useState(false);
  const [alertDeleteData, setAlerDeleteData] = useState({
    title: "",
    body: "",
  });
  const handleClose = () => setshowDeleteData(false);
  const handleShow = () => setshowDeleteData(true);
  const listBooked = () => {
    axios
      .get("/library-group/booked")
      .then((res) => {
        console.log("res", res, typeof res);
        setData(res);
        setfilerdata(res);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  React.useEffect(() => {
    listBooked();
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

  const deleteData = (_id) => {
    libraryGroup.delete(_id).then((res) => {
      // alert(res?.message);
      handleShow(res?.message);
      setAlerDeleteData({ title: "Done", body: "Appointment Deleted" });
      listBooked();
    });
  };
  const convertToDateTime = (time) => {
    const d = new Date(time);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
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

  return (
    <>
      <CreateRoomForm ref={createRoomRef} list={listBooked} />
      <CreateRoomForm ref={changeStatusRef} list={listBooked} />
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
            ></button>
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
            <LeftSideBar />
          </nav>
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Booked Group call list</h4>
                      <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Patient Details</th>
                              <th>Schedule Date</th>
                              <th>Call Status</th>
                              <th>Connect Here!</th>
                              <th style={{ width: "80px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filterdata.map((v, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                  <strong>Name: </strong> {v.fullname}
                                  <br />
                                  <strong>Email:</strong> {v.email} <br />
                                  <strong>Phone:</strong> {v.phone}{" "}
                                </td>

                                {/* <td>{convertToDateTime(v.date)}</td> */}
                                <td>{v.date}</td>

                                <td>
                                  {v.call_status === "pending"
                                    ? "Pending"
                                    : v.status === "success"
                                      ? "Success"
                                      : "Unsuccess"}
                                </td>
                                <td>
                                  {v.room_no == null ? (
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-info border-radius-0 add-btn"
                                      onClick={() => {
                                        createRoomRef.current.openForm(v);
                                      }}
                                      title="Create Room"
                                    >
                                      <i class="ti-plus"></i>
                                    </button>
                                  ) : (
                                    <a
                                      href={
                                        globalDataLibraryCall.libraryCallLink + v.room_no

                                      }
                                      target="_blank"
                                    >
                                      <button
                                        type="button"
                                        class="btn btn-sm btn-success border-radius-0 add-btn"
                                      >
                                        <i class="ti-video-camera"></i>
                                      </button>
                                    </a>
                                  )}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-info border-radius-0 add-btn"
                                    onClick={() => {
                                      createRoomRef.current.openForm(v);
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
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <footer class="footer">
              <div class="col-md-12 text-center">
                <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright ?? 2021 All Right Reserved Aanaxagorasr Software Pvt.
                  Ltd <a href="#" target="_blank"></a>{" "}
                </span>
              </div>
            </footer>
            {/* partial */}
          </div>
        </div>
      </div>
      <Bmodal show={showDeleteData} className="h-75">
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
      </Bmodal>
    </>
  );
};

const CreateRoomForm = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [showdata, setshowdata] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });

  const handleClose = () => setshowdata(false);
  const handleShow = () => setshowdata(true);
  const { list } = props;
  const handleChange = (v, k) => {
    setData({ ...data, [k]: v });
  };

  const handleVisibleRoom = (state) => {
    setShow(state);
  };
  useImperativeHandle(ref, () => ({
    openForm(dt) {
      if (dt?._id) {
        setData(dt);
      } else {
        setData({});
      }
      handleVisibleRoom(true);
    },
  }));

  const saveRoom = () => {
    libraryGroup
      .saveRoom(data, data.id)
      .then((res) => {
        // alert(res?.message);
        handleVisibleRoom(false);
        handleShow(res.message);
        setAlerdata({ title: "Done", body: "Room Created" });
        list();
      })
      .catch((err) => {
        // alert(err.message);
        handleShow(err.message);
        setAlerdata({ title: "Sorry", body: "Server Error" });
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleVisibleRoom(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Create Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="forms-sample">
            <div class="form-group">
              <label for="exampleInputUsername1"> Room No</label>
              <input
                type="text"
                class="form-control"
                value={data.room_no || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "room_no");
                }}
                placeholder="Enter Room No"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleVisibleRoom(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={saveRoom}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* room create */}
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
});
const ChangeStatusForm = forwardRef((props, ref) => {
  const [show1, setShow1] = useState(false);
  const [data, setData] = useState({});
  const { list } = props;
  const handleChange = (v, k) => {
    setData({ ...data, [k]: v });
  };

  const handleVisibleStatus = (state) => {
    setShow1(state);
  };
  useImperativeHandle(ref, () => ({
    openForm(dt) {
      if (dt?._id) {
        setData(dt);
      } else {
        setData({});
      }
      handleVisibleStatus(true);
    },
  }));

  const saveCallStatus = () => {
    libraryGroup
      .saveCallStatus(data, data.id)
      .then((res) => {
        alert(res?.message);
        handleVisibleStatus(false);
        list();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Modal
        show={show1}
        onHide={() => {
          handleVisibleStatus(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Change Call Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="forms-sample">
            <div class="form-group ">
              <label for="exampleInputUsername1">Call Status</label>
              <select
                class="form-control"
                value={data.call_status || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "call_status");
                }}
              >
                <option value="" disabled>
                  Change Call Status
                </option>
                <option value="pending">Pending</option>
                <option value="success">Success</option>
                <option value="unsuccess">Unsuccess</option>
              </select>
            </div>
          </form>

          <div class="form-group">
            <label for="exampleInputUsername1"> Message</label>
            <textarea
              class="form-control"
              rows={4}
              value={data.msg || ""}
              onChange={(e) => {
                handleChange(e.target.value, "msg");
              }}
              placeholder=" Message"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleVisibleStatus(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={saveCallStatus}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});
export default LibraryGroupBooked;
