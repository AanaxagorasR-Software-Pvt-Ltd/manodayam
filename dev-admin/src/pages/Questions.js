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
import { Modal } from "react-bootstrap";
import axios from "../utill/axios";
import question from "../Store/Connect/question";
// let Button = new AA()

const Questions = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState(leftSideBarMenu);
  const [profileShow, setProfileShow] = useToggle(false);
  const formRef = useRef();
  const list = () => {
    axios
      .get("question")
      .then((res) => {
        console.log("res", res, typeof res);
        setData(res);
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
    question.delete(_id).then((res) => {
      alert(res?.message);
      list();
    });
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
                  <input
                    type="text"
                    class="form-control"
                    id="navbar-search-input"
                    placeholder="Search now"
                    aria-label="search"
                    aria-describedby="search"
                  />
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
              {menuList.map((sMenu) => (
                <li
                  className={`nav-item ${sMenu?.isActive ? "active" : ""} ${
                    sMenu?.isHover ? "hover-open" : ""
                  }`}
                  key={uuidv4()}
                  onClick={(e) => handleClickMenu(sMenu?.name)}
                  onMouseEnter={(e) => handleMouseOverkMenu(sMenu?.name)}
                  onMouseLeave={(e) => handleMouseOutkMenu(sMenu?.name)}
                >
                  <a
                    className={`nav-link ${
                      sMenu.submenu.length > 0 ? "collapsed" : ""
                    }`}
                    href={`${sMenu?.link}`}
                    data-toggle="collapse"
                    aria-expanded={sMenu?.isActive ? true : false}
                  >
                    <i className={`${sMenu?.iconClass} menu-icon`}></i>
                    <span className="menu-title">{sMenu?.name}</span>
                    {sMenu.submenu && sMenu.submenu.length > 0 ? (
                      <i class="menu-arrow"></i>
                    ) : null}
                  </a>
                  {sMenu.submenu && sMenu.submenu.length > 0 ? (
                    <div
                      className={`collapse ${sMenu?.isActive ? " show" : ""}`}
                      id="ui-basic"
                    >
                      <ul className="nav flex-column sub-menu">
                        {sMenu.submenu.map((sub) => (
                          <li class="nav-item">
                            {" "}
                            <a
                              href={`${sub.link}`}
                              class="nav-link"
                              aria-expanded={sMenu?.isActive ? true : false}
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
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
                      <h4 class="card-title">Questions</h4>
                      <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th style={{ width: "10px" }}>S.No</th>
                              <th>Questions</th>
                              <th>Right-Answer</th>
                              <th>Category</th>
                              <th>Type</th>

                              <th>Created Date</th>


                              <th style={{ width: "80px" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((v, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                  <strong>Q:</strong> {v.ques}
                                  {/* <br /> */}
                                  <hr />
                                  <strong>Ans1:</strong> {v.ans1} <br />
                                  <strong>Ans2:</strong> {v.ans2} <br />
                                  <strong>Ans3:</strong> {v.ans3} <br />
                                  <strong>Ans4:</strong> {v.ans4} <br />
                                </td>
                                <td>{v.rytAns}</td>
                                <td>{v.category}</td>
                                <td>{v.type}</td>

                                <td>{v.createdAt}</td>

                                {/* <td>
                                  {new Date(v.datetime).toLocaleDateString()}
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
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const { list } = props;
  const handleChange = (v, k) => {
    setData({ ...data, [k]: v });
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
    question
      .save(data, data.id)
      .then((res) => {
        alert(res.message);
        handleVisible(false);
        list();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleVisible(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="forms-sample">
            <div class="form-group">
              <label for="exampleInputUsername1">Question</label>
              <input
                type="text"
                class="form-control"
                value={data.ques || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "ques");
                }}
                placeholder="Your Question"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1">Answer-1</label>
              <input
                type="text"
                class="form-control"
                value={data.ans1 || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "ans1");
                }}
                placeholder="Answer here"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1">Answer-2</label>
              <input
                type="text"
                class="form-control"
                value={data.ans2 || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "ans2");
                }}
                placeholder="Answer here"
              />
            </div>{" "}
            <div class="form-group">
              <label for="exampleInputUsername1">Answer-3</label>
              <input
                type="text"
                class="form-control"
                value={data.ans3 || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "ans3");
                }}
                placeholder="Answer here"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1">Answer-4</label>
              <input
                type="text"
                class="form-control"
                value={data.ans4 || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "ans4");
                }}
                placeholder="Answer here"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1">Right Answer</label>
              <select
                class="form-control"
                value={data.rytAns || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "rytAns");
                }}
              >
                <option value="" disabled>
                  Select Your Right Answer
                </option>
                <option value="Answer-1">Answer-1</option>
                <option value="Answer-2">Answer-2</option>
                <option value="Answer-3">Answer-3</option>
                <option value="Answer-4">Answer-4</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1"> Select Category</label>
              <select
                class="form-control"
                value={data.category || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "category");
                }}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Anxiety">Anxiety</option>
                <option value="Attention Disorder">Attention Disorder</option>
                <option value="Psychosis">Psychosis</option>
                <option value="Alcohol Abuse">Alcohol Abuse</option>
                <option value="Dementia">Dementia</option>
                <option value="Bipolar">Bipolar</option>
                <option value="Obsessive Compulsive Disorder">Obsessive Compulsive Disorder</option>
                <option value="Drug Addiction">Drug Addiction</option>
                <option value="Schizophrenia">Schizophrenia</option>
                <option value="Sexual Addiction">Sexual Addiction</option>
                <option value="Hyperactivity">Hyperactivity</option>
                <option value="Impulsivity">Impulsivity</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputUsername1"> Select Type</label>
              <select
                class="form-control"
                value={data.type || ""}
                onChange={(e) => {
                  handleChange(e.target.value, "type");
                }}
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="p1">p1</option>
                <option value="p2">p2</option>
                <option value="p3">p3</option>
                <option value="p4">p4</option>
              </select>
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
export default Questions;