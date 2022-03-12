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
import audio from "../Store/Connect/audio";
import LeftSideBar from "../Layout/LeftSideBar";
// let Button = new AA()

const Audio = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profileShow, setProfileShow] = useToggle(false);
  const [searchField, setSearchField] = useState("");
  const [filterdata, setfilerdata] = React.useState([]);
  const [showDeleteData, setshowDeleteData] = useState(false);
  const [alertDeleteData, setAlerDeleteData] = useState({
    title: "",
    body: "",
  });
  const handleClose = () => setshowDeleteData(false);
  const handleShow = () => setshowDeleteData(true);
  const formRef = useRef();

  const list = () => {
    axios
      .get("audios")
      .then((res) => {
        setData(res);
        setfilerdata(res)
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  React.useEffect(() => {
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
  const deleteData = (_id) => {
    audio.delete(_id).then((res) => {
      // alert(res?.message);
      handleShow(res?.message);
      setAlerDeleteData({ title: "Done", body: "Data Deleted" });
      list();
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const searchlist = data.filter((value) => {
      if (searchField == "") {
        return true


      } else {
        return value.title.toLowerCase().includes(searchField.toLocaleLowerCase()) || value.type.toLowerCase().includes(searchField.toLocaleLowerCase()) 
         
      }


    })
    setfilerdata(searchlist);


  }
  return (
    <>
      <Addform ref={formRef} list={list} />
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


                      onChange={(event) => { setSearchField(event.target.value) }}
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
                <div class="col-md-12 grid-margin">
                  <div class="row">
                    <div class="col-12 col-xl-4 offset-10">
                      <button
                        type="button"
                        class="btn btn-social-icon-text btn-info"
                        onClick={() => {
                          formRef.current.openForm();
                        }}
                      >
                        <i class="ti-plus"></i>Add
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Audio list</h4>
                      <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.N</th>

                              <th>Audio</th>
                              <th> Audio Title</th>
                              <th> Audio Description</th>
                              <th> Type</th>
                              <th>Audio Link</th>
                              <th>Date</th>
                              <th style={{ width: "80px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filterdata.map((a, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                  <img src={a.image} />
                                </td>
                                <td>{a.title}</td>
                                <td>{a.description}</td>
                                <td>{a.type}</td>

                                <td>{a.audio_link}</td>

                                <td>{a.created}</td>

                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-info border-radius-0 add-btn"
                                    onClick={() => {
                                      formRef.current.openForm(a);
                                    }}
                                  >
                                    <i class="ti-pencil"></i>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => deleteData(a._id)}
                                    class="btn btn-sm btn-danger add-btn"
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
      <Bmodal show={showDeleteData} className="h-75">
        <Bmodal.Body className="modal-body">
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

const Addform = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [media, setMedia] = useState([]);
  const [data, setData] = useState({});
  const [showdata, setshowdata] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });

  const handleClose = () => setshowdata(false);
  const handleShow = () => setshowdata(true);
  const { list } = props;

  const handleChange = (a, k) => {
    setData({ ...data, [k]: a });
  };

  const handleVisible = (state) => {
    setShow(state);
  };
  useImperativeHandle(ref, () => ({
    openForm(dt) {
      if (dt?._id) {
        setData(dt);
      } else {
        setData({});
      }
      handleVisible(true);
    },
  }));
  const save = () => {
    let fd = new FormData();
    for (let prop in data) {
      fd.append(prop, data[prop]);
    }
    audio
      .save(fd)
      .then((res) => {
        // alert(res.message);
        handleShow(res.message);
        handleVisible(false);
        setAlerdata({ title: "Done", body: "Data Inserted" });
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
        size="xl"
        onHide={() => {
          handleVisible(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Audio Uplode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="forms-sample">
            <div class="form-group">
              <div class="col-md-3  offset-9">
                <label for="exampleInputUsername1">Audio Type</label>
                <select class="form-control"
                  value={data.type || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "type");
                  }}>
                  <option>Select</option>
                  <option>Home</option>
                  <option>Sleep</option>
                  <option>Music</option>
                  <option>Meditate</option>
                  <option>Calm Masterclass</option>
                  <option>Scenes</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">Audio Title</label>
                <input
                  type="text"
                  class="form-control"
                  value={data.title || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "title");
                  }}
                  placeholder="Audio  Title"
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="exampleInputUsername1">Audio Image Upload</label>
                  <input
                    type="file"
                    class="form-control file-upload-info"
                    onChange={(e) => {
                      handleChange(e.target.files[0], "image");
                    }}
                    placeholder="Upload image Audio"
                  />
                  <small></small>
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputUsername1">Audio Link</label>
                  <input
                    type="text"
                    class="form-control file-upload-info"
                    value={data.audio_link || ""}
                    onChange={(e) => {
                      handleChange(e.target.value, "audio_link");
                    }}
                    placeholder=" Audio Link"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">Audio Description</label>
                <textarea
                  class="form-control"
                  row={4}
                  value={data.description || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "description");
                  }}
                  placeholder=" Audio Description"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleVisible(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       {/* add alert modal */}
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
export default Audio;
