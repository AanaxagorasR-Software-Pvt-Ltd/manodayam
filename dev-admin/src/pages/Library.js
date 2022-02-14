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
import Button from "react-bootstrap/Button";
import axios from "../utill/axios";
import { Modal } from "react-bootstrap";
import library from "../Store/Connect/library";
import LeftSideBar from "../Layout/LeftSideBar";

// let Button = new AA()

const Library = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState(leftSideBarMenu);
  const [profileShow, setProfileShow] = useToggle(false);
  const [searchField, setSearchField] = useState("");
  const [filterdata, setfilerdata] = React.useState([]);
  const formRef = useRef();

  const list = () => {
    axios
      .get("library")
      .then((res) => {
        setData(res);
        setfilerdata(res);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  React.useEffect(() => {
    list();
  }, []);

  const handleClickMenu = (name) => {
    setMenuList(
      menuList.map((li) =>
        li.name === name
          ? { ...li, isActive: !li.isActive }
          : { ...li, isActive: false }
      )
    );
  };
  const handleMouseOverkMenu = (name) => {
    setMenuList(
      menuList.map((li) =>
        li.name === name ? { ...li, isHover: true } : { ...li, isHover: false }
      )
    );
  };
  const handleMouseOutkMenu = () => {
    setMenuList(menuList.map((li) => ({ ...li, isHover: false })));
  };
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
    library.delete(_id).then((res) => {
      alert(res?.message);
      list();
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const searchlist = data.filter((value) => {
      if (searchField == "") {
        return true;
      } else {
        return (
          value.title.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
          value.expert_email
            .toLowerCase()
            .includes(searchField.toLocaleLowerCase()) ||
          value.video_type
            .toLowerCase()
            .includes(searchField.toLocaleLowerCase())
        );
      }
    });
    setfilerdata(searchlist);
  };

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
            <LeftSideBar />
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
                      <h4 class="card-title">Digital Human Library</h4>
                      <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>S.N</th>

                              {/* <th>Video </th> */}
                              <th>Motivator Image</th>

                              <th>Video Thumbnail Image</th>
                              <th>Motivator Name</th>
                              <th>Motivator Description</th>
                              <th> Motivator Type</th>
                              <th> Video Link</th>
                              <th> Motivator Email</th>
                              <th>Uploaded Date</th>
                              <th style={{ width: "80px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filterdata.map((v, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                  <img src={v.image} />
                                </td>
                                <td>
                                  <img src={v.thumbnail_image} />
                                </td>
                                <td>{v.title}</td>
                                <td>{v.description}</td>
                                <td>{v.video_type}</td>
                                <td>{v.video_link}</td>
                                <td>{v.expert_email}</td>

                                <td>{v.created}</td>

                                {/* <td>
                                  {" "}
                                  {v.status === "1" ? "Active" : "Inactive"}
                                </td> */}
                                <td>
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
                                    onClick={() => deleteData(v._id)}
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
    </>
  );
};

const Addform = forwardRef((props, ref) => {
  const [options, setOptions] = React.useState([]);
  const [show, setShow] = useState(false);
  const [media, setMedia] = useState([]);
  const [data, setData] = useState({});
  const { list } = props;

  const handleChange = (v, k) => {
    setData({ ...data, [k]: v });
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

  const handleVisible = (state) => {
    setShow(state);
  };

  const save = () => {
    let fd = new FormData();
    for (let prop in data) {
      fd.append(prop, data[prop]);
    }
    library
      .save(fd)
      .then((res) => {
        alert(res.message);
        handleVisible(false);
        list();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  React.useEffect(() => {
    axios
      .get("media-solutions")
      .then((res) => {
        setMedia(res);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, []);
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
          <Modal.Title>Motivator Uploads</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="forms-sample" encType="multipart/form-data">
            <div class="row">
              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Motivator Type</label>

                <input
                  type="text"
                  class="form-control"
                  value={data.video_type || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "video_type");
                  }}
                  placeholder="Video  type"
                />
              </div>

              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Motivator Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={data.title || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "title");
                  }}
                  placeholder="Name"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Motivator Email</label>
                <input
                  type="text"
                  class="form-control"
                  value={data.expert_email || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "expert_email");
                  }}
                  placeholder="expert email"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Motivator Image</label>
                <input
                  type="file"
                  class="form-control file-upload-info"
                  onChange={(e) => {
                    handleChange(e.target.files[0], "image");
                  }}
                  placeholder="Video Expert Image"
                />
              </div>

              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Video Upload</label>
                <input
                  type="file"
                  class="form-control file-upload-info"
                  onChange={(e) => {
                    handleChange(e.target.files[0], "video");
                  }}
                  placeholder="Upload Video"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Video Thumbnail Image</label>
                <input
                  type="file"
                  class="form-control file-upload-info"
                  onChange={(e) => {
                    handleChange(e.target.files[0], "thumbnail_image");
                  }}
                  placeholder="Video Expert Image"
                />
              </div>
              
              <div class="form-group col-md-4">
                <label for="exampleInputUsername1">Video Link</label>
                <input
                  type="text"
                  class="form-control file-upload-info"
                  value={data.video_link || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "video_link");
                  }}
                  placeholder=" Video Link"
                />
              </div>

              <div class="form-group col-md-12">
                <label for="exampleInputUsername1">Motivator Description</label>
                <textarea
                  class="form-control"
                  rows={4}
                  value={data.description || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "description");
                  }}
                  placeholder=" Video Description"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="exampleInputUsername1"> Status</label>
                <select
                  class="form-control"
                  value={data.status || ""}
                  onChange={(e) => {
                    handleChange(e.target.value, "status");
                  }}
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
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
    </>
  );
});
export default Library;
