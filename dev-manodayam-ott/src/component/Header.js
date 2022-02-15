import React from "react";
import { Link } from "react-router-dom";
import globalData from "../utill/rdx";
export default function Header() {
  return (
    <>
      <div>
        {/* Sidemenu */}
        <div class="main-sidebar main-sidebar-sticky side-menu">
          <div class="sidemenu-logo">
            {/* <a class="main-logo" href={globalData.manodayamLink}> */}
            <a class="main-logo" href="https://swarnratnaindia.com/">

              <img
                src="assets/img/brand/logo.png"
                class="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src="assets/img/brand/icon.png"
                class="header-brand-img icon-logo"
                alt="logo"
              />
              <img
                src="assets/img/brand/logo.png"
                class="header-brand-img desktop-logo theme-logo"
                alt="logo"
              />
              <img
                src="assets/img/brand/icon.png"
                class="header-brand-img icon-logo theme-logo"
                alt="logo"
              />
            </a>
          </div>
          <div class="main-sidebar-body overflow-auto">
            <ul class="nav">
              <li class="nav-item">
                <Link class="nav-link " to="home">
                  <i class="fas fa-home"></i>
                  <span class="sidemenu-label">Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="sleep">
                  <i class="fas fa-bed"></i>
                  <span class="sidemenu-label">Sleep</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="meditate">
                  <i class="fas fa-om"></i>
                  <span class="sidemenu-label">Meditate</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="music">
                  <i class="fas fa-music"></i>
                  <span class="sidemenu-label">Music</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="masterclass">
                  <i class="fas fa-lightbulb"></i>
                  <span class="sidemenu-label">Masterclass</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="body">
                  <i class="fas fa-child"></i>
                  <span class="sidemenu-label">Body</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="scene">
                  <i class="fas fa-sun"></i>
                  <span class="sidemenu-label">Scenes</span>
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link " to="profile">
                  <i class="fas fa-user"></i>
                  <span class="sidemenu-label">Profile</span>
                </Link>
              </li> */}

              <li class="nav-item nav-link">
                {/* <Link class="nav-link " to="vdolist"> */}
                  <a href="https://swarnratnaindia.com/dev-live/dev-live" class="nav-link">
                  <i class="fas fa-stream"></i>
                  <span class="sidemenu-label">Live</span>
                  </a>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>
        {/* End Sidemenu */}

        {/* Main Header*/}
        <div class="main-header side-header sticky">
          <div class="container-fluid">
            <div class="main-header-left">
              <a class="main-header-menu-icon" href="#" id="mainSidebarToggle">
                <span></span>
              </a>
            </div>
            <div class="main-header-center">
              <div class="responsive-logo">
                <a href="index.html">
                  <img
                    src="assets/img/brand/logo.png"
                    class="mobile-logo"
                    alt="logo"
                  />
                </a>
                <a href="index.html">
                  <img
                    src="assets/img/brand/logo.png"
                    class="mobile-logo-dark"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="input-group">
                <div class="mt-0 top-color">
                  <h3>Shakthi</h3>
                </div>
              </div>
            </div>
            <div class="main-header-right">
              <div class="dropdown d-md-flex">
                <a
                  class="nav-link icon full-screen-link fullscreen-button"
                  href="#"
                >
                  <i class="fullscreen">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </i>
                  <i class="exit-fullscreen">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                  </i>
                </a>
              </div>
              {/*<div class="dropdown main-profile-menu">
							<a class="d-flex" href="#">
								<span class="main-img-user" ><img alt="avatar" src="assets/img/users/9.jpg"></span>
							</a>
							<div class="dropdown-menu">
								<div class="header-navheading">
									<h6 class="main-notification-title">Alexandra Churchill</h6>
									<p class="main-notification-text">Web Designer</p>
								</div>
								<a class="dropdown-item border-top" href="profile.html">
									<i class="fe fe-user"></i> My Profile
								</a>
								<a class="dropdown-item" href="profile.html">
									<i class="fe fe-edit"></i> Edit Profile
								</a>
								<a class="dropdown-item" href="profile.html">
									<i class="fe fe-settings"></i> Account Settings
								</a>
								<a class="dropdown-item" href="lockscreen.html">
									<i class="fe fe fe-unlock"></i> Lock screen
								</a>
								<a class="dropdown-item" href="signin.html">
									<i class="fe fe-power"></i> Sign Out
								</a>
							</div>
						</div>*/}
              <button
                class="navbar-toggler navresponsive-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
              </button>
              {/* Navresponsive closed */}
            </div>
          </div>
        </div>
        {/* End Main Header*/}

        {/* Mobile-header */}
        <div class="mobile-main-header">
          <div class="mb-1 navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
            <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
              <div class="d-flex order-lg-2 ml-auto">
                <div class="dropdown header-search">
                  <a class="nav-link icon header-search">
                    <i class="header-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    </i>
                  </a>
                  <div class="dropdown-menu">
                    <div class="main-form-search p-2">
                      <div class="">
                        <div class="mt-0">
                          <form class="">
                            <div class="search-element d-flex">
                              <input
                                type="search"
                                class="form-control header-search"
                                placeholder="Search…"
                                aria-label="Search"
                                tabindex="1"
                              />
                              <button class="btn" type="submit">
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    class="nav-link icon full-screen-link fullscreen-button"
                    href="#"
                  >
                    <i class="fullscreen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </i>
                    <i class="exit-fullscreen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                      </svg>
                    </i>
                  </a>
                </div>
                <div class="dropdown main-header-notification">
                  <a class="nav-link icon" href="#">
                    <i class="header-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                      </svg>
                    </i>
                    <span class="badge badge-danger nav-link-badge">4</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow  animated p-0">
                    <div class="notifications-menu">
                      <a
                        class="dropdown-item d-flex p-3 border-bottom rounded-top"
                        href="#"
                      >
                        <span class="avatar avatar-md mr-3 fs-20 align-self-center cover-image bg-primary brround">
                          <i class="fe fe-upload"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold text-dark">
                            {" "}
                            New file Uploaded{" "}
                          </span>
                          <div class="small text-muted d-flex">5 hour ago</div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex p-3 border-bottom"
                        href="#"
                      >
                        <span class="avatar avatar-md  fs-20 mr-3 align-self-center cover-image bg-teal brround">
                          <i class="fe fe-arrow-up-circle"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold text-dark">
                            {" "}
                            Account Updated
                          </span>
                          <div class="small text-muted d-flex">20 mins ago</div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex p-3 border-bottom"
                        href="#"
                      >
                        <span class="avatar avatar-md fs-20 mr-3 align-self-center cover-image bg-info brround">
                          <i class="fe fe-shopping-bag"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold text-dark">
                            {" "}
                            Order's Recevied
                          </span>
                          <div class="small text-muted d-flex">1 hour ago</div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex p-3 border-bottom"
                        href="#"
                      >
                        <span class="avatar avatar-md mr-3 fs-20 align-self-center cover-image bg-pink brround">
                          <i class="fe fe-database"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold text-dark">
                            Server Rebooted
                          </span>
                          <div class="small text-muted d-flex">2 hour ago</div>
                        </div>
                      </a>
                    </div>
                    <a
                      href="#"
                      class="dropdown-item text-center notifications-menu1"
                    >
                      View all Notification
                    </a>
                  </div>
                </div>
                <div class="dropdown main-profile-menu">
                  <a class="d-flex" href="#">
                    <span class="main-img-user">
                      <img alt="avatar" src="assets/img/users/1.jpg" />
                    </span>
                  </a>
                  <div class="dropdown-menu">
                    <div class="header-navheading">
                      <h6 class="main-notification-title">
                        Alexandra Churchill
                      </h6>
                      <p class="main-notification-text">Web Designer</p>
                    </div>
                    <a class="dropdown-item border-top" href="profile.html">
                      <i class="fe fe-user"></i> My Profile
                    </a>
                    <a class="dropdown-item" href="profile.html">
                      <i class="fe fe-edit"></i> Edit Profile
                    </a>
                    <a class="dropdown-item" href="profile.html">
                      <i class="fe fe-settings"></i> Account Settings
                    </a>
                    <a class="dropdown-item" href="profile.html">
                      <i class="fe fe fe-unlock"></i> Lock screen
                    </a>
                    <a class="dropdown-item" href="signin.html">
                      <i class="fe fe-power"></i> Sign Out
                    </a>
                  </div>
                </div>
                <div class="dropdown  header-settings">
                  <a
                    href="#"
                    class="nav-link icon"
                    data-toggle="sidebar-right"
                    data-target=".sidebar-right"
                  >
                    <i class="header-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile-header closed */}
      </div>
    </>
  );
}
