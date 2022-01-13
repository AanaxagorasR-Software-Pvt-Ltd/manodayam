import React, { useEffect, useState } from "react";
import { leftSideBarMenu } from "../Layout/menuList";
import { useToggle } from "../hooks";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../Store/slices/toggle.slice";
import  useAuth  from "../hooks/Auth";
import { useNavigate } from "react-router";
import LeftSideBar from "../Layout/LeftSideBar";
    

   
const Order = () => {
    const dispatch = useDispatch();
    const { logout } = useAuth()
    const navigate = useNavigate();
    const [ menuList, setMenuList] = useState(leftSideBarMenu);
    const [ profileShow, setProfileShow ]  = useToggle(false);

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
            li.name === name
              ? { ...li, isHover: true }
              : { ...li, isHover: false }
          )
        );
      }
      const handleMouseOutkMenu  = () => {
    
        setMenuList(
          menuList.map((li) => ({ ...li, isHover: false })))
      }
      const handleSideBar = () => {
        dispatch(isToggle());
      };
      const logoutUser = () => {
        logout()
        .then(re => {
          navigate("/admin/login")
        })
        .catch(er => {
          console.log("some error")
        })
      }

    return (
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
                    <h6 class="preview-subject font-weight-normal">Settings</h6>
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
            <li class={ `nav-item nav-profile dropdown ${profileShow ? "show" : "" }`} onClick={ setProfileShow }>
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
                class={`dropdown-menu dropdown-menu-right navbar-dropdown ${profileShow ? "show" : "" }`}
                aria-labelledby="profileDropdown"
              >
                <a class="dropdown-item">
                  <i class="ti-settings text-primary"></i>
                  Settings
                </a>
                <a class="dropdown-item" onClick={ logoutUser }>
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
                  <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <form class="form-sample">
                      <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Show entries</label>
                          <div class="col-sm-2">
                            <select class="form-control">
                              <option>10</option>
                              <option>25</option>
                              <option>30</option>
                            </select>
                          </div>
                        </div>
                      </form>
                  </div>
                  <div class="col-12 col-xl-4">
                    <div class="justify-content-end d-flex">
                      <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                      <form class="form-sample">
                      <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Search</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </form>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          

         
          
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Order list</h4>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                          Order Id
                          </th>

                          <th>
                          Product Image
                          </th>
                          <th>
                          Product Title
                          </th>
                          <th>
                         Payment status
                          </th>
                          <th>
                          Order status
                          </th>
                          <th>
                         Date
                          </th>

                          <th>
                         Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          #51286
                          </td>

                          <td><img src="../images/product/pr.png" class="mr-2" alt="pr" /></td>

                          <td>
                          Fidget Cube
                          </td>
                          <td>
                          <label class="badge badge-danger">Pending</label>
                          </td>
                          <td>
                          <label class="badge badge-warning">In progress</label>
                          </td>
                          <td>
                           Dec 15, 2021
                          </td>

                          <td>
                          ₹ 3000
                          </td>
                        </tr>       
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
								Copyright © 2021 All Right Reserved Aanaxagorasr Software Pvt. Ltd{" "}
									<a href="#" target="_blank">
								
									</a>{" "}
								
								</span>
						
							</div>
						</footer>
          {/* partial */}
        </div>
        </div>
        </div>
    );
};
export default Order;